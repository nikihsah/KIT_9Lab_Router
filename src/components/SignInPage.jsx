import React from "react";
import {Redirect} from "react-router-dom";

class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("registered", true);
  }

  render() {
    return (
      <div className="mainform">
        {localStorage.getItem("login") !== null ? <Redirect to="/" /> : ""}
        <div className="form">
          <form action="">
            <div class="mb-3">
            <input placeholder="login" className="form-control" type="text" name="" id="login" />
            </div>
            <div class="mb-3"/>
            <input placeholder="password" className="form-control" type="text" name="" id="password" />
            <div class="mb-3">
            <button className="btn btn-dark" onClick={() => this.register()}>OK</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInPage;
