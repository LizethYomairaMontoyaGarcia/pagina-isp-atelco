import React from "react";
import Header from "../generalComponent/headerGeneral/Header";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import Foother from "../generalComponent/footherGeneral/Foother";
import {
  DivCoverage,
  DivGeneral,
  ChannelCard,
  ChannelImage,
  ChannelName,
  ChannelNumber,
  ChannelGrid,
} from "./TvStyled";
import infoIsp from "../Data/infoIsp.json";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";

const Tv = () => {
  const { televisionChannels } = infoIsp;

  return (
    <>
      <Helmet>
       
        <meta charSet="utf-8" />
        <title>Televisión | AsoTv Vegachi</title>
        <link rel="canonical" href="https://asotv-vegachi.com/tv" />
        <meta name="description" content="Televisión" />
      </Helmet>
      <Header />
      <ChatWhatsapp />

      <DivCoverage>
        <h1>
          Descubre nuestra variedad de <br /> canales y disfruta de contenido
          excepcional
        </h1>
        <Card
          style={{
            width: "25rem",
            zIndex: "2",
            backgroundColor: "#00000095",
            color: "white",
            fontSize: "1.2rem",
          }}
        >
          <Card.Body>
            <Card.Text style={{ textAlign: "center", marginTop: "30px" }}>
              <p>
                Algunos momentos en la vida son importantes por sí solos, pero
                cuando los compartes con las personas que amas, se vuelven
                inolvidables.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </DivCoverage>

      <DivGeneral>
        <ChannelGrid>
          {televisionChannels.map((channel) => (
            <ChannelCard key={channel.id}>
              <ChannelImage src={channel.imgTv} alt={channel.nameTv} />
              <ChannelName>{channel.nameTv}</ChannelName>
              <ChannelNumber>Canal: {channel.CanalTv}</ChannelNumber>
            </ChannelCard>
          ))}
        </ChannelGrid>
      </DivGeneral>

      <Foother />
    </>
  );
};

export default Tv;
