import { Recipe } from "./Recipe";

export class User {
    _id: String;
    givenName: String;
    familyName: String;
    authId: String;
    favorites: Recipe[];
}