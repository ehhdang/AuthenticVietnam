import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "@auth0/auth0-angular";
import { Comment } from "../../shared/Comment";
import { CommentsService } from "../../services/comments.service";
import { MatDialog } from "@angular/material/dialog";
import { AuthRequestDialogComponent } from "../auth-request-dialog/auth-request-dialog.component";
import { User } from 'src/app/shared/User';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() newComment = new EventEmitter<Comment>();
  user: User;

  commentForm: FormGroup = this.fb.group({
    username: [""],
    userId: [""],
    userPicture: [""],
    rating: ["", Validators.required],
    comment: ["", Validators.required],
    date: [Date.now()]
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private commentsService: CommentsService,
    private matDialog: MatDialog,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user) {
        this.usersService.getUser(user.sub).subscribe(completeUser => {
          this.user = completeUser;
          console.log(this.user);
          this.commentForm.patchValue({
            username: this.user.username,
            userId: this.user.user_id,
            userPicture: this.user.picture,
          });
        });
      };
    });
  }

  onSubmit(): void {
    var comment: Comment = this.commentForm.value; 
    console.log(comment);
    this.commentsService.postComment(comment)
      .subscribe(comment => {
        this.newComment.emit(comment);
        this.commentForm.patchValue({
          comment: "",
          rating: "",
        });
      });
  }

  openAuthRequestDialog(): void {
    this.matDialog.open(AuthRequestDialogComponent, {
      height: "125px",
      width: "300px",
      restoreFocus: false,
    })
  }

}
