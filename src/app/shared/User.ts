import { Recipe } from "./Recipe";

export class User {
    _id: String;
    email: String;
    firstname: String;
    lastname: String;
    favorites: Recipe[];
}