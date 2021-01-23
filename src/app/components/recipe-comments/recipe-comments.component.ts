import { Component, Input, OnInit } from '@angular/core';
import { Comment } from "../../shared/Comment";
import { RecipesService } from "../../services/recipes.service";
import { faList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-recipe-comments',
  templateUrl: './recipe-comments.component.html',
  styleUrls: ['./recipe-comments.component.css']
})
export class RecipeCommentsComponent implements OnInit {

  @Input() recipeId: String;
  comments: Comment[];
  commentIcon = faList;

  constructor(
    private recipesService: RecipesService,
  ) { }

  ngOnInit(): void {
    this.recipesService.getComments(this.recipeId)
      .subscribe(comments => this.comments = comments);
  }

  addComment(comment: Comment): void {
    this.recipesService.postComment(this.recipeId, comment._id)
      .subscribe(comments => this.comments = comments);
  }

}
