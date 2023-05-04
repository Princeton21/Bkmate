import React from "react";
import { Routes, Route } from "react-router-dom";
import SellForm from "./Components/SellForm/SellForm";
import Home from "./Pages/Home/Home";
import BookSingle from "./Pages/Book/BookSingle";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<SellForm />} />
        <Route path="/books/:bookId" element={<BookSingle />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
