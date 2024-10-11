import { Model } from "mongoose";

export type TBookPublisher = {
  name: string;
  location: string,
}

export type TBookReviews = {
  user: string;
  comment: string,
}

export type TBook = {
  title: string;
  author: string[],
  genre: string,
  publicationYear: number,
  publisher: TBookPublisher,
  reviews: TBookReviews[],
  rating: number,
  price: string
}

export interface BookModel extends Model<TBook> {
  featuredBooks(): Promise<TBook[] | []>;
}
