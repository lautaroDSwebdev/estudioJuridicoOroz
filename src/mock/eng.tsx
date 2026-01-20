"use client"
import { FiFlag } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";

export const raiz = "/oroz";
export const eng = {
  logo_descripcion: "Social Security Right",
  inicio_info: [
  "Committed to our clients and passionate about our work",
  `We are a team of professionals who take care of your future
          retirement`,
  "Ask us",
],
inicio_sobrenosotros: {
  titles: [
    "Recognition of Service / Retirement / Benefit Adjustments",
    "We are the right Social Security law firm for you.",
  ],
  subtitles: [
    "We stand out for providing advisory services in Social Security matters to both individuals and large companies and corporations.",
    "We plan retirement in advance, leaving no room for error. We work with certainty because we know the system. We do not rely on questionable assumptions or doubtful hypotheses.",
  ],
  box: [
    {
      id: 1,
      icon: IoBagHandleOutline,
      title: "More than 15 years of experience",
      subtitle:
        "Helping individuals and corporate staff from SMEs, medium-sized companies, and large corporations achieve retirement.",
    },
    {
      id: 2,
      icon: FiFlag,
      title: "We define and execute your claim efficiently",
      subtitle:
        "Our exclusive retirement management system allows us to significantly reduce the processing time for each procedure.",
    },
  ],
},
  navLinks: [
    { id: 0, label: "Begin", href: raiz + "/inicio" },
    { id: 1, label: "About us", href: raiz + "/nosotros" },
    { id: 2, label: "Pensions", href: raiz + "/jubilaciones" },
    { id: 3, label: "Penal Rights", href: raiz + "/derecho-penal" },
    { id: 4, label: "Contact us", href: raiz + "/contacto" },
  ],
};
