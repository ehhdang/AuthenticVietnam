import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../../shared/Comment";
import { CommentsService } from "../../services/comments.service";
import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.css']
})
export class RecipeCommentsComponent implements OnInit {

  @Input() recipeId: String;
  @Input() user: User;
  comments: Comment[];
  commentIcon = faList;
  trashIcon = faTrash;

  constructor(
    private commentsService: CommentsService,
  ) { }

  ngOnInit(): void {
    this.commentsService.getComments(this.recipeId)
      .subscribe(comments => this.comments = comments);
  }

  addComment(comment: Comment): void {
    this.commentsService.postComment(this.recipeId, comment)
      .subscribe(comments => this.comments = comments);
  }

  modifyComment(commentId: String, comment: Comment): void {
    this.commentsService.modifyComment(this.recipeId, commentId, comment)
      .subscribe(comments => this.comments = comments);
  }

  deleteComment(commentId: String): void {
    this.commentsService.deleteComment(this.recipeId, commentId)
      .subscribe(comments => this.comments = comments);
  }

  isAuthorizedToDelete(comment: Comment): boolean {
    if (this.user) {
      return this.user._id == comment.author._id;
    } else {
      return false;
    }
  }
}
