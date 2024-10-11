import { model, Schema } from "mongoose";
import { BookModel, TBook, TBookPublisher, TBookReviews } from "./book.interface";

const bookPublisherSchema = new Schema<TBookPublisher>({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, { _id: false })

const bookReviewsSchema = new Schema<TBookReviews>({
  user: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { _id: false })

const schema = new Schema<TBook, BookModel>({
  title: {
    type: String,
    required: true
  },
  author: {
    type: [String],
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number,
    required: true
  },
  publisher: {
    type: bookPublisherSchema,
    required: true
  },
  reviews: {
    type: [bookReviewsSchema],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
}, { timestamps: true, versionKey: false })

//creating a custom static method
schema.statics.featuredBooks = async function () {
  const result = await Book.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gt: ["$rating", 4.5] },
            then: "BestSeller",
            else: "Popular",
          },
        }
      }
    },
    { $project: { rating: 1, featured: 1 } }
  ])
  return result
};

export const Book = model<TBook, BookModel>("Book", schema)
