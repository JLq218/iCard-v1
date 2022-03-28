import React from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, Flip } from "react-toastify";
import { loginApi } from "../../../api/user";
import { useAuth } from "../../../hooks";
import "./LoginForm.scss";

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      // console.log("Login ok");
      // console.log(formValue);
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);

        // Agregado para mostrar mensaje de login correcto
        toast.success("Ingreso Exitoso", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          transition: Flip,
        });
      } catch (error) {
        console.log("ERROR");
        console.log(error);
        toast.error(error.message);
      }
    },
  });
  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        className="login-form-admin__input"
        name="email"
        placeholder="Correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        icon="at"
        iconPosition="left"
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        icon="lock"
        iconPosition="left"
      />
      <Button type="submit" content="Iniciar sesión" primary fluid />
    </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
