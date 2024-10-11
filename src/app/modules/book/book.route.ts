import express from 'express';
import BookController from './book.controller';

const router = express.Router();

router.get("/", BookController.getBooksByGenreAndPublisher);

router.patch("/", BookController.updatePriceByYear);

router.get("/:genre", BookController.getBooksByGenre);


export const BookRoutes = router;
