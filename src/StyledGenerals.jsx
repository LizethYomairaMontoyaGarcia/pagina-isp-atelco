import styled from "styled-components";
import "./assets/variables/variables.css";

export const ButtonGeneral = styled.button`
  border-radius: 20px;

  padding: 0.5rem 1.3rem;
  background-color: var(--primary-color);
  border: 2px solid transparent;
  color: #ffffff;
  margin: 0 2px;
  font-family: var(--font-family-container);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  a {
    text-decoration: none;
    color: #ffffff;
    font-family: var(--font-family-container);
  }
  &:hover {
    background-color: white;
    color: var(--primary-color);
    border-color: var(--primary-color);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    a {
      color: var(--primary-color);
    }
  }
`;
