"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Voto = {
  _id: string;
  infoCandidato: {
    nombre: string;
  };
  infoPartido: {
    nombre: string;
  };
};
const Votos = () => {
  const [VotosList, setVotosList] = useState<Voto[]>([]);

  
  const fetchVotes = () => {
    axios
      .get("http://localhost:3000/votos/get/all")
      .then((response) => {
        setVotosList(response.data); // Almacena los datos en el estado
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return (
    <main>
      <div>
        <p>Hola esto es Votos</p>
      </div>
      
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidato
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Partido
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {VotosList.map((voto) => (
              <tr key={voto._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  console.log(voto.infoCandidato.nombre)
                  {voto.infoCandidato.nombre}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {voto.infoPartido.nombre}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Votos;