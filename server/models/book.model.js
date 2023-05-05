import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  publication: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  pictures: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
});

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
