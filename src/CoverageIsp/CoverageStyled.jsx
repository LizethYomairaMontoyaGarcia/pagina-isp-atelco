import styled from "styled-components";
import indexBackground from "../assets/img/cobertura.avif";

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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivMpas = styled.div`
  text-align: center;
  margin-right: 20px; /* Agrega un espacio entre el mapa y el formulario */
  iframe {
    width: 600px;
    height: 400px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const DivForm = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 15px var(--third-color);
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 0; /* Elimina el margen derecho en dispositivos móviles */
  }
`;
