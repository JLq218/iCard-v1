import React from "react";
import { LoginForm } from "../../../components/Admin";
import { Icon } from "semantic-ui-react";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <div className="login-admin__content__icon">
          <Icon
            name="users"
            size="massive"
            className="login-admin__content__icon__users"
          />
        </div>
        <h1>Iniciar sesión</h1>
        <LoginForm />
      </div>
    </div>
  );
}
