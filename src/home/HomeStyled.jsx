import styled, { keyframes } from "styled-components";
import indexBackground from "../assets/img/condotof.avif";

export const Container = styled.div`
  background-image: url(${indexBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.488);
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    background-position: top center;
  }

  @media screen and (max-width: 468px) {
    background-position: top;
  }

  h3 {
    color: #ffffff;
    text-align: center;
    font-size: 35px;
    padding: 0 20px;
    margin-top: 20px;
    position: relative;
    z-index: 3;
    font-family: var(--font-family-container);
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    h3 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 468px) {
    h3 {
      font-size: 25px;
    }
  }
`;

export const DivContact = styled.div`
  display: flex;
  background-color: #dfdfdf;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  div {
    justify-content: center;
    margin-left: 150px;
    margin-top: 10px;
    h1 {
      font-size: 3rem;
      margin-top: 30px;
      text-align: center;
    }
    p {
      font-size: 1.3rem;
      text-align: center;
      margin-top: 20px;
    }
  }
`;
////////////////////////////////////////////////////////////////////////////
export const DivSpeed = styled.div`
  text-align: center;
  width: 90%;
  margin: 30px auto;
  background-color: var(--room-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(5, 82, 209);

  @media (min-width: 768px) {
    width: 80%;
    padding: 40px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  margin-top: 20px;
  color: var(--fifth-color);
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin-top: 0;
  color: var(--fifth-color);

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const DivSpeedImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  div {
    text-align: center;
    margin: 10px;
    flex-basis: 45%;
  }

  img {
    width: 80px;
    margin-bottom: 10px;
  }

  strong {
    color: var(--primary-color);
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    margin-top: 40px;

    div {
      margin: 20px;
      flex-basis: 25%;
    }

    img {
      width: 100px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    div {
      flex-basis: 50% !important;
      margin: 10px 0;
    }
  }
`;
//Estilos para el modal
export const ModalWrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 25px;
  border-radius: 20px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 23px;
`;

////////////////////////////////////////////////////////////////////
export const ImgRedes = styled.img`
  width: 30px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

///////////////////////////////////////////////////////////////////

export const Section = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 20px;
`;

export const Card = styled.header`
  margin-bottom: 25px;
  text-align: center;
  h1 {
    font-family: var(--font-family-container);
    color: var(--third-color);
    font-size: 2.2rem;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.3rem;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Conta = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 468px) {
    flex-direction: column;
    height: auto;
  }
`;

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

export const Button = styled.button`
  border-radius: 20px;
  display: inline-block;
  padding: 0.5rem 1.3rem;
  background-color: var(--primary-color);
  border: 2px solid transparent;
  color: #ffffff;
  margin: 0 2px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  animation: ${pulse} 1.8s infinite;

  &:hover {
    background-color: white;
    color: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

export const HeaderCards = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
  @media (max-width: 470px) {
    margin-top: 20px;
  }
`;

export const CardItem = styled.li`
  width: 400px;
  margin: 10px;
  border: 2px solid var(--third-color);
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  padding-bottom: 20px;
  box-shadow: 0 2px 10px var(--third-color);

  @media (max-width: 1024px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 468px) {
    width: 500px;
  }

  &:hover {
    transform: scale(1.03);
    transition: transform 0.5s ease;
  }
`;

export const CardHeader = styled.header`
  background-color: var(--third-color);
  padding: 5px;
  height: 70px;
  margin-top: 40px;
  margin-bottom: 8px;
  h1 {
    color: var(--room-color);
    font-family: var(--font-family-container);
    font-size: 1.7rem;
    padding-top: 15px;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const DivPlans = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  div {
    border-right: 1px solid #ccc;
    padding: 0 15px;
    text-align: center;
  }
  div:last-child {
    border-right: none;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    div {
      border-right: 1px solid #ccc;
      border-bottom: none;
      padding: 10px 15px;

      text-align: center;
    }
    div:last-child {
      border-right: none;
      border-bottom: none;
    }
  }
`;
/////////////////////////////////////////////////////////////////////////////////////
// Estilos de carousel
export const ParrafoCarousel = styled.p`
  color: black;
  font-family: var(--font-family-container);
  font-size: 20px;
  @media (max-width: 468px) {
    font-size: 18px;
  }
`;

export const TitleCarousel = styled.div`
  text-align: center;
  font-family: var(--font-family-container);
`;

export const DivGeneralCarousel = styled.div`
  margin-bottom: 50px;
`;

export const imgCarousel = styled.img`
  width: 50px;
`;
