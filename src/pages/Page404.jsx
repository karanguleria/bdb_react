import React from 'react';

function Page404() {
    return (
        <div className="Page404">
            {/* ================================     START ERROR AREA ================================= */}
            <section className="error-area">
                <div className="error-actions">
                    <ul>
                        <li><a href="index.html">Back to Home</a></li>
                        <li><a href="/#">Help</a></li>
                    </ul>
                </div>{/* end error-actions */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="error-content">
                                <img src="images/404-img.jpg" alt="error" />
                                <h3 className="error-title">Oops! Page not found.</h3>
                                <p className="error-desc">
                                    The page you are looking for might have been removed,
                                    had its name changed, or is temporarily unavailable.
                        You can check out our <a href="/#">Help Center.</a>
                                </p>
                                <div className="or-box">
                                    <span>or</span>
                                </div>
                                <div className="go-back">
                                    <a href="index.html" className="theme__btn">
                                        <span className="la la-mail-reply"></span> back to home
                        </a>
                                </div>
                            </div>{/* end breadcrumb-content */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copy-right">
                                <p className="copy__desc">
                                    &copy; Copyright Dirto 2019. Made with
                        <span className="la la-heart-o"></span> by <a href="https://techydevs.com">Techydevs.</a>
                                </p>
                                <ul className="condition-links">
                                    <li><a href="/#">Terms & Conditions</a></li>
                                    <li><a href="/#">Privacy Policy</a></li>
                                    <li><a href="/#">Help Center</a></li>
                                </ul>
                            </div>{/* end copy-right */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end error-area */}
            {/* ================================    END ERROR AREA ================================= */}
        </div>
    );
}

export default Page404;