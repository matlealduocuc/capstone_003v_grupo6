import { useEffect, useRef, useState } from "react";
import VacunaSvg from "../../../../assets/vacuna.svg";
import PaseoVisitaSvg from "../../../../assets/paseos-y-visitas.svg";
import ReunionApoderadosSvg from "../../../../assets/reunion-apoderados.svg";
import ActividadesDiariasSvf from "../../../../assets/actividades-diarias.svg";
import { useNavigate, useParams } from "react-router-dom";

const EducadorAvisosHome = () => {
  const { slide } = useParams();
  const initPathName: string = "/educador";
  const slides = [
    {
      title: "Vacunas",
      heading: "¡Solicita Autorización!",
      description: `Aquí podrás enviar a los Apoderados tus
      <br />
      <strong>Solicitudes de Autorización de Vacunas</strong>.
      <br />
      <br />
      Haz click en <strong>“Solicitar”</strong> para enviar una <strong>Solicitud,</strong>
      <br />
      o en <strong>"Revisar"</strong> para ver el <strong>Estado de las Solicitudes.</strong>`,
      buttonText: "Solicitar",
      href: initPathName + "/avisos/vacunas/avisar-niveles-menores",
      isSecondButton: true,
      secondButtonText: "Revisar",
      secondButtonHref:
        initPathName + "/avisos/vacunas/revisar-niveles-menores",
      imgSrc: VacunaSvg,
    },
    {
      title: "Paseos y Visitas",
      heading: "¡Responsabilidad Siempre!",
      description: `Gestiona aquí los <strong>Paseos y Visitas.</strong>
      <br />
      <br />
      Haz clic en <strong>Solicitar</strong> para Crear, Asignar y
      <br />
      Solicitar <strong>Autorización de Paseos y Visitas,</strong>
      <br />
      o en <strong>"Revisar"</strong> para ver el <strong>Estado de las Solicitudes</strong>.`,
      buttonText: "Solicitar",
      href: initPathName + "/avisos/paseos-visitas/crear-paseo",
      isSecondButton: true,
      secondButtonText: "Revisar",
      secondButtonHref:
        initPathName + "/avisos/paseos-visitas/revisar-listado-paseos",
      imgSrc: PaseoVisitaSvg,
    },
    {
      title: "Reuniones de Apoderados",
      heading: "¡Comunidad Participativa!",
      description: `Gestiona tus <strong>Reuniones de Apoderados.</strong>
      <br />
      <br />
      Haz clic en <strong>“Solicitar”</strong> para Crear, Asignar
      <br />
      y Solicitar <strong>Confirmación de Asistencia</strong>,
      <br />
      o en <strong>"Revisar"</strong> para ver el <strong>Estado de tus Solicitudes<strong>.`,
      buttonText: "Solicitar",
      href: initPathName + "/avisos/reuniones-apoderados/crear-reunion",
      isSecondButton: true,
      secondButtonText: "Revisar",
      secondButtonHref:
        initPathName + "/avisos/reuniones-apoderados/revisar-listado-reuniones",
      imgSrc: ReunionApoderadosSvg,
    },
    {
      title: "Itinerario de Jornada",
      heading: "¡Apoderados Informados!",
      description: `Informa a los apoderados de <strong>Actividades de los Menores.</strong>
      <br />
      <br />
      Haz clic en <strong>“Solicitar”</strong> para Crear, Asignar
      <br />
      y Solicitar <strong>Confirmación de Conocimiento</strong>,
      <br />
      o en <strong>“Revisar”</strong> para ver el <strong>Estado de tus Solicitudes.</strong>`,
      buttonText: "Solicitar",
      href: initPathName + "/avisos/itinerario-jornada/crear-itinerario",
      isSecondButton: true,
      secondButtonText: "Revisar",
      secondButtonHref:
        initPathName + "/avisos/itinerario-jornada/revisar-listado-itinerario",
      imgSrc: ActividadesDiariasSvf,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const [translate, setTranslate] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      slide &&
      parseInt(slide) > 0 &&
      parseInt(slide) < 5 &&
      parseInt(slide) <= slides.length
    ) {
      setCurrentIndex(parseInt(slide) - 1);
    }
  }, [slide, slides.length]);

  useEffect(() => {
    const newPath = `${initPathName}/avisos/home/${currentIndex + 1}`;
    if (window.location.pathname !== newPath) {
      window.history.replaceState(null, "", newPath);
    }
  }, [currentIndex, navigate]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragStart = (e: any) => {
    setIsDragging(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDrag = (e: any) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = currentX - startX.current;

    setTranslate(delta);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (e: any) => {
    if (!isDragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - startX.current;

    if (delta > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    } else if (delta < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }

    setIsDragging(false);
    setTranslate(0);
  };

  const numberOfSlides = [0, 1, 2, 3];

  document.onkeydown = function (e) {
    if (e.key === "ArrowRight") {
      goToNextSlide();
    } else if (e.key === "ArrowLeft") {
      goToPreviousSlide();
    } else if (numberOfSlides.includes(parseInt(e.key) - 1)) {
      goToSlide(parseInt(e.key) - 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center bg-white"
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDrag}
      onTouchEnd={handleDragEnd}
    >
      {/* Header */}
      <div className="fixed top-[24px] z-50 w-full py-3 flex items-center justify-between px-4 bg-figma-green text-white">
        <button onClick={goToPreviousSlide} className="font-bold text-2xl">
          {`<`}
        </button>
        <h1 className="text-xl font-bold">{slides[currentIndex].title}</h1>
        <button onClick={goToNextSlide} className="font-bold text-2xl">
          {`>`}
        </button>
      </div>

      {/* Slides Container */}
      <div className="relative w-full h-[66vh] overflow-hidden mt-14">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${
              currentIndex * 100
            }% + ${translate}px))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center justify-center px-6 text-center"
              style={{ minWidth: "100%" }}
            >
              <h2 className="text-xl font-bold text-green-700 mb-4">
                {slide.heading}
              </h2>
              <p
                className="text-gray-700 text-sm"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              ></p>

              <div className="my-2 w-auto max-w-xs">
                <img
                  style={{ objectFit: "contain" }}
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="w-full h-56 rounded-md"
                />
              </div>

              <div className="fixed -bottom-20 w-full flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                  <button
                    className="bg-figma-green text-white w-80 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
                    onClick={() => {
                      navigate(slide.href);
                    }}
                  >
                    {slide.buttonText}
                  </button>
                </div>

                {slide.isSecondButton && (
                  <div className="flex flex-row justify-center mt-2">
                    <button
                      className="bg-green-500 text-white w-80 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition-colors"
                      onClick={() => {
                        navigate(slide.secondButtonHref);
                      }}
                    >
                      {slide.secondButtonText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-4 mb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-5 h-5 rounded-full ${
              currentIndex === index ? "bg-figma-green" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EducadorAvisosHome;
