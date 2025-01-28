import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  background-color: #9e9e9e;
  color: #fff;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    margin-bottom: 10px;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  div {
    margin-bottom: 10px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  img {
    width: 30px;
    flex-direction: column;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    flex-direction: column;
    font-size: 14px;
    color: #ffffff;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 468px) {
    p {
      font-size: 11.5px;
    }
  }
`;

export const DivDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  a {
    margin-right: 40px;
    margin-left: 40px;
    align-items: center;
    color: white;
    text-decoration: none;
    margin-bottom: 20px;
    &:hover {
      color: var(--primary-color);
    }
  }
  @media (max-width: 468px) {
    a {
      font-size: 12px;
      margin-right: 0;
      margin-left: 0px;
    }
  }
`;

export const Linea = styled.div`
  position: relative;
  transform: rotate(0deg);
  width: 90%;
  height: 1px;
  background-color: #ffffff7b;
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  img {
    width: 25px;
    margin-right: 5px;
    margin-left: 5px;
  }
  @media (max-width: 468px) {
    img {
      margin-right: 3px;
      margin-left: 3px;
    }
  }
`;

export const Linea2 = styled.div`
  transform: rotate(90deg);
  width: 4cqb;
  height: 1px;
  background-color: #ffffff7b;
`;
