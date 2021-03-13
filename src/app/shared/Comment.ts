import { User } from "../shared/User";

export class Comment {
    _id: String;
    rating: Number;
    author: User;
    comment: String;
    date: Date;
}