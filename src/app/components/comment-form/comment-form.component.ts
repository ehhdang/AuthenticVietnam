import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Comment } from "../../shared/Comment";
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { UsersService } from "../../services/users.service";
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Output() newComment = new EventEmitter<Comment>();
  user: User;

  commentForm: FormGroup = this.fb.group({
    rating: ["", Validators.required],
    comment: ["", Validators.required],
    author: ["", Validators.required],
    date: [Date.now()]
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private matDialog: MatDialog,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(user => {
      if (user) {
        this.user = user;
        this.commentForm.patchValue({
          author: user._id
        });
      }
    });
  }

  onSubmit(): void {
    var comment: Comment = this.commentForm.value; 
    this.newComment.emit(comment);
    this.commentForm.reset();
  }

  openAuthRequestDialog(): void {
    this.matDialog.open(LoginDialogComponent, {
      width: "500px",
      height: "450px"
    })
  }

}
