import React from "react";
import { CiFacebook } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
export const Fotter = () => {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      Icon: CiLinkedin,
    },
    {
      label: "Instagram",
      href: "#",
      Icon: RiInstagramLine,
    },
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=2494005894",
      Icon: FaWhatsapp,
    },
    {
      label: "Facebook",
      href: "#",
      Icon: CiFacebook,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <!-- Logo + Nombre --> */}
        <div className="footer-brand">
          {/* <!-- Logo (reemplazá por img) --> */}
          <div className="footer-logo">
            <img src="/logo-oroz1.svg" alt="logo" />
            {/* <!-- <img src="logo.png" alt="Logo"> --> */}
          </div>

          <span className="footer-subtitle">ESTUDIO JURÍDICO</span>
          <h2 className="footer-title">Juan Cruz Oroz</h2>
          <p className="footer-email">estudio@juancruzoroz.com.ar</p>
        </div>

        {/* <!-- Contacto --> */}
        <div className="footer-contact">
          <p className="footer-phone">+54 2494 005894</p>

          {/* <!-- Iconos redes --> */}
          <div className="footer-social">
            {/* <!-- Acá van tus iconos --> */}
            <div className="footer-social">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} target="_blank"  href={href} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <p className="footer-address">Chacabuco 464 - Tandil, BsAs</p>

          <a href="#" className="footer-back">
            Volver
          </a>
        </div>

        {/* <!-- Bottom --> */}
        <div className="footer-bottom">
          <span className="flex gap-2">
            Copyright 2025  
            <a href="http://lautarods-webdeveloper.netlify.app" target="_blank" >
              Lautaro Di Salvo
            </a>
          </span>
          <span>Martes y Jueves: 11:00 a 15:00 hs</span>
        </div>
      </div>
    </footer>
  );
};
