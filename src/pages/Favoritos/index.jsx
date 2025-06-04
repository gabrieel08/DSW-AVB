import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import CountryCard from "../../components/CountryCard";

export default function Favoritos() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0)
    return <p className="p-4">Você não possui países favoritados.</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {favorites.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}
