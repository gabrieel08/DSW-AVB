// src/components/CountryCard.jsx
import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const toggleFavorite = () => {
    if (isFavorite(country.cca3)) {
      removeFavorite(country.cca3);
    } else {
      addFavorite(country);
    }
  };

  return (
    <div className="border rounded p-4 shadow-md flex flex-col items-center">
      <img src={country.flags?.png} alt={`Bandeira de ${country.name.common}`} className="w-32 h-20 object-cover mb-2" />
      <h3 className="font-bold text-lg mb-1">{country.name.common}</h3>
      <p className="text-sm mb-2">{country.region}</p>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 rounded ${isFavorite(country.cca3) ? "bg-red-500 text-white" : "bg-gray-200"}`}
          onClick={toggleFavorite}
        >
          {isFavorite(country.cca3) ? "Remover Favorito" : "Favoritar"}
        </button>
        <Link to={`/detalhes/${country.cca3}`} className="px-3 py-1 border rounded hover:bg-gray-100">
          Detalhes
        </Link>
      </div>
    </div>
  );
}   