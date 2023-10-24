"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Voto = {
  _id: string;
  created_at: Date;
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
        console.log(VotosList);
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
        {VotosList.length > 0 ? (
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Voto #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Candidato
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Partido
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fecha de creación
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {VotosList.map((voto, index) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index}
                      </th>
                      <td className="px-6 py-4">{voto._id}</td>
                      <td className="px-6 py-4">{voto.infoCandidato.nombre}</td>
                      <td className="px-6 py-4">{voto.infoPartido.nombre}</td>
                      <td className="px-6 py-4">
                        {voto.created_at.toLocaleString("es-LA", {
                          timeZone: "UTC",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Cargando</p>
        )}
      </div>
    </main>
  );
};

export default Votos;
