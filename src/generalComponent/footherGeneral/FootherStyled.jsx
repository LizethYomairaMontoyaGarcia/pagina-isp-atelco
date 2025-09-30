import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  background-color: var(--primary-color);
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
    width: 35px;
    flex-direction: column;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    flex-direction: column;
    font-size: 16px;
    color: #ffffff;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 468px) {
    p {
      font-size: 11px;
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
      color: var(--fifth-color);
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

export const FooterBottom = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 15px;
  color: #ffffff;
  p {
    margin: 3px 0;
  }
`;

export const Linea2 = styled.div`
  transform: rotate(90deg);
  width: 4cqb;
  height: 1px;
  background-color: #ffffff;
`;
