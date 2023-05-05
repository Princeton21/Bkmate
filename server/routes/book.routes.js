import { Router } from "express";
import {
  getBooks,
  getBook,
  addBook,
  removeBook,
  updateBook
} from "../controllers/book.controller.js";

const router = Router();
router.get("/books", getBooks);
router.get("/book/:bookId", getBook);
router.put("/book/:bookId", updateBook);
router.post("/book", addBook);
router.delete("/book/:bookId", removeBook);
export default router;
