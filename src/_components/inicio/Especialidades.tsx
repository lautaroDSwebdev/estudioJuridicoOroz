"use client";
import React, { useContext } from "react";
import ImportantTitles from "../ui-reusable/ImportantTitles";
import { langCotext } from "@/_context/ContextLang";
import BoxTitles from "../ui-reusable/BoxTitles";
import BoxSubTitles from "../ui-reusable/BoxSubTitles";
const Especialidades = () => {
  const data = useContext(langCotext);
  if (!data) return null;

  const specials = data?.data.especialidades;
  return (
    <section className="g-max-with mx-auto p-[2rem] my-[1rem]">
      <div className="flex justify-center">
        <ImportantTitles> Nuesras especializades</ImportantTitles>
      </div>
      <div>
        <section className="flex flex-wrap gap-[2rem] justify-around">
          {specials.map(({ id, icon: Icon, title, description, button }) => (
            <div key={id} className="w-[34rem] flex flex-col transition transition-all  .3s ease-in hover:shadow-2xl shadow-stone-400 rounded-2xl p-[1rem]">
              <div className="flex justify-center">
                <Icon className="text-[#000000] h-auto w-[2.5rem]" />
              </div>
              <BoxTitles>{title}</BoxTitles>
              <BoxSubTitles>{description}</BoxSubTitles>
              <button className="hover:bg-[#eeca3a] transition transition-all ease-in .2s bg-[#fff] p-[.5rem] text-[1.5rem] cursor-pointer hover:text-[#ffffff] rounded-2xl text-[#585757] font-bold border border-2 border-[#eeca3a]">
                {button}
              </button>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Especialidades;
