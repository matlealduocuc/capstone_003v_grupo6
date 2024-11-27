import api from "@/lib/axios";
import { AxiosError, isAxiosError } from "axios";

export class NivelService {
  async getNivelesWhereSomeVacuna() {
    try {
      const response = await api.get("/nivel/getNivelesWhereSomeVacuna");
      return response.data;
    } catch (error) {
      ifAxiosError(error);
    }
  }

  async getMenoresByNivel(idNivel: number) {
    try {
      const response = await api.get("/nivel/getMenoresByNivel/" + idNivel);
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
