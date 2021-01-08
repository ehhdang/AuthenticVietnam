import { Ingredient } from './Ingredient';
import { Direction } from './Direction';
import { Comment } from "./Comment";

export class Recipe {
    _id: String;
    name: String;
    image: String;
    description: String;
    serving: Number;
    ingredients: Ingredient[];
    directions: Direction[];
    comments: Comment[];
}