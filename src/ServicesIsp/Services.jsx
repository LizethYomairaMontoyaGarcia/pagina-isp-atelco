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
  DivServices,
  StyledCard,
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
        <title>Servicos | Atelco</title>
        <link rel="canonical" href="https://atelco.net.co/Servicios"/>
        <meta name="description" content="Nuestros servicios" />
      </Helmet>
      <div>
        <Header />
        <ChatWhatsapp />

        <div>
          <Container ref={containerRef}>
            <h1>
              FIBRA ÓPTICA
              <br />
              LA CALIDAD ES NUESTRO SERVICIO
            </h1>
            <br />
            <p>
              Personaliza tu plan y disfruta de una conexión estable para hacer
              lo que más te gusta. <br />
              ¡Navega a toda velocidad!
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
                PLAN
                {planType === "residentPlans" ? "RESIDENCIAL" : "CORPORATIVO"}
              </h2>

              <DivDivGeneralCard>
                {plansData[planType].map((plan) => (
                  <DivGeneralCard key={plan.id}>
                    <CardContainerCenter>
                      <div key={plan.id}>
                        <h3> Internet {plan.services}</h3>
                        <h2>
                          <strong>{plan.plans}Mb</strong>
                        </h2>
                        <h4>
                          <strong>${plan.price}</strong>
                        </h4>
                        <p>{plan.items.item1}</p>
                        <p>{plan.items.item2}</p>
                        <p>{plan.items.item3}</p>
                        <p>{plan.items.item4}</p>
                        <ButtonGeneral
                          onClick={() =>
                            (window.location.href =
                              "https://api.whatsapp.com/send?phone=3136162815&text=Hola,%20me%20interesa%20contratar%20el%20servicio%20con%20ustedes%20me%20pueden%20dar%20mas%20información%20gracias.")
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

          <Section>
            <HeaderCards>
              <Title>
                <strong>Medios de pago</strong>
              </Title>
              <Subtitle>No dejes pasar el pago de tu factura</Subtitle>
            </HeaderCards>

            <CardList>
              <StyledCard style={{ width: "20rem" }}>
                <Card.Img variant="top" src={PuntoFisico} />
                <Card.Body>
                  <Card.Title>Punto físico</Card.Title>
                  <Card.Text>
                    Carrera 5 Calle 7-10 Barrio unión al frente de la iglesia
                    principal, Municipio Condoto
                  </Card.Text>
                  <ButtonGeneral
                    variant="primary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps?q=5.094589, -76.646629",
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
                    Transferencia o consignación, cuenta de ahorros Bancolombia{" "}
                    <em />
                    <strong>36000001706</strong> a nombre de{" "}
                    <strong>Atelco Alta Velocidad.</strong>
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
