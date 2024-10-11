import { Request, Response } from "express";
import BookService from './book.service';


const getBooksByGenreAndPublisher = async (req: Request, res: Response) => {
  try {
    const genre = req.query.genre as string;
    const publisher = req.query.publisher as string;
    const result = await BookService.getBooksByGenreAndPublisherFromDB(genre, publisher);

    res.status(200).json({
      success: true,
      message: "Books are retrieved successfully by genre and publisher",
      data: result
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error
    })
  }
}

const updatePriceByYear = async (req: Request, res: Response) => {
  try {
    const result = await BookService.updatePriceByYearFromDB();

    res.status(200).json({
      success: true,
      message: "Update Books Price By Published Year",
      data: result
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error
    })
  }
}

const getBooksByGenre = async (req: Request, res: Response) => {
  try {
    const genre = req.params.genre;
    const result = await BookService.getBooksByGenreFromDB(genre);

    res.status(200).json({
      success: true,
      message: "Books are retrieved successfully by gener",
      data: result
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Something Went Wrong",
      error: error
    })
  }
}

export default {
  getBooksByGenreAndPublisher,
  updatePriceByYear,
  getBooksByGenre
}