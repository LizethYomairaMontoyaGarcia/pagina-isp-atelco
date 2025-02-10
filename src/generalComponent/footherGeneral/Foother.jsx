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
      "mailto:atelcoaltavelocidad@gmail.com?subject=Información%20de%20instalación%20del%20servicio%20de%20internet%20Atelco%20Alta%20Velocidad";
  };

  const phoneNumber = "+57 3182083849";

  return (
    <FooterContainer>
      <Div>
        <ContactSection>
          <div>
            <a href={`tel:${phoneNumber}`}>
              <img src={phone} alt="Phone" />
              <strong>
                <p>{phoneNumber}</p>
              </strong>
            </a>
          </div>
          <div onClick={handleEmailClick}>
            <img src={gmail} alt="gmail" />
            <strong>
              <p>atelcoaltavelocidad@gmail.com</p>
            </strong>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=573136162815&text=Hola,%20Deseo%20contratar%20el%20servicio%20con%20ustedes,%20¿podrían%20darme%20más%20información%20del%20servicio?">
              <img src={whatsaap} alt="whatsaap" />
              <strong>
                <p>+57 3136162815</p>
              </strong>
            </a>
          </div>
        </ContactSection>
      </Div>
      <DivDiv>
        <a href="/TerminosyCondiciones">
          Términos y condiciones de la prestación del servicio
        </a>
      </DivDiv>
      <DivDiv>
        <a href="/pqrs">PQRS</a>
        <Linea2 />
        <a href="/test">Test de velocidad</a>
      </DivDiv>

      <Linea />
      <DivImg>
        <strong>
          <p>Copyright © 2025</p>
        </strong>
      </DivImg>
    </FooterContainer>
  );
};

export default Foother;
