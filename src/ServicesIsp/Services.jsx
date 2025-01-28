import React, { useRef, useState, useEffect } from "react";
import Header from "../generalComponent/headerGeneral/Header";
import {
  DivGeneralCard,
  Divider,
  Container,
  CardContainerCenter,
  DivDivGeneralCard,
  Section,
  Title,
  Subtitle,
  CardList,
  HeaderCards,
  Button,
  Conta,
  ContainerTv,
  Image,
  DivServices,
  StyledCard,
  ContainerInicialTv,
  Card3D,
  ButtonInfo,
  Contaprincipal,
  ButtonClick,
} from "./ServicesStyled";
import Foother from "../generalComponent/footherGeneral/Foother";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import PuntoFisico from "../assets/img/pagofisicooo.avif";
import PuntoLinea from "../assets/img/pagoenlinea.avif";
import plansData from "../Data/plans.json";
import Card from "react-bootstrap/Card";
import tele from "../assets/img/viendoTv.avif";
import { useNavigate } from "react-router-dom";
import { ButtonGeneral } from "../StyledGenerals";
import { Helmet } from "react-helmet";

const Services = () => {
  const [planType, setPlanType] = useState("residentPlans");
  const navigate = useNavigate();
  const internetSectionRef = useRef(null);
  const televisionSectionRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = () => {
    navigate("/tv");
  };

  const handleNavigateTerms = () => {
    navigate("/termsAndConditions");
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = containerRef.current.querySelectorAll("h1, p, div");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Servicos | AsoTv Vegachi</title>
        <link rel="canonical" href="https://asotv-vegachi.com/servicios" />
        <meta name="description" content="Nuestros servicios" />
      </Helmet>
      <div>
        <Header />
        <ChatWhatsapp />

        <div>
          <Container ref={containerRef}>
            <h1>
              INTERNET <br />
              + <br />
              TELEVISIÓN
            </h1>
            <p>
              Encuentra el plan ideal que se ajuste a tus necesidades. <br />{" "}
              Explora nuestra variedad de opciones y comunicate con nosotros.
            </p>
            <Contaprincipal>
              <ButtonInfo
                onClick={() => {
                  setPlanType("residentPlans");
                  scrollToSection(internetSectionRef);
                }}
              >
                <em>
                  <strong> Internet</strong>
                </em>
              </ButtonInfo>
              <ButtonInfo
                onClick={() => {
                  setPlanType("corporatePlan");
                  scrollToSection(televisionSectionRef);
                }}
              >
                <em>
                  <strong> Televisión </strong>
                </em>
              </ButtonInfo>
            </Contaprincipal>
          </Container>

          <div ref={internetSectionRef}>
            <Conta>
              <ButtonGeneral onClick={() => setPlanType("residentPlans")}>
                <em>
                  <strong> Plan Residencial</strong>
                </em>
              </ButtonGeneral>
              <ButtonGeneral onClick={() => setPlanType("corporatePlan")}>
                <em>
                  <strong> Plan Corporativo</strong>
                </em>
              </ButtonGeneral>
            </Conta>

            <Divider>
              <h2>
                PLAN{" "}
                {planType === "residentPlans" ? "RESIDENCIAL" : "CORPORATIVO"}
              </h2>

              <DivDivGeneralCard>
                {plansData[planType].map((plan) => (
                  <DivGeneralCard key={plan.id}>
                    <CardContainerCenter>
                      <div key={plan.id}>
                        <h3>{plan.services}</h3>
                        <h2>
                          <strong>{plan.plans}Mb</strong>
                        </h2>
                        <p>${plan.price}</p>
                        <h4>Internet {plan.services}</h4>
                        <p>{plan.items.item1}</p>
                        <p>{plan.items.item2}</p>
                        <p>{plan.items.item3}</p>
                        <ButtonGeneral
                          onClick={() =>
                            (window.location.href =
                              "https://api.whatsapp.com/send?phone=3113400908&text=Hola,%20me%20interesa%20contratar%20el%20servicio%20con%20ustedes%20me%20pueden%20dar%20mas%20información%20gracias.")
                          }
                        >
                          <em>
                            <strong>Lo quiero</strong>
                          </em>
                        </ButtonGeneral>
                      </div>
                    </CardContainerCenter>
                  </DivGeneralCard>
                ))}
              </DivDivGeneralCard>
            </Divider>
          </div>

          <ContainerInicialTv ref={televisionSectionRef}>
            <h1>¡La mejor televisión se vive aquí!</h1>
            <ContainerTv>
              <Image src={tele} alt="tv" />

              <Card3D>
                <Card.Body>
                  <Card.Text>
                    "¡Explora nuestra oferta de canales de televisión por solo
                    $20.000 de afiliación!. Disfruta de una variedad de 73
                    canales, ¡incluyendo nuestro canal local (9)! Sumérgete en
                    un mundo de entretenimiento sin igual y descubre una
                    experiencia televisiva única."
                  </Card.Text>
                  <ButtonGeneral onClick={handleNavigate}>
                    <em>
                      <strong> Deseo ver la lista de canales</strong>
                    </em>
                  </ButtonGeneral>
                </Card.Body>
              </Card3D>
            </ContainerTv>
          </ContainerInicialTv>

          <Section>
            <HeaderCards>
              <Title>Medios de pago</Title>
              <Subtitle>No dejes pasar el pago de tu factura</Subtitle>
            </HeaderCards>

            <CardList>
              <StyledCard style={{ width: "20rem" }}>
                <Card.Img variant="top" src={PuntoFisico} />
                <Card.Body>
                  <Card.Title>Punto físico</Card.Title>
                  <Card.Text>
                    Carrera 50 #53-92 calle principal del municipio de Vegachí
                    Antioquia.
                  </Card.Text>
                  <ButtonGeneral
                    variant="primary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps?q=6.773784,-74.798472",
                        "_blank"
                      )
                    }
                  >
                    <em>
                      <strong> Ir al mapa</strong>
                    </em>
                  </ButtonGeneral>
                </Card.Body>
              </StyledCard>

              <StyledCard style={{ width: "20rem" }}>
                <Card.Img variant="top" src={PuntoLinea} />
                <Card.Body>
                  <Card.Title>Pago en linea</Card.Title>
                  <Card.Text>
                    Transferencia o consignación a la cuenta de ahorros
                    Bancolombia 00136515306.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </CardList>
          </Section>

          <DivServices id="requirements">
            <ButtonClick onClick={handleNavigateTerms}>
              Términos y condiciones de la prestación del servicio
            </ButtonClick>
          </DivServices>
        </div>
        <Foother />
      </div>
    </>
  );
};

export default Services;
