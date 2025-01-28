import React, { useEffect } from "react";
import {
  FooterContainer,
  ContactSection,
  Div,
  DivDiv,
  Linea,
  DivImg,
  Linea2,
} from "./FootherStyled";
import whatsaap from "../../assets/img/whatsapp.png";
import gmail from "../../assets/img/gmail.png";
import phone from "../../assets/img/viber.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/youtube.png";
import { useLocation } from "react-router-dom";

const Foother = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleEmailClick = () => {
    window.location.href =
      "mailto:soporte@asotv-vegachi.com?subject=Información%20de%20instalación%20del%20servicio%20de%20internet%20y%20televisión%20ASOTV%20VEGACHÍ";
  };

  const phoneNumber = "+57 3113400908";

  return (
    <FooterContainer>
      <Div>
        <ContactSection>
          <div>
            <a href="https://api.whatsapp.com/send?phone=573137528917&text=Hola,%20Deseo%20contratar%20el%20servicio%20con%20ustedes,%20¿podrían%20darme%20más%20información%20del%20servicio?">
              <img src={whatsaap} alt="whatsaap" />
              <p>+57 3113400908</p>
            </a>
          </div>
          <div onClick={handleEmailClick}>
            <img src={gmail} alt="gmail" />
            <p>soporte@asotv-vegachi.com</p>
          </div>
          <div>
            <a href={`tel:${phoneNumber}`}>
              <img src={phone} alt="Phone" />
              <p>{phoneNumber}</p>
            </a>
          </div>
        </ContactSection>
      </Div>
      <DivDiv>
        <a href="/pqrs">PQRS</a>
        <Linea2 />
        <a href="/test">Test de velocidad</a>
      </DivDiv>
      <DivDiv>
        <a href="/termsAndConditions">
          Términos y condiciones de la prestación del servicio
        </a>
      </DivDiv>
      <Linea />
      <DivImg>
        <p>Copyright © 2024</p>
        <a href="https://www.facebook.com/profile.php?id=100063500920751">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/asotv_vegachi/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.youtube.com/@asotvvegachi9458">
          <img src={youtube} alt="youtube" />
        </a>
      </DivImg>
    </FooterContainer>
  );
};

export default Foother;
