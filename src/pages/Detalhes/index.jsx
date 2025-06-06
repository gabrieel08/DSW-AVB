import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar país");
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [code]);

  if (loading) return <p className="p-4">Carregando detalhes...</p>;
  if (error) return <p className="p-4 text-red-500">Erro: {error}</p>;
  if (!country) return <p className="p-4">País não encontrado.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{country.name.common}</h1>
      <img src={country.flags?.png} alt={`Bandeira de ${country.name.common}`} className="w-48 h-28 object-cover mb-4" />
      <p><strong>Região:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>População:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Moeda(s):</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A"}</p>
      <p><strong>Língua(s):</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
    </div>
  );
}
