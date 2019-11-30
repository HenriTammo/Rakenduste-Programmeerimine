import React from "react";
import "./loginform.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userUpdate, tokenUpdate } from "../store/actions";
import { toast } from "react-toastify";
import * as services from "../services.js";


class LoginPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
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
        services.login(this.state)
        .then(this.handleSuccess)
        .catch ( err => {
            console.log("Error", err);
            toast.error("Logimine ebaõnnestus!");
        });
    };

    handleSuccess = ({token, user}) => {
        this.props.dispatch(userUpdate(user));
        this.props.dispatch(tokenUpdate(token));
        this.props.history.push(`/users/${user._id}`);
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
export default connect()(LoginPage);
