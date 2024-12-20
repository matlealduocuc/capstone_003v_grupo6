import { Link } from "react-router-dom";

export const NuevoGrado = () => {
  return (
    <>
      <h1 className="text-5xl font-black">Mantenedor de Grados</h1>
      <p className="max-sm:text-xl text-2xl font-light text-gray-500 mt-5">
        Llena el formulario para agregar un nuevo grado
      </p>

      <nav className="my-5">
            <Link
              className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
              to={`/mantenedores/grados/lista`}
            >
              Volver
            </Link>
          </nav>
    </>
  );
};
