import styled from "styled-components";
import indexBackground from "../assets/img/canales.avif";

export const DivCoverage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${indexBackground});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.417);
    z-index: 1;
  }

  h1 {
    color: #ffffff;
    text-align: center;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    font-family: var(--font-family-container);
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 468px) {
    h1 {
      font-size: 25px;
    }
  }
`;

// /////////////////////////////

export const DivGeneral = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ChannelGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 90%;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const ChannelCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 6 - 20px); 
  background-color: #ffffff94;
  color: #000000;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.791);

  @media (max-width: 1200px) {
    width: calc(100% / 4 - 20px); 
  }

  @media (max-width: 768px) {
    width: calc(100% / 2 - 20px); 
  }
`;

export const ChannelImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const ChannelName = styled.p`
  margin: 10px 0 5px;
  font-size: 1rem;
  text-align: center;
`;

export const ChannelNumber = styled.p`
  font-size: 1rem;
  text-align: center;
`;


<em><strong></strong></em>