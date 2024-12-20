import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./views/auth/login/Login";
import LibretaLayout from "./layouts/LibretaLayout";
import LibretaEducadorHome from "./views/Libreta/Educador/LibretaEducadorHome";
import PerfilUsuario from "./views/Libreta/Perfil/PerfilUsuario";
import EducadorComunicados from "./views/Libreta/Educador/Comunicados/EducadorComunicados";
import CrearComunicadoEducador from "./views/Libreta/Educador/Comunicados/CrearComunicadoEducador";
import LibretaRedirect from "./views/home/LibretaRedirect";
import LibretaApoderadoHome from "./views/Libreta/Apoderado/LibretaApoderadoHome";
import ApoderadoAvisosHome from "./views/Libreta/Apoderado/Avisos/Home";
import VacunasListadoMenores from "./views/Libreta/Apoderado/Avisos/Vacunas/ListadoMenores";
import AutorizarVacunaMenor from "./views/Libreta/Apoderado/Avisos/Vacunas/Autorizar";
import PaseosVisitasListadoMenores from "./views/Libreta/Apoderado/Avisos/PaseosVisitas/ListadoMenores";
import AutorizarPaseoVisitaMenor from "./views/Libreta/Apoderado/Avisos/PaseosVisitas/Autorizar";
import ReunionesApoderadosListadoMenores from "./views/Libreta/Apoderado/Avisos/ReunionesApoderados/ListadoMenores";
import ConfirmarReunionesApoderadosMenor from "./views/Libreta/Apoderado/Avisos/ReunionesApoderados/Confirmar";
import ItinerarioJornadaListadoMenores from "./views/Libreta/Apoderado/Avisos/ItinerarioJornada/ListadoMenores";
import ConfirmarItinerarioJornadaMenor from "./views/Libreta/Apoderado/Avisos/ItinerarioJornada/Confirmar";
import EducadorAvisosHome from "./views/Libreta/Educador/Avisos/Home";
import ListadoNivelesAutorizadosVacuna from "./views/Libreta/Educador/Avisos/Vacunas/ListadoNivelesAutorizadosVacuna";
import ListadoMenoresAutorizadosVacunas from "./views/Libreta/Educador/Avisos/Vacunas/ListadoMenoresAutorizadosVacunas";
import RevisarVacunaMenor from "./views/Libreta/Educador/Avisos/Vacunas/RevisarVacunaMenor";
import ListadoAvisarNivelesEducador from "./views/Libreta/Educador/Avisos/Vacunas/ListadoAvisarNiveles";
import UnderConstruction from "./views/home/UnderConstruction";
import LibretaDirectorHome from "./views/Libreta/Director/LibretaDirectorHome";
import ListadoPaseosRevisar from "./views/Libreta/Educador/Avisos/PaseosVisitas/ListadoPaseosRevisar";
import ListadoNivelesAutorizadosPaseo from "./views/Libreta/Educador/Avisos/PaseosVisitas/ListadoNivelesAutorizadosPaseos";
import ListadoMenoresAutorizadosPaseo from "./views/Libreta/Educador/Avisos/PaseosVisitas/ListadoMenoresAutorizadosPaseos";
import RevisarPaseoMenor from "./views/Libreta/Educador/Avisos/PaseosVisitas/RevisarPaseoMenor";
import ApoderadoComunicadosHome from "./views/Libreta/Apoderado/Comunicados/ComunicadosHome";
import ListadoComunicadosMenores from "./views/Libreta/Apoderado/Comunicados/ListadoComunicadosMenores";
import LeerComunicado from "./views/Libreta/Apoderado/Comunicados/LeerComunicado";
import ListadoReunionRevisar from "./views/Libreta/Educador/Avisos/ReunionesApoderados/ListadoReunionRevisar";
import ListadoNivelesConfirmadosReunion from "./views/Libreta/Educador/Avisos/ReunionesApoderados/ListadoNivelesConfirmadosReunion";
import ListadoMenoresConfirmadosReunion from "./views/Libreta/Educador/Avisos/ReunionesApoderados/ListadoMenoresConfirmadosReunion";
import RevisarReunionMenor from "./views/Libreta/Educador/Avisos/ReunionesApoderados/RevisarReunionMenor";
import ListadoItinerarioRevisar from "./views/Libreta/Educador/Avisos/ItinerarioJornada/ListadoItinerarioRevisar";
import ListadoNivelesConfirmadosItinerario from "./views/Libreta/Educador/Avisos/ItinerarioJornada/ListadoNivelesConfirmadosItinerario";
import RevisarItinerarioMenor from "./views/Libreta/Educador/Avisos/ItinerarioJornada/RevisarItinerarioMenor";
import ListadoMenoresConfirmadosItinerario from "./views/Libreta/Educador/Avisos/ItinerarioJornada/ListadoMenoresConfirmadosItinerario";
import EducadorComunicadosHome from "./views/Libreta/Educador/Comunicados/ComunicadosHome";
import SolicitarVacunasNivel from "./views/Libreta/Educador/Avisos/Vacunas/SolicitarVacunasNivel";
import DirectorComunicadosHome from "./views/Libreta/Director/Comunicados/DirectorComunicadosHome";
import DirectorComunicados from "./views/Libreta/Director/Comunicados/DirectorComunicados";
import CrearComunicadoDirector from "./views/Libreta/Director/Comunicados/CrearComunicadoDirector";
import DirectorAvisosHome from "./views/Libreta/Director/Avisos/Home";
import CrearPaseoEducador from "./views/Libreta/Educador/Avisos/PaseosVisitas/CrearPaseoEducador";
import CrearReunionApoderadosEducador from "./views/Libreta/Educador/Avisos/ReunionesApoderados/CrearReunionApoderadosEducador";
import CrearItinerarioEducador from "./views/Libreta/Educador/Avisos/ItinerarioJornada/CrearItinerarioEducador";
import ApoderadoAsistenciaHome from "./views/Libreta/Apoderado/Asistencia/ApoderadoAsistenciaHome";
import EducadorAsistenciaHome from "./views/Libreta/Educador/Asistencia/EducadorAsistenciaHome";
import AsistenciaListadoMenores from "./views/Libreta/Apoderado/Asistencia/AsistenciaListadoMenores";
import DirectorIngresosHome from "./views/Libreta/Director/Ingresos/DirectorIngresosHome";
import DirectorIngresosListadoApoderados from "./views/Libreta/Director/Ingresos/DirectorIngresosListadoApoderados";
import ListadoNivelesAutorizadosVacunaDirector from "./views/Libreta/Director/Avisos/Vacunas/ListadoNivelesAutorizadosVacunaDirector";
import ListadoMenoresAutorizadosVacunasDirector from "./views/Libreta/Director/Avisos/Vacunas/ListadoMenoresAutorizadosVacunasDirector";
import RevisarVacunaMenorDirector from "./views/Libreta/Director/Avisos/Vacunas/RevisarVacunaMenorDirector";
import ListadoAvisarNivelesDirector from "./views/Libreta/Director/Avisos/Vacunas/ListadoAvisarNivelesDirector";
import SolicitarVacunasNivelDirector from "./views/Libreta/Director/Avisos/Vacunas/SolicitarVacunasNivelDirector";
import ListadoPaseosRevisarDirector from "./views/Libreta/Director/Avisos/PaseosVisitas/ListadoPaseosRevisarDirector";
import ListadoNivelesAutorizadosPaseoDirector from "./views/Libreta/Director/Avisos/PaseosVisitas/ListadoNivelesAutorizadosPaseoDirector";
import ListadoMenoresAutorizadosPaseoDirector from "./views/Libreta/Director/Avisos/PaseosVisitas/ListadoMenoresAutorizadosPaseoDirector";
import RevisarPaseoMenorDirector from "./views/Libreta/Director/Avisos/PaseosVisitas/RevisarPaseoMenorDirector";
import CrearPaseoDirector from "./views/Libreta/Director/Avisos/PaseosVisitas/CrearPaseoDirector";
import ListadoReunionRevisarDirector from "./views/Libreta/Director/Avisos/ReunionesApoderados/ListadoReunionRevisarDirector";
import ListadoNivelesConfirmadosReunionDirector from "./views/Libreta/Director/Avisos/ReunionesApoderados/ListadoNivelesConfirmadosReunionDirector";
import ListadoMenoresConfirmadosReunionDirector from "./views/Libreta/Director/Avisos/ReunionesApoderados/ListadoMenoresConfirmadosReunionDirector";
import RevisarReunionMenorDirector from "./views/Libreta/Director/Avisos/ReunionesApoderados/RevisarReunionMenorDirector";
import CrearReunionApoderadosDirector from "./views/Libreta/Director/Avisos/ReunionesApoderados/CrearReunionApoderadosDirector";
import ListadoItinerarioRevisarDirector from "./views/Libreta/Director/Avisos/ItinerarioJornada/ListadoItinerarioRevisarDirector";
import ListadoNivelesConfirmadosItinerarioDirector from "./views/Libreta/Director/Avisos/ItinerarioJornada/ListadoNivelesConfirmadosItinerarioDirector";
import ListadoMenoresConfirmadosItinerarioDirector from "./views/Libreta/Director/Avisos/ItinerarioJornada/ListadoMenoresConfirmadosItinerarioDirector";
import RevisarItinerarioMenorDirector from "./views/Libreta/Director/Avisos/ItinerarioJornada/RevisarItinerarioMenorDirector";
import CrearItinerarioDirector from "./views/Libreta/Director/Avisos/ItinerarioJornada/CrearItinerarioDirector";
import CrearApoderadoDirector from "./views/Libreta/Director/Ingresos/CrearApoderadoDirector";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="*" element={<LibretaRedirect />} />
        </Route>

        <Route path="/director" element={<LibretaLayout />}>
          <Route path="*" element={<UnderConstruction />} />
          <Route path="" element={<LibretaDirectorHome />} index />
          <Route path="home" element={<LibretaDirectorHome />} />
          <Route path="perfil" element={<PerfilUsuario />} />
          <Route path="comunicados" element={<EducadorComunicados />} />
          <Route
            path="crear-comunicado"
            element={<CrearComunicadoEducador />}
          />
          <Route path="avisos">
            <Route path="home" element={<DirectorAvisosHome />} />
            <Route path="home/:slide" element={<DirectorAvisosHome />} />
            <Route path="vacunas">
              <Route
                path="revisar-niveles-menores"
                element={<ListadoNivelesAutorizadosVacunaDirector />}
              />
              <Route
                path="menores-por-nivel/:idNivel"
                element={<ListadoMenoresAutorizadosVacunasDirector />}
              />
              <Route
                path="revisar-menor/:idNivel/:idMenor"
                element={<RevisarVacunaMenorDirector />}
              />
              <Route
                path="avisar-niveles-menores"
                element={<ListadoAvisarNivelesDirector />}
              />
              <Route
                path="solicitar-vacunas/:idNivel"
                element={<SolicitarVacunasNivelDirector />}
              />
            </Route>
            <Route path="paseos-visitas">
              <Route
                path="revisar-listado-paseos"
                element={<ListadoPaseosRevisarDirector />}
              />
              <Route
                path="revisar-listado-niveles/:idPaseo"
                element={<ListadoNivelesAutorizadosPaseoDirector />}
              />
              <Route
                path="revisar-listado-menores/:idPaseo/:idNivel"
                element={<ListadoMenoresAutorizadosPaseoDirector />}
              />
              <Route
                path="revisar-menor/:idPaseo/:idNivel/:idMenor"
                element={<RevisarPaseoMenorDirector />}
              />
              <Route path="crear-paseo" element={<CrearPaseoDirector />} />
            </Route>
            <Route path="reuniones-apoderados">
              <Route
                path="revisar-listado-reuniones"
                element={<ListadoReunionRevisarDirector />}
              />
              <Route
                path="revisar-listado-niveles/:idReunion"
                element={<ListadoNivelesConfirmadosReunionDirector />}
              />
              <Route
                path="revisar-listado-menores/:idReunion/:idNivel"
                element={<ListadoMenoresConfirmadosReunionDirector />}
              />
              <Route
                path="revisar-menor/:idReunion/:idNivel/:idMenor"
                element={<RevisarReunionMenorDirector />}
              />
              <Route
                path="crear-reunion"
                element={<CrearReunionApoderadosDirector />}
              />
            </Route>
            <Route path="itinerario-jornada">
              <Route
                path="revisar-listado-itinerario"
                element={<ListadoItinerarioRevisarDirector />}
              />
              <Route
                path="revisar-listado-niveles/:idItinerario"
                element={<ListadoNivelesConfirmadosItinerarioDirector />}
              />
              <Route
                path="revisar-listado-menores/:idItinerario/:idNivel"
                element={<ListadoMenoresConfirmadosItinerarioDirector />}
              />
              <Route
                path="revisar-menor/:idItinerario/:idNivel/:idMenor"
                element={<RevisarItinerarioMenorDirector />}
              />
              <Route
                path="crear-itinerario"
                element={<CrearItinerarioDirector />}
              />
            </Route>
          </Route>
          <Route path="comunicados">
            <Route path="" element={<DirectorComunicadosHome />} />
            <Route path="home" element={<DirectorComunicadosHome />} />
            <Route
              path="listado-comunicados"
              element={<DirectorComunicados />}
            />
            <Route
              path="crear-comunicado"
              element={<CrearComunicadoDirector />}
            />
          </Route>
          <Route path="ingresos">
            <Route path="" element={<DirectorIngresosHome />} />
            <Route path="home" element={<DirectorIngresosHome />} />
            <Route
              path="listado-apoderados"
              element={<DirectorIngresosListadoApoderados />}
            />
            <Route
              path="listado-educadores"
              element={<DirectorIngresosHome />}
            />
            <Route
              path="crear-apoderado"
              element={<CrearApoderadoDirector />}
            />
          </Route>
        </Route>

        <Route path="/educador" element={<LibretaLayout />}>
          <Route path="*" element={<UnderConstruction />} />
          <Route path="" element={<LibretaEducadorHome />} index />
          <Route path="home" element={<LibretaEducadorHome />} />
          <Route path="perfil" element={<PerfilUsuario />} />
          <Route path="avisos">
            <Route path="home" element={<EducadorAvisosHome />} />
            <Route path="home/:slide" element={<EducadorAvisosHome />} />
            <Route path="vacunas">
              <Route
                path="revisar-niveles-menores"
                element={<ListadoNivelesAutorizadosVacuna />}
              />
              <Route
                path="menores-por-nivel/:idNivel"
                element={<ListadoMenoresAutorizadosVacunas />}
              />
              <Route
                path="revisar-menor/:idNivel/:idMenor"
                element={<RevisarVacunaMenor />}
              />
              <Route
                path="avisar-niveles-menores"
                element={<ListadoAvisarNivelesEducador />}
              />
              <Route
                path="solicitar-vacunas/:idNivel"
                element={<SolicitarVacunasNivel />}
              />
            </Route>
            <Route path="paseos-visitas">
              <Route
                path="revisar-listado-paseos"
                element={<ListadoPaseosRevisar />}
              />
              <Route
                path="revisar-listado-niveles/:idPaseo"
                element={<ListadoNivelesAutorizadosPaseo />}
              />
              <Route
                path="revisar-listado-menores/:idPaseo/:idNivel"
                element={<ListadoMenoresAutorizadosPaseo />}
              />
              <Route
                path="revisar-menor/:idPaseo/:idNivel/:idMenor"
                element={<RevisarPaseoMenor />}
              />
              <Route path="crear-paseo" element={<CrearPaseoEducador />} />
            </Route>
            <Route path="reuniones-apoderados">
              <Route
                path="revisar-listado-reuniones"
                element={<ListadoReunionRevisar />}
              />
              <Route
                path="revisar-listado-niveles/:idReunion"
                element={<ListadoNivelesConfirmadosReunion />}
              />
              <Route
                path="revisar-listado-menores/:idReunion/:idNivel"
                element={<ListadoMenoresConfirmadosReunion />}
              />
              <Route
                path="revisar-menor/:idReunion/:idNivel/:idMenor"
                element={<RevisarReunionMenor />}
              />
              <Route
                path="crear-reunion"
                element={<CrearReunionApoderadosEducador />}
              />
            </Route>
            <Route path="itinerario-jornada">
              <Route
                path="revisar-listado-itinerario"
                element={<ListadoItinerarioRevisar />}
              />
              <Route
                path="revisar-listado-niveles/:idItinerario"
                element={<ListadoNivelesConfirmadosItinerario />}
              />
              <Route
                path="revisar-listado-menores/:idItinerario/:idNivel"
                element={<ListadoMenoresConfirmadosItinerario />}
              />
              <Route
                path="revisar-menor/:idItinerario/:idNivel/:idMenor"
                element={<RevisarItinerarioMenor />}
              />
              <Route
                path="crear-itinerario"
                element={<CrearItinerarioEducador />}
              />
            </Route>
          </Route>
          <Route path="comunicados">
            <Route path="" element={<EducadorComunicadosHome />} />
            <Route path="home" element={<EducadorComunicadosHome />} />
            <Route
              path="listado-comunicados"
              element={<EducadorComunicados />}
            />
            <Route
              path="crear-comunicado"
              element={<CrearComunicadoEducador />}
            />
          </Route>
          <Route path="asistencia">
            <Route path="home" element={<EducadorAsistenciaHome />} />
          </Route>
        </Route>

        <Route path="/apoderado" element={<LibretaLayout />}>
          <Route path="*" element={<UnderConstruction />} />
          <Route path="" element={<LibretaApoderadoHome />} index />
          <Route path="home" element={<LibretaApoderadoHome />} />
          <Route path="perfil" element={<PerfilUsuario />} />
          <Route path="avisos">
            <Route path="home" element={<ApoderadoAvisosHome />} />
            <Route path="home/:slide" element={<ApoderadoAvisosHome />} />
            <Route path="vacunas">
              <Route
                path="listado-menores"
                element={<VacunasListadoMenores />}
              />
              <Route path="menor/:id" element={<AutorizarVacunaMenor />} />
            </Route>
            <Route path="paseos-visitas">
              <Route
                path="listado-menores"
                element={<PaseosVisitasListadoMenores />}
              />
              <Route
                path="menor/:idMenor/:idPaseo"
                element={<AutorizarPaseoVisitaMenor />}
              />
            </Route>
            <Route path="reuniones-apoderados">
              <Route
                path="listado-menores"
                element={<ReunionesApoderadosListadoMenores />}
              />
              <Route
                path="menor/:idMenor/:idReunion"
                element={<ConfirmarReunionesApoderadosMenor />}
              />
            </Route>
            <Route path="itinerario-jornada">
              <Route
                path="listado-menores"
                element={<ItinerarioJornadaListadoMenores />}
              />
              <Route
                path="menor/:idMenor/:idItinerario"
                element={<ConfirmarItinerarioJornadaMenor />}
              />
            </Route>
          </Route>
          <Route path="comunicados">
            <Route path="" element={<ApoderadoComunicadosHome />} />
            <Route path="home" element={<ApoderadoComunicadosHome />} />
            <Route
              path="listado-comunicados"
              element={<ListadoComunicadosMenores />}
            />
            <Route
              path="listado-comunicados/:idMenor"
              element={<ListadoComunicadosMenores />}
            />
            <Route
              path="comunicado/:idMenor/:idComunicado"
              element={<LeerComunicado />}
            />
          </Route>
          <Route path="asistencia">
            <Route path="" element={<ApoderadoAsistenciaHome />} />
            <Route path="home" element={<ApoderadoAsistenciaHome />} />
            <Route
              path="listado-menores"
              element={<AsistenciaListadoMenores />}
            />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/libretaRedirect" element={<LibretaRedirect />} />
          <Route path="*" element={<LibretaRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
