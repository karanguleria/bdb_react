import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirm_password: '',
            error: ''
        }
        // this.handelName = this.handelName.bind(this);
        // this.handelFirstName = this.handelFirstName.bind(this);
        // this.handelLastName = this.handelLastName.bind(this);
        // this.handelEmail = this.handelEmail.bind(this);
        // this.handelPassword = this.handelPassword.bind(this);
        // this.handelConfirmPassword = this.handelConfirmPassword.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    // handelName(evt) {
    //     this.setState({
    //         name: evt.target.value
    //     });
    // }
    // handelFirstName(evt) {
    //     this.setState({
    //         first_name: evt.target.value
    //     });
    // }
    // handelLastName(evt) {
    //     this.setState({
    //         last_name: evt.target.value
    //     });
    // }
    // handelEmail(evt) {
    //     this.setState({
    //         email: evt.target.value
    //     });
    // }
    // handelPassword(evt) {
    //     this.setState({
    //         password: evt.target.value
    //     });
    // }
    handelSubmit(event) {
        alert("event submit triggered");
        event.preventDefault()
    }
    render() {
        return (
            <div className="SignUp">
                <Header />
                <Breadcrum title="Sign Up" />
                {/* ================================        START FORM AREA ================================= */}
                <section className="form-shared">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="contact-form-action">
                                    <div className="form-heading text-center">
                                        <h3 className="form__title">Create an account!</h3>
                                        <p className="form__desc">with your social network.</p>
                                    </div>
                                    {/*Contact Form*/}
                                    <form method="post" onSubmit={this.handelSubmit}>
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
                                            {this.state.error}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" type="text" value={this.state.firstname} onChange={(event) => { this.setState({ firstname: event.target.value }) }} name="firstname" placeholder="First Name" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" type="text" value={this.state.lastname} onChange={(event) => { this.setState({ lastname: event.target.value }) }} name="lastname" placeholder="Last Name" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" type="text" value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} name="username" placeholder="Enter your username" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" type="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} name="email" placeholder="Email Address" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" type="text" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} name="password" placeholder="Password" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 form-group">
                                                <input className="form-control" type="text" value={this.state.confirm_password} onChange={(event) => { this.setState({ confirm_password: event.target.value }) }} name="confirm_password" placeholder="Confirm Password" />
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                                <div className="custom-checkbox">
                                                    <input type="checkbox" id="chb1" />
                                                    <label for="chb1">I agree to Dirto's <Link to="#">Privacy Policy</Link></label>
                                                </div>
                                                <div className="custom-checkbox">
                                                    <input type="checkbox" id="chb2" />
                                                    <label for="chb2">I agree to Dirto's <Link to="#">Terms of Services</Link></label>
                                                </div>
                                            </div>{/* end col-md-12 */}

                                            <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                                <button className="theme__btn" type="submit">
                                                    Register Account <span className="la la-angle-right"></span>
                                                </button>
                                            </div>{/* end col-md-12 */}
                                            <div className="col-md-12 col-sm-12 col-xs-12 account-assist">
                                                <p className="account__desc">Already have an account?<Link to="/login"> Log in</Link></p>
                                            </div>{/* end col-md-12 */}
                                        </div>{/* end row */}
                                    </form>
                                </div>{/* end contact-form */}
                            </div>{/* end col-md-7 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </section>{/* end form-shared */}
                {/* ================================        START FORM AREA ================================= */}
                <Footer />
            </div>
        )
    }
}