import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #a0a0a0;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 900px; /* Ancho máximo de la tarjeta */
  margin: auto;
  margin-top: 130px;
  margin-bottom: 20px;
  h1 {
    color: #000653;
    font-weight: 700;
  }
  p {
    margin-top: 20px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 468px) {
    max-width: 400px;
    p {
      margin-top: 20px;
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #a0a0a0;
  border-radius: 20px;
`;

export const DivButton = styled.div`
  text-align: center;
`;
export const Button = styled.button`
  background-color: #000653;
  color: #ffffff;
  padding: 10px;
  width: 300px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #3c78d8;
  }
`;

export const Label = styled.label`
  text-align: left;
`;
