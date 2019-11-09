import React from "react";
import "./loginform.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class LoginPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", this.state);
        fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res=> res.json())
        .then( ({token, user}) => {
            console.log("response", token, user);
            this.props.onLogin({token, user});
            this.props.history.push(`/users/${user._id}`);
        })
        .catch ( err => {
            console.log("Error", err);
        });
    };

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <>
            <div className="form" id="login">
            <div className="form-toggle"></div>
            <div className="form-panel one">
                <div>
                    <h1>Account Login</h1>
                </div>
                <div className="sep"></div>
                <div className="form-content">
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-group"><label htmlFor="email">E-mail</label><input type="email" name="email" placeholder="Email" value = {this.state.email} onChange = {this.handleChange}/></div>
                        <div className="form-group"><label htmlFor="password">Password</label><input type="password" name="password" placeholder="Password" value = {this.state.password} onChange = {this.handleChange} /></div>
                        <div className="form-group"><button type="submit">Log In</button></div>
                        <Link to={"/signup"}>Create an account</Link>
                    </form>
                </div>
            </div>
        </div>
        </>
        );
    }
}
export default LoginPage;
