import { Book } from "./book.model";

const getBooksByGenreAndPublisherFromDB = async (genre: string, publisher: string) => {
  const result = await Book.find({ genre, 'publisher.name': publisher });
  return result;
}

const updatePriceByYearFromDB = async () => {

  const result = await Book.updateMany(
    {
      publicationYear: { $gt: 2020 },
      price: { $type: 'string' }
    },
    [{ $set: { price: { $toInt: "$price" } } }]
  );

  return result;
}

const getBooksByGenreFromDB = async (genre: string) => {
  const result = await Book.find({ genre });
  return result;
}

export default {
  getBooksByGenreAndPublisherFromDB,
  getBooksByGenreFromDB,
  updatePriceByYearFromDB
}