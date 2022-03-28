import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import "./TopMenu.scss";

export function TopMenu() {
  const { auth, logout } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };

  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <Icon
          name="edit outline"
          className="top-menu-admin__logo__icon"
          size="big"
        />
        <b className="top-menu-admin__logo__title">iCard</b>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <b className="login">Hola, {renderName()}</b>
        </Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" className="logout" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
