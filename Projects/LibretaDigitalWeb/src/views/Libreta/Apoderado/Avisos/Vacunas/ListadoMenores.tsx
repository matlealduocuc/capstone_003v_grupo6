import { MenorController } from "@/controllers/MenorController";
import { useAuth } from "@/hooks/useAuth";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VacunasListadoMenores = () => {
  const { isLoading } = useAuth();
  const [menores, setMenores] = useState<
    {
      id: number;
      nombre: string;
      edad: number;
      autorizado: boolean | null;
      nivel: string;
    }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const menorController = new MenorController();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenores = async () => {
      setLoading(true);
      if (!isLoading) {
        try {
          const menoresData =
            await menorController.getMenoresVacunasByApoderado();
          if (menoresData) {
            setMenores(
              menoresData.map(
                (menor: {
                  id: number;
                  nombre: string;
                  edad: number;
                  autorizado: boolean | null;
                  nivel: string;
                }) => ({
                  id: menor.id,
                  nombre: menor.nombre,
                  edad: menor.edad,
                  autorizado: menor.autorizado,
                  nivel: menor.nivel,
                })
              )
            );
          }
        } catch (error) {
          console.error("Error fetching menores:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMenores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleMenorClick = (id: number) => {
    navigate(`/apoderado/avisos/vacunas/menor/${id}`);
  };

  const filteredMenores = menores.filter((menor) =>
    menor.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Spin spinning={loading}>
      <div className="p-4 w-full sm:px-32 md:px-40 lg:px-48 xl:px-56">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Listado de Menores</h1>
        </div>

        <div className="mb-4">
          <form
            className="max-w-full mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              htmlFor="search-menores"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Buscar
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search-menores"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar por nombre del menor"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>

        {/* Lista de menores */}
        <div className="grid gap-4">
          {filteredMenores.length > 0 ? (
            filteredMenores.map((menor) => (
              <div
                key={menor.id}
                className={`border ${
                  menor.autorizado != null && !menor.autorizado
                    ? "border-gray-300"
                    : "border-gray-600 bg-gray-300"
                } rounded p-4 shadow-md cursor-pointer`}
                onClick={() => {
                  if (menor.autorizado != null && !menor.autorizado) {
                    handleMenorClick(menor.id);
                  }
                }}
              >
                <h2 className="font-semibold">{menor.nombre}</h2>
                <p>Edad: {menor.edad} años</p>

                {menor.autorizado ? (
                  <p className="text-green-600 font-bold">Estado: AUTORIZADO</p>
                ) : menor.autorizado != null && !menor.autorizado ? (
                  <p className="text-red-600 font-bold">
                    Estado: NO AUTORIZADO
                  </p>
                ) : (
                  <p>Estado: NO SE HA SOLICITADO</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No se encontraron menores.
            </p>
          )}
        </div>
      </div>
    </Spin>
  );
};

export default VacunasListadoMenores;
