import React from "react";
import styled, { keyframes } from "styled-components";
import whatsaap from "../../assets/img/whatsapp.png";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const WhatsAppButton = styled.div`
  display: flex;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 999;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 1.8s infinite;
  p {
  }
  img {
    width: 70px;
  }
  a {
    text-decoration: none;
  }
  :hover {
    transform: scale(1.05);
  }
`;

const ChatWhatsapp = () => {
  return (
    <WhatsAppButton>
      <a
        href="https://api.whatsapp.com/send?phone=573136162815&text=Hola,%20Deseo%20contratar%20el%20servicio%20con%20ustedes,%20¿podrían%20darme%20más%20información%20del%20servicio?"
        rel="noopener noreferrer"
      >
        <img src={whatsaap} alt="WhatsApp" />
      </a>
    </WhatsAppButton>
  );
};

export default ChatWhatsapp;
