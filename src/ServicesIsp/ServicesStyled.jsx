import styled, { keyframes } from "styled-components";
import indexBackground from "../assets/img/Tierraqueenamora.avif";
import { Card } from "react-bootstrap";

export const Container = styled.div`
  background-image: url(${indexBackground});
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 88vh;
  margin-top: 70px;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.532);
  }

  h1,
  p,
  div {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.7s ease-out, transform 0.7s ease-out;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    color: #ffffff;
    padding-top: 80px;
    z-index: 2;
    font-size: 40px;
    font-family: var(--font-family-container);
  }

  p {
    color: #ffffff;
    font-size: 20px;
    padding: 0 100px;
    margin-top: 20px;
    z-index: 2;
    font-family: var(--font-family-container);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 35px;
      padding-top: 70px;
    }
  }

  @media screen and (max-width: 468px) {
    h1 {
      font-size: 35px;
      padding-top: 80px;
    }
    p {
      margin-top: 40px;
      padding: 0 30px;
    }
  }
`;

export const Contaprincipal = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
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

export const ButtonInfo = styled.button`
  z-index: 2;
  border-radius: 20px;
  display: inline-block;
  padding: 0.5rem 1.3rem;
  background-color: white;
  border: 2px solid transparent;
  color: var(--primary-color);
  margin: 0 8px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
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

//////////////////////////////////////////////////////////////////////////////////
export const Divider = styled.div`
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 468px) {
    margin-top: 10px;
  }
  h2 {
    font-family: var(--font-family-container);
  }
  h3 {
    font-family: var(--font-family-container);
  }
`;

export const DivDivGeneralCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DivGeneralCard = styled.div`
  width: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardContainerCenter = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  box-shadow: 0 2px 5px var(--primary-color);
  color: #000000;
  text-align: center;
  border-radius: 20px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
    background-color: #0008742a;
  }
`;

export const Conta = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: white;
    color: black;
  }
`;

//////////////////////////////////////////////////////////////////

export const Section = styled.section`
  padding-bottom: 30px;
  padding-top: 30px;
  background-color: #006565cd;
  margin-top: 50px;
`;

export const HeaderCards = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: var(--font-family-container);
  color: white;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #eaeaea;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  gap: 30px;
`;

export const StyledCard = styled(Card)`
  text-align: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
  background: linear-gradient(145deg, #ffffffc1, #f0f0f06b);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.676), 0 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) translateZ(50px);
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: perspective(1000px) translateZ(80px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 10px 25px rgba(0, 0, 0, 0.3),
      inset 0 0 15px rgba(255, 255, 255, 0.6), inset 0 0 15px rgba(0, 0, 0, 0.2);
  }

  img {
    margin-top: 10px;
    width: 180px;
    border-radius: 100px;
  }

  .card-title {
    font-family: var(--font-family-container);
    font-size: 1.6rem;
  }

  .card-text {
    font-size: 1rem;
  }
`;

//////////////////////////////////////////////////////////////

export const DivServices = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const puls = keyframes`
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

export const ButtonClick = styled.button`
  border-radius: 20px;
  display: inline-block;
  padding: 0.5rem 1.3rem;
  background-color: white;
  border: 2px solid transparent;
  color: var(--primary-color);
  margin: 0 2px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  animation: ${puls} 1.8s infinite;

  &:hover {
    background-color: white;
    color: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

//////////////////////////////////////////////////////

export const ContainerInicialTv = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #e7e7e7;

  h1 {
    font-family: var(--font-family-container);
  }
`;

export const ContainerTv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }

  @media (max-width: 468px) {
    width: 300px;
    height: 300px;
  }
`;

export const Card3D = styled(Card)`
  width: 30rem;
  border-radius: 20px;
  box-shadow: 0 25px 30px rgba(255, 255, 255, 0.374),
    0 30px 60px rgba(255, 255, 255, 0.4);
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateZ(50px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 50px 100px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

export const CardText = styled(Card.Text)`
  color: #333;
  font-size: 1.2rem;
  transform: translateZ(30px);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  margin: 0 10px;
`;
