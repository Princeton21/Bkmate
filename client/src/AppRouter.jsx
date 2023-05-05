import React from "react";
import { Routes, Route } from "react-router-dom";
import SellForm from "./Components/SellForm/SellForm";
import Home from "./Pages/Home/Home";
import BookSingle from "./Pages/Book/BookSingle";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import AvailableBooks from "./Pages/AvailableBooks/AvailableBooks";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<SellForm />} />
        <Route path="/availablebooks" element={<AvailableBooks />} />
        <Route path="/books/:bookId" element={<BookSingle />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
