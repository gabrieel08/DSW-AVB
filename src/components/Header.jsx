import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline font-bold" : "hover:underline"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/favoritos"
        className={({ isActive }) =>
          isActive ? "underline font-bold" : "hover:underline"
        }
      >
        Favoritos
      </NavLink>
    </header>
  );
}