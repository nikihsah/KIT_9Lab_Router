import React from "react";
import { Redirect } from "react-router-dom";

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getLogin() {
        return localStorage.getItem("login");
    }

    getPassword() {
        return localStorage.getItem("password");
    }

    render() {
        return (
            <div id="profile">
                {this.getLogin() === null ? <Redirect to="/" /> : ""}

                <br />
                <div>
                    <p>
                        <strong>Login:</strong> {this.getLogin()}{" "}
                    </p>
                </div>
                <div>
                    <p>
                        <strong>Password:</strong> {this.getPassword()}{" "}
                    </p>
                </div>
                <br />
                <button
                    class="btn btn-dark"
                    onClick={() => {
                        localStorage.clear();
                        this.setState(() => {
                            return {};
                        });
                    }}
                >
                    Выход
                </button>
            </div>
        );
    }
}