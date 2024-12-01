import { useAuth } from "@/hooks/useAuth";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ComunicadoController } from "@/controllers/ComunicadoController";

const EducadorComunicados = () => {
  const { isLoading } = useAuth();
  const [nivel, setNivel] = useState("");
  const [loadingFull, setLoadingFull] = React.useState<boolean>(true);
  const [comunicados, setComunicados] = useState<
    { id: number; titulo: string; texto: string; estado: boolean }[]
  >([]);
  const [nivelesSelect, setNivelesSelect] = useState<
    { key: number; text: string }[]
  >([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [comunicadoSeleccionado, setComunicadoSeleccionado] = useState<{
    id: number;
    titulo: string;
    texto: string;
    estado: boolean;
  } | null>(null);
  const comunicadoController = new ComunicadoController();
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingFull(true);
    const fetchGrados = async () => {
      if (!isLoading) {
        try {
          const niveles = await comunicadoController.getNivelesByEducador();
          if (niveles) {
            setNivelesSelect(
              niveles.map((nivel: { key: number; text: string }) => ({
                key: nivel.key,
                text: nivel.text,
              }))
            );
          }
          setLoadingFull(false);
        } catch (error) {
          setLoadingFull(false);
          console.error("Error fetching niveles:", error);
        }
      }
    };

    fetchGrados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // Ejemplo de datos de comunicados
  const comunicadosEjemplo = [
    {
      id: 1,
      titulo: "Reunión de Padres",
      texto: "Recordatorio de la reunión",
      estado: true,
    },
    {
      id: 2,
      titulo: "Vacunas",
      texto: "Actualización sobre vacunación",
      estado: false,
    },
    {
      id: 3,
      titulo: "Paseo Escolar",
      texto: "Información sobre el paseo",
      estado: true,
    },
  ];

  // Manejar la búsqueda y mostrar los comunicados filtrados por grado
  const handleBuscarComunicados = () => {
    setComunicados(comunicadosEjemplo); // Aquí puedes filtrar según el grado si tienes una lista completa
  };

  useEffect(() => {
    setComunicados([]);
  }, [nivel]);

  // Manejar la selección de un comunicado y mostrar el modal
  const handleCardClick = (comunicado: {
    id: number;
    titulo: string;
    texto: string;
    estado: boolean;
  }) => {
    setComunicadoSeleccionado(comunicado);
    setMostrarModal(true);
  };

  // Manejar activación/desactivación del estado del comunicado
  const handleToggleEstado = () => {
    if (comunicadoSeleccionado) {
      setComunicados((prev) =>
        prev.map((com) =>
          com.id === comunicadoSeleccionado.id
            ? { ...com, estado: !com.estado }
            : com
        )
      );
      setComunicadoSeleccionado((prev) =>
        prev ? { ...prev, estado: !prev.estado } : null
      );
    }
  };

  // Manejar la eliminación del comunicado
  const handleEliminarComunicado = () => {
    if (comunicadoSeleccionado) {
      setComunicados((prev) =>
        prev.filter((com) => com.id !== comunicadoSeleccionado.id)
      );
      setMostrarModal(false);
    }
  };

  return (
    <Spin spinning={loadingFull}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold">Mis Mensajes</h1>
          <button
            onClick={() => navigate("/educador/comunicados/crear-comunicado")}
            className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700"
          >
            <div className="flex justify-center">
              <PlusCircleOutlined className="text-2xl mr-2 text-white" />
              <span>Nuevo</span>
            </div>
          </button>
        </div>
        <div className="border border-gray-300 rounded-lg p-2 mb-2 text-sm bg-gray-200">
          <span>
            Selecciona un mensaje enviado para revisar.
            <br />
            Haz click en <strong>"Nuevo"</strong> para redactar un mensaje y
            luego en <strong>"Aceptar"</strong>.
          </span>
        </div>

        {/* Filtro de grado */}
        <div className="mb-2 flex">
          <select
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            className="border text-xs border-gray-300 rounded px-3 py-2 w-full mr-2"
          >
            <option value="">Seleccionar Nivel</option>
            {nivelesSelect.map((nivel) => (
              <option key={nivel.key} value={nivel.key}>
                {nivel.text}
              </option>
            ))}
          </select>
          <button
            onClick={handleBuscarComunicados}
            className="bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={nivel === ""}
          >
            Buscar
          </button>
        </div>

        {/* Lista de comunicados */}
        <div className="grid gap-2">
          {comunicados.map((comunicado) => (
            <div
              key={comunicado.id}
              className="border border-gray-300 rounded p-4 shadow-md cursor-pointer"
              onClick={() => handleCardClick(comunicado)}
            >
              <h2 className="font-semibold">{comunicado.titulo}</h2>
              <p>{comunicado.texto.substring(0, 50)}...</p>
            </div>
          ))}
        </div>

        {/* Modal de información del comunicado */}
        {mostrarModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
              <button
                onClick={() => setMostrarModal(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                X
              </button>
              {comunicadoSeleccionado && (
                <>
                  <h2 className="text-lg font-bold mb-2">
                    {comunicadoSeleccionado.titulo}
                  </h2>
                  <p className="mb-4">{comunicadoSeleccionado.texto}</p>
                  <p className="mb-4">
                    <strong>Estado:</strong>{" "}
                    {comunicadoSeleccionado.estado ? "Activado" : "Desactivado"}
                  </p>
                  <button
                    onClick={handleToggleEstado}
                    className={`px-4 py-2 rounded mb-2 w-full ${
                      comunicadoSeleccionado.estado
                        ? "bg-gray-500"
                        : "bg-blue-600"
                    } text-white`}
                  >
                    {comunicadoSeleccionado.estado ? "Desactivar" : "Activar"}
                  </button>
                  <button
                    onClick={handleEliminarComunicado}
                    className="bg-red-600 text-white px-4 py-2 rounded w-full"
                  >
                    Eliminar
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default EducadorComunicados;