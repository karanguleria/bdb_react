import React from 'react';

function Login() {
    return (
        <div class="Login">
            {/* ================================       START FORM AREA ================================= */}
            <section class="form-shared">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="contact-form-action">
                                <div class="form-heading text-center">
                                    <h3 class="form__title">Login to your account!</h3>
                                    <p class="form__desc">with your social network.</p>
                                </div>
                                {/*Contact Form*/}
                                <form method="post">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-12 col-xs-12 form-group">
                                            <button class="theme__btn submit__btn2 btn__google" type="submit">
                                                <i class="fa fa-google"></i> Google
                                </button>
                                        </div>{/* end col-md-4 */}
                                        <div class="col-md-4 col-sm-12 col-xs-12 form-group">
                                            <button class="theme__btn submit__btn2 btn__facebook" type="submit">
                                                <i class="fa fa-facebook"></i> Facebook
                                </button>
                                        </div>{/* end col-md-4 */}
                                        <div class="col-md-4 col-sm-12 col-xs-12 form-group">
                                            <button class="theme__btn submit__btn2 btn__twitter" type="submit">
                                                <i class="fa fa-twitter"></i> Twitter
                                </button>
                                        </div>{/* end col-md-4 */}
                                        <div class="col-md-12 col-sm-12 col-xs-12 account-assist text-center">
                                            <p class="account__desc account__desc2">or</p>
                                        </div>{/* end col-md-12 */}
                                        <div class="col-md-12 col-sm-12 form-group">
                                            <input class="form-control" type="text" name="name" placeholder="Username, or email" />
                                        </div>{/* end col-md-12 */}
                                        <div class="col-md-12 col-sm-12 form-group">
                                            <input class="form-control" type="text" name="password" placeholder="Password" />
                                        </div>{/* end col-md-12 */}
                                        <div class="col-md-12 col-sm-12 col-xs-12 form-condition">
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="chb1" />
                                                <label for="chb1">Remember Me</label>
                                                <a href="#" class="pass__desc"> Forgot my password?</a>
                                            </div>
                                        </div>{/* end col-md-12 */}
                                        <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                            <button class="theme__btn" type="submit">
                                                Login now <span class="la la-angle-right"></span>
                                            </button>
                                        </div>{/* end col-md-12 */}

                                        <div class="col-md-12 col-sm-12 col-xs-12 account-assist">
                                            <p class="account__desc">Not a member?<a href="sign-up.html"> Register</a></p>
                                        </div>{/* end col-md-12 */}
                                    </div>{/* end row */}
                                </form>
                            </div>{/* end contact-form */}
                        </div>{/* end col-md-7 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end form-shared */}
            {/* ================================       START FORM AREA ================================= */}
        </div>
    );
}

export default Login;