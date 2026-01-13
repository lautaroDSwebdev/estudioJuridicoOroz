"use client";
import { useContext } from "react";
import { langCotext } from "../_context/ContextLang";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonAnimated from "./ui-reusable/ButtonAnimated";

const Nav = () => {
  const data = useContext(langCotext);
  if (!data) return null;
  const navLinks = data?.data.navLinks;
  const logo_desc = data?.data;

  const path = usePathname();
  return (
    <nav className="w-full g-max-with mx-auto my-[1rem] rounded-3xl bg-[#000000] h-[10vh] p-[.5rem] ">
      <section className=" flex justify-around  mx-auto w-full items-center">
        <div className="flex gap-1 ">
          <img
            className="h-auto w-[4.5rem]"
            src="/logo-oroz1.svg"
            alt="logo abogados"
          />
          <div>
            <p className="text-[#fff] underline underline-offset-2 decoration-[#fff] w-[10rem]">
              {logo_desc.logo_descripcion}
            </p>
            <b className="text-[#fff] text-[1.5rem] font-bold">
              Juan Cruz Oroz
            </b>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-[#fff] underline-animation ${
                path === link.href && "active"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* <Link href={``} className="">
          <ButtonAnimated>Soliticar entrevista</ButtonAnimated>
        </Link> */}
        <select className="g-buttons-white " onChange={data.HandleLanguage}>
          <option value="es">español</option>
          <option value="en">ingles</option>
        </select>
      </section>
    </nav>
  );
};

export default Nav;
