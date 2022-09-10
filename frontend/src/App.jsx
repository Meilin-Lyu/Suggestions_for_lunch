import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Home,
    NoMatch,
    Navigation,
    CreatePost,
    Categories,
  } from "./components";

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Categories" element={<Categories />} />
                <Route path="/Post" element={<CreatePost />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
}
