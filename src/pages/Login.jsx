import React, { Component } from 'react'
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            remember_me: false,
            error: '',
            login: false
        };
        this.handelUserChange = this.handelUserChange.bind(this);
        this.handelPasswordChange = this.handelPasswordChange.bind(this);
        this.handelRemembermeChange = this.handelRemembermeChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({
            error: ''
        });
    }
    handelUserChange(evt) {
        this.setState({
            username: evt.target.value,
        })
    }
    handelPasswordChange(evt) {
        this.setState({
            password: evt.target.value,
        })
    }
    handelRemembermeChange(evt) {
        console.log(evt.target.value);
        this.setState({
            remember_me: evt.target.value,
        })
    }
    handelSubmit(evt) {
        console.log("submit");

        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({
                error: "Username is required !"
            })
        }
        if (!this.state.password) {
            return this.setState({
                error: "Password is required !"
            })
        }
        this.setState({
            error: ''
        })
        axios.post('http://awardselfie.com/bdb/public/api/auth/login', {
            email: this.state.username,
            password: this.state.password,
            remember_me: false
        })
            .then(function (response) {
                localStorage.setItem("token", response.data.access_token)
                console.log(response.data.access_token);
                // this.setState({
                //     login: true
                // })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        // if (this.state.login) {
        //     return (
        //         <Redirect
        //             to="/"
        //         />
        //     )
        // }
        return (

            <div className="Login">
                <Header />
                <Breadcrum title="Login" />
                {/* ================================       START FORM AREA ================================= */}
                <section className="form-shared">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="contact-form-action">
                                    <div className="form-heading text-center">
                                        <h3 className="form__title">Login to your account!</h3>
                                        <p className="form__desc">with your social network.</p>
                                    </div>
                                    {/*Contact Form*/}
                                    <form onSubmit={this.handelSubmit}>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 col-xs-12 form-group">
                                                <button className="theme__btn submit__btn2 btn__google" type="submit">
                                                    <i className="fa fa-google"></i> Google
                                </button>
                                            </div>{/* end col-md-4 */}
                                            <div className="col-md-4 col-sm-12 col-xs-12 form-group">
                                                <button className="theme__btn submit__btn2 btn__facebook" type="submit">
                                                    <i className="fa fa-facebook"></i> Facebook
                                </button>
                                            </div>{/* end col-md-4 */}
                                            <div className="col-md-4 col-sm-12 col-xs-12 form-group">
                                                <button className="theme__btn submit__btn2 btn__twitter" type="submit">
                                                    <i className="fa fa-twitter"></i> Twitter
                                </button>
                                            </div>{/* end col-md-4 */}
                                            <div className="col-md-12 col-sm-12 col-xs-12 account-assist text-center">
                                                <p className="account__desc account__desc2">or</p>
                                            </div>{/* end col-md-12 */}
                                            {
                                                this.state.error &&
                                                <h3 data-test="error" onClick={this.dismissError}>
                                                    <button onClick={this.dismissError} >X</button>
                                                    {this.state.error}
                                                </h3>
                                            }
                                            <meta name="csrf-token" content="{{csrf_token()}}" />
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" value={this.state.username} onChange={this.handelUserChange} type="text" name="name" placeholder="Username, or email" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" value={this.state.password} onChange={this.handelPasswordChange} type="text" name="password" placeholder="Password" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                                <div className="custom-checkbox">
                                                    <input type="checkbox" id="chb1" value={this.state.remember_me} onChange={this.handelRemembermeChange} />
                                                    <label htmlFor="chb1" >Remember Me</label>
                                                    <a href="/#" className="pass__desc"> Forgot my password?</a>
                                                </div>
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                                <button className="theme__btn" type="submit">
                                                    Login now <span className="la la-angle-right"></span>
                                                </button>
                                            </div>{/* end col-md-12 */}

                                            <div className="col-md-12 col-sm-12 col-xs-12 account-assist">
                                                <p className="account__desc">Not a member?<a href="sign-up.html"> Register</a></p>
                                            </div>{/* end col-md-12 */}
                                        </div>{/* end row */}
                                    </form>
                                </div>{/* end contact-form */}
                            </div>{/* end col-md-7 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </section>{/* end form-shared */}
                {/* ================================       START FORM AREA ================================= */}
                <Footer />
            </div>
        )
    }
}

export default Login
