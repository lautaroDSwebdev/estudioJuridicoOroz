"use client";
import { langCotext } from "@/_context/ContextLang";
import { useContext } from "react";
import TitleSecion from "../ui-reusable/TitleSecion";
import ImportantTitles from "../ui-reusable/ImportantTitles";

const Presentacion = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  
  const inicioData = data?.data?.inicio_info;
  if (!inicioData) return null;

  return (
    <header className="header-gradient">
      <div className="flex flex-col md:flex-row  justify-between g-max-with mx-auto g-sections-height ">
        <section className="w-[40rem] ">
          <TitleSecion>{inicioData[0]}</TitleSecion>
          <ImportantTitles>{inicioData[1]}</ImportantTitles>

        
          <div className="my-[3rem]">
            <button className="button">
              <span className="button-content">
                <img src="/arrow.svg" alt="flecha indicador" />
                {inicioData[2]}{" "}
              </span>
            </button>
          </div>
        </section>
        <img
          className="img-header"
          // src="/oroz-header-img.webp"
          src="/balanza.png"
          alt="imagen oroz"
        />
      </div>
    </header>
  );
};

export default Presentacion;
