import React from "react";
import "./signupform.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SignupPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:"",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", this.state);
        event.preventDefault();
        console.log("submit", this.state);
        fetch("/api/v1/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res => res.json())
        .then( data=>{
            console.log("data", data);
            this.props.history.push("/login");
        })
        .catch ( err => {
            console.log("Error", err);
        });
    };

    handleChange = (e) => {
        console.log("handle change", e.target.name, e.target.value);
        this.setState( {
            [e.target.name]: e.target.value,
        });
    };


    render() {
        return (
            <>
            <div className="form" id="signup">
                 <div className="form-toggle"></div>
                 <div className="form-panel one">
                     <div>
                         <h1>Account creation</h1>
                     </div>
                     <div className="sep"></div>
                     <div className="form-content">
                         <form onSubmit = {this.handleSubmit}>
                             <div className="form-group"><label htmlFor="email">E-mail</label><input type="email" className="inputFields" placeholder="Email" name= {"email"} onChange = {this.handleChange}/></div>
                             <div className="form-group"><label htmlFor="password">Password</label><input type="password" className="inputFields" placeholder="Password" name= {"password"} onChange = {this.handleChange}/></div>
                             <div className="form-group"><button type="submit">Log In</button></div>
                             <p className="message">Already registered? <Link to={"/login"}>Login</Link></p>
                         </form>
                     </div>
                 </div>
             </div>
             </>
        );
    }
}
export default SignupPage;
