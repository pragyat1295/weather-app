import "./styles.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
const Details = lazy(() => import("./Pages/Details"));
import CircularProgress from '@mui/material/CircularProgress';

export default function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:id"
            element={
              <Suspense fallback={<div><CircularProgress color="primary" /></div>}>
                <Details />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
