"use client";
import ImportantTitles from "../ui-reusable/ImportantTitles";
import SubTitles from "../ui-reusable/SubTitles";
import TitleSecion from "../ui-reusable/TitleSecion";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import { useContext } from "react";
import { langCotext } from "@/_context/ContextLang";
import BoxTitles from "../ui-reusable/BoxTitles";
import BoxSubTitles from "../ui-reusable/BoxSubTitles";
const SobreNosotros = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const sobrenosotros = data?.data.inicio_sobrenosotros;
  if (!sobrenosotros) return null;

  return (
    <div className="g-max-with mx-auto">
      <TitleSecion>{sobrenosotros.titles[0]}</TitleSecion>
      <ImportantTitles>{sobrenosotros.titles[1]}</ImportantTitles>

      <SubTitles>{sobrenosotros.subtitles[0]}</SubTitles>
      <SubTitles>{sobrenosotros.subtitles[1]}</SubTitles>

      <section className="flex gap-[2rem] justify-around">
        {sobrenosotros.box.map(({ id, icon: Icon, title, subtitle }) => (
          <div key={id} className="w-[40%] flex flex-col">
            <div className="flex justify-center">
              <Icon className="text-[#B39107] h-auto w-[2.5rem]" />
            </div>
            <BoxTitles>{title}</BoxTitles>
            <BoxSubTitles>{subtitle}</BoxSubTitles>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SobreNosotros;
