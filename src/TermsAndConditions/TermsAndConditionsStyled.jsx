import styled, { keyframes } from "styled-components";
import Card from "react-bootstrap/Card";

const h2Animation = keyframes`
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

export const DivServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  padding: 0 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    animation: ${h2Animation} 2s ease-in-out infinite;
  }
`;

const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledCard = styled(Card)`
  width: 80%;
  max-width: 50rem;
  animation: ${cardAnimation} 0.5s ease-out;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(145deg, #ffffffc1, #f0f0f06b);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 10px rgba(0, 0, 0, 0.3),
    0 4px 6px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.5),
    inset 0 0 10px rgba(0, 0, 0, 0.1);
  transform: perspective(1500px) translateZ(50px);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-top: 20px;
  margin-bottom: 30px;

  &:hover {
    transform: perspective(1500px) translateZ(60px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 12px 20px rgba(0, 0, 0, 0.3),
      0 8px 10px rgba(0, 0, 0, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.6),
      inset 0 0 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 764px) {
    max-width: 90%;
  }

  @media (max-width: 464px) {
    max-width: 100%;
  }
`;

export const CardBody = styled(Card.Body)`
  padding: 20px;
  background-color: #ffffff;
`;

export const CardTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 15px;
`;
