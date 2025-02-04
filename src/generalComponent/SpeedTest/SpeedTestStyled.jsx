import styled, { keyframes } from "styled-components";

export const ContainerValores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 120px;
  font-family: var(--font-family-container);
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin-top: 20px;
  list-style: none;
`;

export const CardItem = styled.li`
  width: 310px;
  margin: 10px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  text-align: center;
  background-color: white;
  box-shadow: 0 15px 10px var(--third-color);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 468px) {
    width: 300px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Figure = styled.figure`
  padding-top: 20px;
  margin: 0;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const CardHeader = styled.header`
  background-color: var(--third-color);
  padding: 10px;
  border-radius: 20px 20px 0 0;
  p {
    color: var(--room-color);
    font-family: var(--font-family-container);
    font-size: 1rem;
    text-align: center;
  }
`;

/////////////////////////////////////

export const CenteredContainer = styled.div`
  text-align: center;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(5, 82, 209);

  h1 {
    color: var(--third-color);
  }
`;

export const CircleImageLink = styled.a`
  display: block;
  margin-top: 5px;
`;

const shadowPulse = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;

const scaleAnimation = keyframes`
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const CircleImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-top: 30px;
  cursor: pointer; /* Cursor de la mano */
  animation: ${shadowPulse} 2s infinite,
    ${scaleAnimation} 3s ease-in-out infinite;
`;
