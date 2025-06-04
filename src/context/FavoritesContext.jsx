import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (country) => {
    setFavorites((prev) => {
      if (prev.find(c => c.cca3 === country.cca3)) return prev;
      return [...prev, country];
    });
  };

  const removeFavorite = (countryCode) => {
    setFavorites((prev) => prev.filter(c => c.cca3 !== countryCode));
  };

  const isFavorite = (countryCode) => {
    return favorites.some(c => c.cca3 === countryCode);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
