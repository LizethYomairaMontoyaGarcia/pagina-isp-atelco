import React, { useState, useEffect } from "react";
import { HeaderWrapper, Container, Logo, Nav, MobileNav } from "./HeaderStyled";
import logoIsp from "../../assets/img/asoTv.jpg";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
    // Cerrar el menú hamburguesa si la pantalla es mayor que 768px
    if (window.innerWidth > 768) {
      setMobileNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <HeaderWrapper id="header">
      <Container className="container">
        <Logo className="logo me-auto">
          <img src={logoIsp} alt="Logo" />
        </Logo>
        <Nav id="navbar" className="navbar">
          {isDesktop && (
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/servicios">
                  Servicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/cobertura">
                  Cobertura
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/nosotros">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/normatividad">
                  Normatividad
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/test">
                  Test
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/pqrs">
                  PQRS
                </a>
              </li>
            </ul>
          )}
          <i
            className="bi bi-list mobile-nav-toggle"
            onClick={toggleMobileNav}
          ></i>
        </Nav>
        <MobileNav isOpen={isMobileNavOpen}>
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Inicio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/servicios">
                Servicio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/cobertura">
                Cobertura
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/nosotros">
                Nosotros
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/normatividad">
                Normatividad
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/test">
                Test
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/pqrs">
                PQRS
              </a>
            </li>
          </ul>
        </MobileNav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
