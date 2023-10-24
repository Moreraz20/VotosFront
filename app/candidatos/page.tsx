"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Candidato = {
  _id: string;
  nombre: string;
  cedula: string;
};
const Candidatos = () => {
  const [CandidatosList, setCandidatosList] = useState<Candidato[]>([]);

  const fetchVotes = () => {
    axios
      .get("http://localhost:3000/candidatos/get/all")
      .then((response) => {
        setCandidatosList(response.data); // Almacena los datos en el estado
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
        {CandidatosList.length > 0 ? (
          <div> 
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Candidato #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nombre del candidato
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cedula
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Editar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CandidatosList.map((candidato, index) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    > 
                      {index}
                    </th>
                    <td className="px-6 py-4">{candidato._id}</td>
                    <td className="px-6 py-4">{candidato.nombre}</td>
                    <td className="px-6 py-4">{candidato.cedula}</td>
                    <td className="px-6 py-4"><button>Editar</button></td>
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

export default Candidatos;