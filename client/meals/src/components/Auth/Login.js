import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    };

    return (
        <div className="formcss">
            <form id="login_form" className="form_class" onSubmit={onSubmit} method="post">
                <div className="form_div">
                    <label>Login:</label>
                    <input className="field_class" name="email" type="text" placeholder="Username" />
                    <label>Password:</label>
                    <input id="pass" className="field_class" name="password" type="password" placeholder="Password" />
                    <button className="submit_class" type="submit" form="login_form">Login</button>
                </div>
            </form>
        </div>
    );
};