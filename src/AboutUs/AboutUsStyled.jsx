import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 90%;
  margin: 30px auto;
  background-color: #0553d1bb;
  padding: 20px;
  border-radius: 10px ;
  box-shadow: 0px 0px 15px rgba(5, 82, 209);

  h1 {
    color: var(--room-color);
    margin-bottom: 20px;
    font-family: var(--font-family-container);
  }
  p {
    color: var(--room-color);
    padding: 0 30px;
    margin-top: 20px;
    font-size: 1.3rem;
  }

  img {
    width: 170px;
  }

  @media screen and (max-width: 468px) {
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

/////////////////////////////////////////////////////////////////////////
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 50px;

  @media screen and (max-width:  768px) {
    flex-direction: column;
  }
`;

export const CardListMisionVision = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

export const CardItemMisionVision = styled.li`
  width: calc(40% - 10px);
  margin: 10px;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(135deg, #0553d187, #ffffff);
  box-shadow: 0 20px 5px rgba(0, 0, 0, 0.053), 0 30px 10px rgba(0, 0, 0, 0.185);
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform: perspective(1000px) translateZ(0);

  &:hover {
    transform: perspective(1000px) translateZ(10px);
    box-shadow: 0 25px 30px rgba(0, 0, 0, 0.242),
      0 50px 100px rgba(0, 0, 0, 0.123);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 468px) {
    width: calc(90% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContentMisionVision = styled.p`
  padding: 10px;
  color: #333;
  font-size: 1.2rem;
  transform: translateZ(20px);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
`;

export const CardTitletMisionVision = styled.h2`
  font-family: var(--font-family-container);
  transform: translateZ(30px);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
`;

export const FigureMisionVision = styled.figure`
  padding-top: 20px;
  transform: translateZ(40px);
  transition: transform 0.3s ease-in-out;

  img {
    width: 90px;
    transition: transform 0.3s ease-in-out;
    transform: translateZ(50px);
  }
`;

//////////////////////////////////////////////

export const ContainerValores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  h2 {
    font-family: var(--font-family-container);
    font-size: 2.5rem;
    color: var(--third-color);
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const CardItem = styled.li`
  width: calc(31% - 10px);
  margin: 10px;
  border: 2px solid var(--third-color);
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  background-color: white;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 468px) {
    width: calc(50% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    transform: perspective(900px) translateZ(10px);
    box-shadow: 0 25px 20px rgba(255, 255, 255, 0.243),
      0 10px 50px rgba(0, 0, 0, 0.327);
  }
`;

export const CardContent = styled.p`
  padding: 10px;
  font-family: var(--font-family-container);
  font-size: 1.2rem;
`;

export const Figure = styled.figure`
  padding-top: 20px;
  img {
    width: 90px;
  }
`;

///////////////////////////////////////////
