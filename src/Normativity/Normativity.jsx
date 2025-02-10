import React from "react";
import mintic from "../assets/img/min-tic.jpg";
import crc from "../assets/img/crc.jpg";
import sic from "../assets/img/sic.png";
import internte_sano from "../assets/img/internet_sano.gif";
import fiscalia from "../assets/img/fiscalia.png";
import enTicConfio from "../assets/img/enticconfio.jpg";
import Header from "../generalComponent/headerGeneral/Header";
import styled from "styled-components";
import {
  Container,
  Content,
  TextWrapper,
  ImageContainer,
  Image,
  H2,
  StyledImageLink,
  StyledContainer,
  DivStyledContainer,
  DivAccordion,
} from "./NormativityStyled";
import Foother from "../generalComponent/footherGeneral/Foother";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import { Helmet } from "react-helmet";
import { ButtonGeneral } from "../StyledGenerals";

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 8px rgba(5, 82, 209);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(1deg);
    box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.3);
    background-color: #0681e54f;
  }
`;

const Normativity = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Normatividad | Atelco</title>
        <link rel="canonical" href="https://atelco.net.co/Normatividad" />
        <meta name="description" content="Normas vigentes" />
      </Helmet>
      <div>
        <Header />
        <ChatWhatsapp />
        <Container>
          <Content>
            <TextWrapper>
              <h1>CUIDEMOS DE NUESTRA RED</h1>
              <p>
                En caso de detectar en la red algún tipo de amenaza que atente
                contra su integridad y la de los suyos, comuníquese por favor
                con las siguientes instituciones oficiales encargadas para tal
                fin, donde también podrá acceder a las Líneas de Atención en
                Prevención de la Pornografía Infantil.
              </p>
              <h3>Autoridades de control y vigilancia</h3>
            </TextWrapper>
            <ImageContainer>
              <StyledImageLink href="https://www.mintic.gov.co/portal/inicio/Sala-de-Prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red">
                <Image src={mintic} alt="Min-Tic" />
              </StyledImageLink>
              <StyledImageLink href="https://crcom.gov.co/es">
                <Image src={crc} alt="CRC" />
              </StyledImageLink>
              <StyledImageLink href="https://www.sic.gov.co/">
                <Image src={sic} alt="SIC" />
              </StyledImageLink>
              <StyledImageLink href="https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-ninos-y-jovenes-en-la-red">
                <Image src={internte_sano} alt="Internte Sano" />
              </StyledImageLink>
              <StyledImageLink href="https://www.policia.gov.co/dijin">
                <Image src={fiscalia} alt="Fiscalía" />
              </StyledImageLink>
              <StyledImageLink href="https://www.mintic.gov.co/portal/inicio/Atencion-y-Servicio-a-la-Ciudadania/Preguntas-frecuentes/15261:En-TIC-Confio">
                <Image src={enTicConfio} alt="En Tic Confio" />
              </StyledImageLink>
            </ImageContainer>
          </Content>
        </Container>

        <DivStyledContainer>
          <H2>Leyes, resoluciones y circulares</H2>
          <StyledContainer>
            <div className="row mx-0">
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Decreto <br /> 1078 de 2015
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://mintic.gov.co/images/documentos/publicaciones/circular_registro_637740_%20campana_pornografia_inf.pdf ">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Ley <br /> 1341 de 2009
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1341_2009.html">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Ley <br /> 1978 de 2019
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1978_2019.html">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Resolución <br />
                      202 de 2010
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://www.mintic.gov.co/portal/715/articles-6398_Resolucion_202_2010.pdf">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Resolución <br />
                      290 de 2010
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://normograma.mintic.gov.co/mintic/docs/pdf/resolucion_mintic_0290_2010.pdf">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Resolución <br /> 1090 de 2016
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://mintic.gov.co/portal/715/articles-6398_Resolucion_1090_2016.pdf">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Resolución <br />
                      3484 de 2012
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://colombiatic.mintic.gov.co/679/articles-62434_recurso_1.pdf">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Resolución <br />
                      57 de 2021
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?dt=S&i=140664">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                <StyledCard className="mx-auto">
                  <Card.Body>
                    <Card.Title>
                      Circular <br /> 01 de 2021
                    </Card.Title>
                  </Card.Body>
                  <ButtonGeneral>
                    <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=159527">
                      Descargar
                    </a>
                  </ButtonGeneral>
                </StyledCard>
              </div>
            </div>
          </StyledContainer>
        </DivStyledContainer>

        <DivAccordion>
          <H2>Normatividad</H2> <br />
          <div
            style={{ margin: "0 auto", maxWidth: "900px", padding: "0 15px" }}
          >
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <strong>Política Internet Sano</strong>
                </Accordion.Header>
                <Accordion.Body>
                  El objetivo de "Internet Sano", son dictar medidas de
                  protección contra la explotación, la pornografía y el turismo
                  sexual y demás formas de abuso sexual con menores de edad en
                  Internet, a través de disposiciones preventivas y
                  sancionatorias. Busca además prevenir y contrarrestar la
                  explotación, la pornografía y el turismo sexual con menores de
                  edad en Internet de acuerdo a lo establecido en la <br />
                  <a href="https://www.oas.org/juridico/spanish/cyb_col_ley_679_2001.pdf">
                    Ley 679 de 2001
                  </a>
                  <br /> <br />
                  La ley 679, expedida en desarrollo del Artículo 44 de la
                  Constitución, pretende dictar medidas preventivas y sanciones
                  para quienes exploten y/o abusen sexualmente de los menores de
                  edad, para así ayudar que tengan un desarrollo integral y
                  sano. Si desea conocer el texto completo de la Ley 679 visite
                  este link:{" "}
                  <a href="https://www.icbf.gov.co/">www.icbf.gov.co.</a>
                  <br /> <br />
                  En los siguientes lugares de Internet se pueden realizar las
                  denuncias relacionadas con sitios y contenidos de pornografía
                  de menores de edad y páginas electrónicas en las que se
                  ofrezcan servicios sexuales con niños:
                  <br /> <br />
                  <strong>Ministerio de Comunicaciones</strong> <br />
                  Dignidad Infantil <br />
                  Teléfono: 01800 09 12667 <br />
                  Página
                  <a href="https://www.mintic.gov.co/portal/inicio/">
                    Web: www.mintic.gov.co
                  </a>
                  <br /> <br />
                  <strong>Fiscalía General de la Nación </strong>
                  <br />
                  Teléfono 01 800 0912280
                  <br />
                  Correo Electrónico: contacto@fiscalia.gov.co
                  <br />
                  Página Web:
                  <a href="https://www.fiscalia.gov.co/colombia/">
                    www.fiscalia.gov.co.
                  </a>
                  <br /> <br />
                  <strong>
                    Dirección Central de Policía Judicial – Dijín{" "}
                  </strong>
                  <br />
                  Grupo Investigativo Delitos Informáticos <br />
                  Teléfonos: PBX: 426 6900 Ext. 6301, 6302. Directo: 426 6300
                  <br />
                  Correo Electrónico:
                  <a href="https://www.policia.gov.co/dijin">
                    adelinfo@dijin.policia.gov.co.
                  </a>
                  <br /> <br />
                  <strong>Instituto Colombiano de Bienestar Familiar</strong>
                  <br />
                  Teléfonos: 01 8000 918080 ó (1) 660 5520, (1) 660 5530, (1)
                  660 5540 <br />
                  Página Web:
                  <a href="https://www.icbf.gov.co/">www.icbf.gov.co.</a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <strong>
                    Política de protección de datos (Ley 1581 de 2012 – Decreto
                    1377 de 2013)
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  A través de la Ley 1581 de 2012 y el Decreto 1377 de 2013, se
                  desarrolla el derecho constitucional que tienen todas las
                  personas a conocer, suprimir, actualizar y rectificar todo
                  tipo de datos personales recolectados, almacenados o que hayan
                  sido objeto de tratamiento en bases de datos en las entidades
                  del públicas y privadas. La Corte Constitucional lo definió
                  como el derecho que otorga la facultad al titular de datos
                  personales de exigir de las administradoras de esos datos el
                  acceso, inclusión, exclusión, corrección, adición,
                  actualización y certificación de los datos, así como la
                  limitación en las posibilidades de su divulgación, publicación
                  o cesión, de conformidad con los principios que regulan el
                  proceso de administración de datos personales. Asimismo, ha
                  señalado que este derecho tiene una naturaleza autónoma que lo
                  diferencia de otras garantías con las que está en permanente
                  relación, como los derechos a la intimidad y a la información.
                  En atención a la mencionada Ley se estableció el Registro
                  Nacional de Bases de Datos - RNBD, el cual es un directorio
                  público de las bases de datos con información personal sujetas
                  a tratamiento que operan en el país, acorde con lo establecido
                  en la Ley 1581 de 2012. Para consultar las bases de datos
                  registradas por el Ministerio de Educación Nacional en el
                  Registro Nacional de Bases de Datos - RNBD,
                  <a href="https://rnbd.sic.gov.co/sisi/consultaTitulares/consultas/">
                    ingrese aquí
                  </a>
                  , y realice la búsqueda digitando Ministerio de Educación
                  Nacional en el campo "Nombre o Razón Social" o el NIT
                  899999001 en "Documento de Identificación", ingrese el código
                  CAPTCHA y finalice dando clic en el botón Buscar
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <strong>Política equipos electrónicos -RAEE-</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <strong> Seguridad en la web</strong>
                </Accordion.Header>
                <Accordion.Body>
                  La seguridad en la web es esencial para proteger la
                  privacidad, la integridad y la disponibilidad de la
                  información en línea, así como para garantizar una experiencia
                  de usuario segura y confiable en el vasto mundo digital.
                  <br /> <br />
                  <a href="https://www.mintic.gov.co/gestionti/615/articles-5482_Guia_Seguridad_informacion_Mypimes.pdf">
                    Seguridad y privacidad de la información
                  </a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <strong>
                    Comisión de regulación de comunicaciones. (RESOLUCIÓN 5111
                    DE 2017)
                  </strong>
                </Accordion.Header>
                <Accordion.Body>
                  Por la cual se establece el Régimen de Protección de los
                  Derechos de los Usuarios de Servicios de Comunicaciones.{" "}
                  <br />
                  <a href="https://colombiatic.mintic.gov.co/679/articles-62266_doc_norma.pdf">
                    RESOLUCIÓN 5111 DE 2017
                  </a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <strong>Ley 2108 de 2021</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Ley de internet como servicio público esencial y universal
                  <br />
                  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=167946">
                    Ley 2108 de 2021
                  </a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <strong>Entes reguladores</strong>
                </Accordion.Header>
                <Accordion.Body>
                  <strong>COMISIÓN DE REGULACIÓN DE COMUNICACIONES:</strong>
                  <br />
                  Línea Gratuita Nacional: 01 8000 919 278 <br />
                  <a href="https://www.crcom.gov.co/es">www.crcom.gov.co</a>
                  <br /> <br />
                  <strong>SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO:</strong>
                  <br />
                  Carrera 13 No. 27 – 00, Pisos. 1, 3, 4, 5, 6, 7 y 10. Bogotá
                  D.C. <br />
                  Horario de Atención: Lunes a Viernes de 8:00 a.m. a 4:30 p.m.
                  <br />
                  Conmutador: (57 1) 587 00 00 <br />
                  Fax: (57 1) 587 0284 <br />
                  Contac Center: (57 1) 592 0400 <br />
                  Línea Gratuita Nacional: 01 8000 910 165 <br />
                  Correo: acontactenos@sic.gov.co <br />
                  <a href="https://www.sic.gov.co/">www.sic.gov.co </a>
                  <br /> <br />
                  <strong>
                    MINISTERIO DE TECNOLOGÍA DE LA INFORMACIÓN Y LAS
                    TELECOMUNICACIONES
                  </strong>
                  <br />
                  Edificio Murillo Toro Cra. 8a entre calles 12 y 13, Bogotá,
                  Colombia – Código Postal 111711
                  <br />
                  Teléfono Conmutador: +57(1) 344 34 60 – Línea Gratuita:
                  01-800-0914014
                  <br />
                  Línea Anticorrupción: 01-800-0912667 – Correo Institucional:
                  minticresponde@mintic.gov.co
                  <br />
                  Notificaciones judiciales – Correo Institucional:
                  notificacionesjudicialesmintic@mintic.gov.co
                  <br />
                  Horario de Atención: Lunes a Viernes 8:30 am – 4:30 pm.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <strong>Prevención pornografía infantil</strong>
                </Accordion.Header>
                <Accordion.Body>
                  Las empresas prestadoras de servicios de internet
                  <strong>(ISP) </strong> tienen responsabilidades específicas
                  en la prevención y mitigación de la pornografía infantil y
                  otros contenidos ilegales en línea, algunas medidas comunes
                  que suelen requerirse incluyen:
                  <br /> <br />
                  <strong>1. Filtrado de contenido: </strong> Los ISP pueden
                  implementar filtros de contenido para bloquear el acceso a
                  sitios web que contienen pornografía infantil u otros
                  materiales ilegales. Estos filtros pueden basarse en listas
                  negras de sitios conocidos por alojar contenido ilegal, así
                  como en tecnologías de detección de imágenes y palabras clave.
                  <br />
                  <br />
                  <strong>2. Reporte de contenido ilegal: </strong>Los ISP estan
                  obligados a informar a las autoridades competentes sobre
                  cualquier contenido ilegal que encuentren en sus redes,
                  incluida la pornografía infantil. Esto puede implicar la
                  colaboración con agencias policiales y de aplicación de la ley
                  para investigar y tomar medidas contra los responsables de
                  producir, distribuir o consumir este tipo de contenido.
                  <br />
                  <br />
                  <strong>
                    3. Colaboración con organismos de aplicación de la ley:
                  </strong>
                  requeridos por ley a colaborar con las autoridades en
                  investigaciones relacionadas con la pornografía infantil,
                  proporcionando información sobre usuarios sospechosos y
                  facilitando el acceso a datos relevantes, como registros de
                  tráfico de internet y direcciones IP.
                  <br />
                  <br />
                  <strong>4. Educación y concienciación: </strong> Los ISP
                  pueden participar en iniciativas de educación y concienciación
                  para sus usuarios, proporcionando información sobre los
                  riesgos de la pornografía infantil en línea y cómo reportarla
                  si se encuentra. Esto puede incluir la promoción de recursos y
                  líneas directas de ayuda para víctimas y personas preocupadas.
                  <br />
                  <br />
                  Es importante tener en cuenta que las responsabilidades
                  específicas de los ISP en la prevención de la pornografía
                  infantil pueden variar según la legislación de cada país y las
                  políticas internas de cada proveedor de servicios. En algunos
                  casos, los ISP pueden estar sujetos a sanciones legales si no
                  cumplen adecuadamente con estas responsabilidades.
                  <br />
                  <br />
                  <a href="https://mintic.gov.co/images/documentos/publicaciones/circular_registro_637740_%20campana_pornografia_inf.pdf ">
                    Revisar la norma.
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </DivAccordion>

        <Foother />
      </div>
    </>
  );
};

export default Normativity;
