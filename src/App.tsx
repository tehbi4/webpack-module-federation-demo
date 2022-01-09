import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Actors } from "./scenes/Actors";
import { Home } from "./scenes/Home";
import { Movies } from "./scenes/Movies";

import styles from "./App.css";
import { NavLink } from "./components/NavLink";

export const App: React.FC = () => {
  //
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/actors">Actors</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="actors" element={<Actors />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
