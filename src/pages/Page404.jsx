import React from 'react';

function Page404() {
    return (
        <div class="Page404">
            {/* ================================     START ERROR AREA ================================= */}
            <section class="error-area">
                <div class="error-actions">
                    <ul>
                        <li><a href="index.html">Back to Home</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>{/* end error-actions */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <div class="error-content">
                                <img src="images/404-img.jpg" alt="error image" />
                                <h3 class="error-title">Oops! Page not found.</h3>
                                <p class="error-desc">
                                    The page you are looking for might have been removed,
                                    had its name changed, or is temporarily unavailable.
                        You can check out our <a href="#">Help Center.</a>
                                </p>
                                <div class="or-box">
                                    <span>or</span>
                                </div>
                                <div class="go-back">
                                    <a href="index.html" class="theme__btn">
                                        <span class="la la-mail-reply"></span> back to home
                        </a>
                                </div>
                            </div>{/* end breadcrumb-content */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copy-right">
                                <p class="copy__desc">
                                    &copy; Copyright Dirto 2019. Made with
                        <span class="la la-heart-o"></span> by <a href="https://techydevs.com">Techydevs.</a>
                                </p>
                                <ul class="condition-links">
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Help Center</a></li>
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