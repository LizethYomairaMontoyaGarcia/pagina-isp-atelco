import React, { useState } from "react";
import { FormContainer, Form, Input, DivButton, Label } from "./PqrsStyled";
import Header from "../generalComponent/headerGeneral/Header";
import * as Yup from "yup";
import ChatWhatsapp from "../generalComponent/chatWhatsapp/ChatWhatsapp";
import { ButtonGeneral } from "../StyledGenerals";
import { Helmet } from "react-helmet";

const Pqrs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    request: "",
    IdCard: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    request: "",
    IdCard: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const message = `Hola,%0AMe comunico con ustedes para realizar un PQRS, mis datos son los siguientes:%0ANombre: ${formData.name}%0ACédula: ${formData.IdCard}%0ACorreo electrónico: ${formData.email}%0ATeléfono: ${formData.phone}%0AMotivo: ${formData.reason}%0ASolicitud: ${formData.request}`; // Agregada la cédula al mensaje
      const whatsappLink = `https://wa.me/3136162815?text=${message}`;

      window.open(whatsappLink, "_blank");
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      setFormErrors(errors);
      console.error("Error al enviar el formulario:", error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Campo requerido")
      .matches(
        /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/,
        "No se permiten números y signos de puntuación"
      ),
    email: Yup.string()
      .required("Campo requerido")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
        "Correo inválido (ejemplo@gmail.com)"
      ),
    phone: Yup.string()
      .required("Campo requerido")
      .matches(/^\d+(\.\d+)*$/, "Formato de celular inválido"),
    reason: Yup.string().required("Campo requerido"),
    request: Yup.string().required("Campo requerido"),
    IdCard: Yup.string()
      .required("Campo requerido")
      .matches(/^\d{5,10}$/, "Formato de cédula inválido"), // Regla para la cédula del titular
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PQRS | Atelco</title>
        <link rel="canonical" href="https://atelco.net.co/Pqrs" />
        <meta name="description" content="Prueba de velocidad" />
      </Helmet>

      <div>
        <Header />
        <FormContainer>
          <div>
            <h1> Atelco te ayuda </h1>
            <p>
              Ten presente que para realizar un <strong>PQRS</strong> debes de
              llenar los datos del titular del servicio.
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Nombre completo del titular*</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <p>{formErrors.name}</p>}

            <Label htmlFor="IdCard">Cédula del titular*</Label>
            <Input
              type="text"
              id="IdCard"
              name="IdCard"
              value={formData.IdCard}
              onChange={handleInputChange}
            />
            {formErrors.IdCard && <p>{formErrors.IdCard}</p>}

            <Label htmlFor="email">Correo electrónico*</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}

            <Label htmlFor="phone">Número de teléfono*</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {formErrors.phone && <p>{formErrors.phone}</p>}

            <Label htmlFor="reason">Motivo de la solicitud*</Label>
            <Input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
            />
            {formErrors.reason && <p>{formErrors.reason}</p>}

            <Label htmlFor="request">Solicitud del cliente*</Label>
            <Input
              type="text"
              id="request"
              name="request"
              value={formData.request}
              onChange={handleInputChange}
            />
            {formErrors.request && <p>{formErrors.request}</p>}

            <DivButton>
              <ButtonGeneral type="submit">Enviar</ButtonGeneral>
            </DivButton>
          </Form>
        </FormContainer>
        <ChatWhatsapp />
      </div>
    </>
  );
};

export default Pqrs;
