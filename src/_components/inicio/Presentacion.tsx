"use client"
import { langCotext } from "@/_context/ContextLang";
import { useContext } from "react";

const Presentacion = () => {

     const data = useContext(langCotext)
     if (!data) return null;

     const inicioData = data?.data.inicio_info




  return (
    <header className="header-gradient">
      <div className="flex justify-between max-w-[1400px] mx-auto g-sections-height">
        <section className="w-[40rem]">
          <p className="g-yellow-titles my-[2rem] ">
            {inicioData[0]}
          </p>
          <b className="font-bold text-[3rem] my-[2rem]">
            {inicioData[1]}
          </b>
          <button className="flex gap-[5px] g-yellow-button text-[1.4rem] cursor-pointer py-[1rem] px-[1.5rem] rounded-2xl my-[2rem]">
            <img src="/arrow.svg" alt="flecha indicador" />
            {inicioData[2]}
          </button>
        </section>
        <img src="/oroz-header-img.png" alt="imagen oroz" />
      </div>
    </header>
  );
};

export default Presentacion;
