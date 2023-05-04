import mongoose from "mongoose";
import bookModel from "../models/book.model.js";

const getBooks = async (req, res) => {
  // res.json({ message: "Hello from getBooks" });
  const books = await bookModel.find();
  res.json(books);
};
const getBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const data = await bookModel.findById(bookId);
    if (!data) {
      console.log("Book not found");
      return res.status(404).json({ message: "Book not found" });
    }
    console.log("Book found");
    res.json(data);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      console.log("Invalid Book ID");
      return res.status(400).json({ message: "Invalid Book ID" });
    }
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};



const addBook = async (req, res) => {
  try {
    const { bookname, publication, price, description } = req.body;
    const newBook = new bookModel({
      bookname,
      publication,
      price,
      description,
    });
    await newBook.save();
    res.json("Book added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};


const removeBook = async (req, res) => {
  const { bookId } = req.params;
  bookModel
    .findByIdAndDelete(bookId)
    .then((data) => {
      console.log("Book successfully deleted");
      res.json({
        book: data,
        message: "Book successfully deleted",
      });
    })
    .catch((err) => console.log(err));
};

const updateBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const { bookname, publication, price, description } = req.body;
    
    const updatedBook = await bookModel.findByIdAndUpdate(
      bookId,
      {
        bookname,
        publication,
        price,
        description,
      },
      { new: true }
    );
    if (!updatedBook) {
      console.log("Book not found");
      return res.status(404).json({ message: "Book not found" });
    }
    console.log("Book updated");
    res.json({
      book: updatedBook,
      message: "Book updated",
    });
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      console.log("Invalid Book ID");
      return res.status(400).json({ message: "Invalid Book ID" });
    }
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }  
}

export { getBooks, getBook, addBook, removeBook , updateBook };
