import api from "@/lib/axios";
import { AxiosError, isAxiosError } from "axios";

export class ComunicadoService {
  async getComunicadosByGrado(idGrado: number) {
    try {
      const response = await api.get("/comunicado/obtenerByGrado/" + idGrado);
      return response.data;
    } catch (error) {
      ifAxiosError(error);
    }
  }

  async getTiposComunicado() {
    try {
      const response = await api.get("/comunicado/getTipos");
      return response.data;
    } catch (error) {
      ifAxiosError(error);
    }
  }

  async getComunicadosByMenor(idMenor: number) {
    try {
      const response = await api.get(
        `/comunicado/getComunicadosByMenor/${idMenor}`
      );
      return response.data;
    } catch (error) {
      ifAxiosError(error);
    }
  }

  async getComunicadoByMenorComunicado(idMenor: number, idComunicado: number) {
    try {
      const response = await api.get(
        `/comunicado/getComunicadoByMenorComunicado/${idMenor}/${idComunicado}`
      );
      return response.data;
    } catch (error) {
      ifAxiosError(error);
    }
  }

  async confirmaConocimientoComunicadoMenor(
    idMenor: number,
    idComunicado: number
  ) {
    try {
      const response = await api.post(
        "/comunicado/confirmaConocimientoComunicadoMenor",
        {
          idMenor,
          idComunicado,
        }
      );
      return response.data;
    } catch (error) {
      ifAxiosError(error);
    }
  }
}

const ifAxiosError = (error: unknown): error is AxiosError => {
  if (isAxiosError(error) && error.response) {
    console.error("Error response:", error.response.data);
    throw new Error(error.response.data.error);
  } else {
    console.error("Unexpected error:", error);
    throw new Error("Unexpected error occurred");
  }
};
