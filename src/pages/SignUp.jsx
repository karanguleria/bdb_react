import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function SignUp() {
    return (
        <div className="SignUp">
            <Header/>
            <Breadcrum title="Sign Up"/>
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
                                <form method="post">
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
                                        <div className="col-md-12 col-sm-12 form-group">
                                            <input className="form-control" type="text" name="name" placeholder="First Name" />
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 form-group">
                                            <input className="form-control" type="text" name="name" placeholder="Last Name" />
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 form-group">
                                            <input className="form-control" type="text" name="name" placeholder="Enter your username" />
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 form-group">
                                            <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 form-group">
                                            <input className="form-control" type="text" name="password" placeholder="Password" />
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 form-group">
                                            <input className="form-control" type="text" name="password" placeholder="Confirm Password" />
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                            <div className="custom-checkbox">
                                                <input type="checkbox" id="chb1" />
                                                <label for="chb1">I agree to Dirto's <a href="#">Privacy Policy</a></label>
                                            </div>
                                            <div className="custom-checkbox">
                                                <input type="checkbox" id="chb2" />
                                                <label for="chb2">I agree to Dirto's <a href="#">Terms of Services</a></label>
                                            </div>
                                        </div>{/* end col-md-12 */}

                                        <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                            <button className="theme__btn" type="submit">
                                                Register Account <span className="la la-angle-right"></span>
                                            </button>
                                        </div>{/* end col-md-12 */}
                                        <div className="col-md-12 col-sm-12 col-xs-12 account-assist">
                                            <p className="account__desc">Already have an account?<a href="login.html"> Log in</a></p>
                                        </div>{/* end col-md-12 */}
                                    </div>{/* end row */}
                                </form>
                            </div>{/* end contact-form */}
                        </div>{/* end col-md-7 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end form-shared */}
            {/* ================================        START FORM AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default SignUp;