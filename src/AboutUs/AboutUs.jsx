import React from "react";
import {
  Container,
  CardContainer,
  CardListMisionVision,
  CardItemMisionVision,
  CardContentMisionVision,
  CardTitletMisionVision,
  FigureMisionVision,
  ContainerValores,
  CardList,
  CardItem,
  CardContent,
  Figure,
} from "./AboutUsStyled";
import Header from "../generalComponent/headerGeneral/Header";
import Foother from "../generalComponent/footherGeneral/Foother";
import "../assets/variables/Constants.js";
import honestidad from "../assets/img/honesto.png";
import trabajoEnEquipo from "../assets/img/trabajo-en-equipo.png";
import compromiso from "../assets/img/compromiso.png";
import innovación from "../assets/img/innovacion.png";
import respeto from "../assets/img/respeto.png";
import mision from "../assets/img/mision.png";
import vision from "../assets/img/vision.png";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp.jsx";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nosotros | AsoTv Vegachi</title>
        <meta name="description" content="¿Quienes somos?" />
        <link rel="canonical" href="https://asotv-vegachi.com/nosotros" />
      </Helmet>
      <Header />
      <ChatWhatsapp />
      <Container>
        <h1>¿Quienes somos?</h1>
        <h2>EMPRESA PRESTADORA DE SERVICIO DE INTERNET</h2>
        <p>
          Somos una empresa <strong>100%</strong> Colombiana, Que cree en la
          innovación diaria ofreciendo una experiencia en servicios <br /> de
          Internet a toda la familia, a la que se accede fácilmente por su gran
          Cobertura y Precio.
        </p>
      </Container>

      <CardContainer>
        <CardListMisionVision>
          <CardItemMisionVision>
            <FigureMisionVision>
              <img src={mision} alt="Honestidad" />
            </FigureMisionVision>
            <CardTitletMisionVision>Nuestra Misión</CardTitletMisionVision>
            <CardContentMisionVision>
              Contribuir al bienestar de nuestros clientes satisfaciendo sus
              necesidades y expectativas, mediante la prestación e innovación de
              servicios de telecomunicaciones de la mejor calidad.
            </CardContentMisionVision>
          </CardItemMisionVision>
          <CardItemMisionVision>
            <FigureMisionVision>
              <img src={vision} alt="TrabajoEnEquipo" />
            </FigureMisionVision>
            <CardTitletMisionVision>Nuestra Visión</CardTitletMisionVision>
            <CardContentMisionVision>
              Convertirse en una de las empresas más importantes de Colombia en
              el sector de las Telecomunicaciones, participando en el mercado
              como empresa colombiana con la más avanzada tecnología, brindando
              la posibilidad de unificar a las familias colombianas a través de
              un excelente y eficaz servicio.
            </CardContentMisionVision>
          </CardItemMisionVision>
        </CardListMisionVision>
      </CardContainer>

      <ContainerValores>
        <h2>Nuestros valores</h2>
        <CardList>
          <CardItem>
            <Figure>
              <img src={honestidad} alt="Honestidad" />
            </Figure>
            <CardContent>Honestidad</CardContent>
          </CardItem>
          <CardItem>
            <Figure>
              <img src={trabajoEnEquipo} alt="TrabajoEnEquipo" />
            </Figure>
            <CardContent>Trabajo en equipo</CardContent>
          </CardItem>
          <CardItem>
            <Figure>
              <img src={compromiso} alt="Compromiso" />
            </Figure>
            <CardContent>Compromiso</CardContent>
          </CardItem>
          <CardItem>
            <Figure>
              <img src={innovación} alt="Innovación" />
            </Figure>
            <CardContent>Innovación</CardContent>
          </CardItem>
          <CardItem>
            <Figure>
              <img src={respeto} alt="Respeto" />
            </Figure>
            <CardContent>Respeto</CardContent>
          </CardItem>
        </CardList>
      </ContainerValores>

      <Foother />
    </>
  );
};

export default AboutUs;
