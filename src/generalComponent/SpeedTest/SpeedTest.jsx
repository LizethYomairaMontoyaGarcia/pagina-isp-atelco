import React from "react";
import Header from "../headerGeneral/Header";
import ChatWhatsapp from "../chatWhatsapp/ChatWhatsapp";
import Foother from "../footherGeneral/Foother";
import {
  ContainerValores,
  CardList,
  CardItem,
  Figure,
  CardHeader,
  Div,
  CenteredContainer,
  CircleImage,
  CircleImageLink,
} from "./SpeedTestStyled";
import PaginaCerrada from "../../assets/img/paginacerrada.avif";
import Desconectar from "../../assets/img/desconectar.avif";
import Dispositivo from "../../assets/img/dispositivo.avif";
import Compu from "../../assets/img/compu.avif";
import medidorVelocidad from "../../assets/img/medidorVelocidad.png";
import { Helmet } from "react-helmet";

const SpeedTest = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Test | Atelco</title>
        <meta name="description" content="Test de velocidad" />
        <link rel="canonical" href="https://atelco.net.co/test" />
      </Helmet>
      <Header />

      <ChatWhatsapp />

      <ContainerValores>
        <h1>Recomendaciones para Un Test</h1>
      </ContainerValores>
      <Div>
        <CardList>
          <CardItem>
            <CardHeader>
              <p>
                Cierra todas las pestañas de tu navegador, excepto la del test.
                <br /> Pausa las descargas e inactiva procesos en segundo plano,
                como actualizaciones del sistema.
              </p>
            </CardHeader>
            <Figure>
              <img src={PaginaCerrada} alt="Respeto" />
            </Figure>
          </CardItem>
        </CardList>

        <CardList>
          <CardItem>
            <CardHeader>
              <p>
                Realiza una revisión y desconecta todos los dispositivos que
                estén conectados a la red, incluyendo consolas, teléfono,
                celulares, Smart TVs y cualquier otro dispositivo electrónico
                que pueda estar consumiendo ancho de banda.
              </p>
            </CardHeader>
            <Figure>
              <img src={Desconectar} alt="Respeto" />
            </Figure>
          </CardItem>
        </CardList>

        <CardList>
          <CardItem>
            <CardHeader>
              <p>
                Conecta solo un dispositivo a la red. Si estás utilizando un
                dispositivo móvil, asegúrate de realizar el test de velocidad
                conectado a la red 5G y cerca del módem.
              </p>
            </CardHeader>
            <Figure>
              <img src={Dispositivo} alt="Respeto" />
            </Figure>
          </CardItem>
        </CardList>
        <CardList>
          <CardItem>
            <CardHeader>
              <p>
                Conecta solo un dispositivo a la red. Si estás utilizando una
                PC, asegúrate de que esté conectada directamente al módem
                mediante un cable Ethernet. La medición debe realizarse sobre el
                servicio fijo, no a través de la red WiFi.
              </p>
            </CardHeader>
            <Figure>
              <img src={Compu} alt="Respeto" />
            </Figure>
          </CardItem>
        </CardList>
      </Div>

      <CenteredContainer>
        <h1>Realizar test de velocidad</h1>
        <CircleImageLink
          href="https://www.speedtest.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CircleImage src={medidorVelocidad} alt="Descripción de la imagen" />
        </CircleImageLink>
      </CenteredContainer>

      <Foother />
    </>
  );
};

export default SpeedTest;
