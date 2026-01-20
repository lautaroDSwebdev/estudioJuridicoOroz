"use client"
import { FiFlag } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";

export const raiz = "/oroz";

export const esp = {
  logo_descripcion: "Derecho De Seguridad Social",
  inicio_info: [
    "Comprometidos con nuestros clientes y pasion por nuestro trabajo",
    `Somos un Equipo de Profesionales que se ocupan de su futura
            Jubilacion`,
    "Consultar",
  ],
  inicio_sobrenosotros: {
    titles: [
      "Reconocimiento de Servicions / Jubilaciones / Reajustes",
      "Somos el estudio Previsional indicado para vos.",
    ],
    subtitles: [
      "Nos diferenciamos por que asesoramos en aspectos Previsionales y tanto a personas Particulares como a Grandes Empresas y Corporaciones.",
      "Proyectamos la Jubilacion con anticipacion, con la cual no tenemos margen de error. Obramos sobre seguro por que conocemos el Sistema. No hacemos suposiciones de Hipotesis dudosas ni conjeturas.",
    ],
    box: [
      {
        id: 1,
        icon: IoBagHandleOutline,
        title: "Mas de 15 años de experiencia",
        subtitle:
          "Jubilando a Personas Particulares y Personal de Planta de Empresas PYMES, Medianas y Grandes Corporaciones.",
      },
      {
        id: 2,
        icon: FiFlag,
        title: "Definimos y ejecutamos con rapidez su reclamo",
        subtitle:
          "Nuestro Exclusivo Sistema de Manejo Jubilatorio nos permite abreviar considerablemente el tiempo en cada Tramitacion.",
      },
    ],
  },
  navLinks: [
    { id: 0, label: "Inicio", href: raiz + "/inicio" },
    { id: 1, label: "Nosotros", href: raiz + "/nosotros" },
    { id: 2, label: "Jubilaciones", href: raiz + "/jubilaciones" },
    { id: 3, label: "Derecho Penal", href: raiz + "/derecho-penal" },
    { id: 4, label: "Contacto", href: raiz + "/contacto" },
  ],
};
