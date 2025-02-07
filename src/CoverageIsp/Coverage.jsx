import React from "react";
import Header from "../generalComponent/headerGeneral/Header";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import Foother from "../generalComponent/footherGeneral/Foother";
import { DivCoverage, DivMpas, DivForm, DivGeneral } from "./CoverageStyled";
import FormContact from "../Forms/FormContact";
import coverageData from "../Data/infoIsp.json";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";

const Coverage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cobertura | Atelco Alta Velocidad S.A.S Zomac</title>
        <meta name="description" content="Cobertura" />
        <link rel="canonical" href="https://atelco.net.co/Cobertura" />
      </Helmet>
      <Header />
      <ChatWhatsapp />

      <DivCoverage>
        <h1>¿Dónde estamos ubicados?</h1>

        {coverageData.coverage.map((coverageItem, index) => (
          <Card
            key={index}
            style={{
              width: "25rem",
              zIndex: "2",
              backgroundColor: "#00000095",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            <Card.Body>
              <Card.Text style={{ textAlign: "center", marginTop: "30px" }}>
                <p>{coverageItem.zones}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </DivCoverage>

      <DivGeneral>
        <DivMpas>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1iAYH5m7EHovJwHjnN-MDW_vBphAhwZY&ehbc=2E312F"
            title="Google Maps"
          ></iframe>
        </DivMpas>

        <DivForm>
          <FormContact />
        </DivForm>
      </DivGeneral>

      <Foother />
    </>
  );
};

export default Coverage;
