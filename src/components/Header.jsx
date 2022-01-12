import React from "react";
import {NavLink, Redirect} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        {localStorage.getItem("login") !== null ? <Redirect to="/" /> : ""}
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/sign-in">Авторизация</NavLink>
      <NavLink to="/profile">Профиль</NavLink>
    </div>
  );
};

export default Header;
