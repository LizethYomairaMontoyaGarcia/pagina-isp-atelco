import React, { useState, useRef, useEffect } from "react";
import Foother from "../generalComponent/footherGeneral/Foother";
import Header from "../generalComponent/headerGeneral/Header";
import {
  DivSpeed,
  DivSpeedImg,
  P,
  H1,
  Container,
  ModalWrapper,
  ModalContent,
  Section,
  Card,
  CardList,
  CardItem,
  CardHeader,
  TitleCarousel,
  ParrafoCarousel,
  DivGeneralCarousel,
  ButtonClose,
  DivPlans,
  Conta,
  Button,
} from "./HomeStyled";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import FormContact from "../Forms/FormContact";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { ButtonGeneral } from "../StyledGenerals";
import plansData from "../Data/plans.json";
import opinions from "../Data/opinions.json";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contrato from "../assets/img/contrato.gif";
import Herramienta from "../assets/img/mecanico.gif";
import Rapido from "../assets/img/rapido.gif";
import Nube from "../assets/img/nube.gif";

const StyledCarousel = styled(Carousel)`
  width: 100%;
  margin: auto;
`;

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const textRef = useRef(null);

  const toggleModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const handleNavigate = () => {
    navigate("/servicios");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: 0.5, // Ajusta este valor según tus necesidades
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> AsoTv Vegachi |Inicio</title>
        <link rel="canonical" href="https://asotv-vegachi.com/" />
        <meta name="description" content="Intenet alta velocidad" />
      </Helmet>
      <div>
        <Header />
        <ChatWhatsapp />
        <Container>
          <h3 ref={textRef}>
            Internet de Alta Velocidad <br />
            Máxima productividad y entretenimiento.
            <br />
            Navega sin límites. ¡Únete hoy!
          </h3>
        </Container>

        <div>
          <div>
            <Section>
              <Card>
                <h1>
                  <strong>TENEMOS EL PLAN PERFECTO PARA TI</strong>
                </h1>
                <p>
                  Contamos con planes de alta velocidad para que navegue sin
                  límites y al mejor precio.
                </p>
              </Card>

              <CardList>
                <CardItem>
                  <CardHeader>
                    <h1>
                      <strong>Planes Residenciales</strong>
                    </h1>
                  </CardHeader>
                  <p>
                    <strong>{plansData.residentPlans[0].services}</strong>
                  </p>
                  <p>Estos son nuestros planes</p>
                  <DivPlans>
                    {plansData.residentPlans.map((plan, index) => (
                      <div key={index}>
                        <strong>
                          <p>{plan.plans}Mb</p>
                        </strong>
                      </div>
                    ))}
                  </DivPlans>
                  <ButtonGeneral onClick={toggleModal}>
                    <em>
                      <strong>Contratar el servicio</strong>
                    </em>
                  </ButtonGeneral>
                </CardItem>

                <CardItem>
                  <CardHeader>
                    <h1>
                      <strong>Planes Corporativos</strong>
                    </h1>
                  </CardHeader>
                  <p>
                    <strong>{plansData.corporatePlan[0].services}</strong>
                  </p>
                  <p>Estos son nuestros planes</p>
                  <DivPlans>
                    {plansData.corporatePlan.map((plan, index) => (
                      <div key={index}>
                        <strong>
                          <p>{plan.plans}Mb</p>
                        </strong>
                      </div>
                    ))}
                  </DivPlans>
                  <ButtonGeneral onClick={toggleModal}>
                    <em>
                      <strong> Contratar el servicio</strong>
                    </em>
                  </ButtonGeneral>
                </CardItem>
              </CardList>
              <ModalWrapper open={isModalOpen} onClick={toggleModal}>
                <ModalContent>
                  <FormContact />
                  <ButtonClose onClick={() => setIsModalOpen(false)}>
                    X
                  </ButtonClose>
                </ModalContent>
              </ModalWrapper>

              <Conta>
                <Button onClick={handleNavigate}>
                  <em>
                    <strong> Deseo ver todos los planes </strong>
                  </em>
                </Button>
              </Conta>
            </Section>
          </div>

          <DivSpeed>
            <H1>Velocidad simétrica</H1>
            <P>
              ¡Experimenta la tranquilidad de no preocuparte por tu conexión a
              internet! Con nuestros planes de suscripción, podrás disfrutar sin
              restricciones. Olvídate de las interrupciones y aprovecha una
              experiencia de conexión rapida.¡Elige la libertad y la calidad con
              nuestros planes exclusivos!.
            </P>

            <DivSpeedImg>
              <div>
                <img src={Contrato} alt="doc" />
                <p>
                  <strong>Sin cláusulas</strong>
                </p>
              </div>
              <div>
                <img src={Rapido} alt="rapido" />
                <p>
                  <strong>Servicio 24/7</strong>
                </p>
              </div>
              <div>
                <img src={Nube} alt="nube" />
                <p>
                  <strong>Servicio Ilimitado</strong>
                </p>
              </div>
              <div>
                <img src={Herramienta} alt="mecanico" />
                <p>
                  <strong>Instalación rapida</strong>
                </p>
              </div>
            </DivSpeedImg>
          </DivSpeed>
        </div>

        <DivGeneralCarousel>
          <TitleCarousel>
            <h1>¿Por qué los clientes nos prefieren?</h1>
          </TitleCarousel>
          <StyledCarousel interval={2000} indicators={true}>
            {opinions.opinions.map((opinion, item) => (
              <Carousel.Item key={item}>
                <div
                  style={{
                    backgroundColor: "#89cffd",
                    width: "100%",
                    height: "250px",
                  }}
                ></div>
                <Carousel.Caption>
                  <ParrafoCarousel>{opinion.opinion}</ParrafoCarousel>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </StyledCarousel>
        </DivGeneralCarousel>

        <Foother />
      </div>
    </>
  );
};
