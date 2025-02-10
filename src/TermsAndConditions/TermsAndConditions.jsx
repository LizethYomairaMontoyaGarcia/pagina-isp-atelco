import React from "react";
import {
  StyledCard,
  CardBody,
  CardTitle,
  DivServices,
} from "./TermsAndConditionsStyled";
import Card from "react-bootstrap/Card";
import Header from "../generalComponent/headerGeneral/Header";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import { Helmet } from "react-helmet";
import { ButtonGeneral } from "../StyledGenerals";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Términos y condiciones | Atelco
        </title>
        <link
          rel="canonical"
          href="https://atelco.net.co/TerminosyCondiciones"
        />
        <meta name="description" content="Términos y condiciones" />
      </Helmet>
      <Header />
      <ChatWhatsapp />

      <DivServices>
        <h1>
          Ninguno de nuestros servicios tiene cláusula <br /> de permanencia.
        </h1>

        <StyledCard>
          <CardBody>
            <CardTitle>¿Cómo Unirte a Nosotros?</CardTitle>
            <Card.Text>
              La instalación de nuestro servicio de internet no tiene costo. Sin
              embargo, una vez realizada la instalación, deberá cancelar la
              primera factura generada según el plan que haya elegido. Disfrutar
              de todos nuestros beneficios, Para comenzar simplemente
              necesitamos una fotocopia de la cédula de la persona que va ser
              titular del servicio.
            </Card.Text>
            <br />
            <Card.Text>
              Para garantizar una instalación rápida y eficiente, es importante
              que nos comparta la ubicación de la vivienda y una foto de la
              plaqueta ubicada en tu hogar, para que nuestros técnicos puedan
              ubicarte sin problemas.
            </Card.Text>
          </CardBody>
        </StyledCard>

        <ButtonGeneral
          variant="primary"
          onClick={() =>
            (window.location.href =
              "https://web.whatsapp.com/send?phone=3136162815&text=Hola,%20me%20interesa%20contratar%20el%20servicio%20con%20ustedes%20me%20pueden%20dar%20mas%20información%20gracias.")
          }
        >
          ¡Quiero contratar el servicio!
        </ButtonGeneral>
      </DivServices>
    </>
  );
};

export default TermsAndConditions;
