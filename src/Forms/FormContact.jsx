import React, { useState } from "react";
import { FormContainer, Form, Input } from "./FormContacStyled";
import { ButtonGeneral } from "../StyledGenerals";
import Swal from "sweetalert2";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.number &&
      formData.address
    ) {
      const message = `Hola, estoy interesado en contratar su servicio de internet y me gustaría recibir más información sobre los planes que ofrecen. A continuación, les proporciono mis datos \n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nNúmero: ${formData.number}\nDirección: ${formData.address}`;
      window.open(
        `https://api.whatsapp.com/send?phone=573136162815&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );

      setFormData({
        name: "",
        email: "",
        number: "",
        address: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor completa todos los campos obligatorios.",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="tel"
            name="number"
            placeholder="Número"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleInputChange}
            required
          />

          <ButtonGeneral type="submit">
            <em>
              <strong> Enviar</strong>
            </em>
          </ButtonGeneral>
        </Form>
      </FormContainer>
    </div>
  );
};

export default FormContact;
