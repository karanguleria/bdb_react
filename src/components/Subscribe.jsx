import React from 'react';

function Subscribe() {
    return (
        <div className="Subscribe">
            <section className="cta-area cta-area2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cta-box clearfix">
                                <div className="col-md-8">
                                    <div className="section-heading">
                                        <h2 className="sec__title sec__title2">Subscribe to Newsletter!</h2>
                                        <p className="sec__meta">
                                            Subscribe to get latest updates and information.
                                        </p>
                                    </div>{ /* end section-heading */}
                                </div>{ /* end col-md-8 */}
                                <div className="col-md-4">
                                    <div className="contact-form-action">
                                        { /*Contact Form*/}
                                        <form method="post">
                                            <span className="la la-envelope-o"></span>
                                            <input className="form-control" type="email" placeholder="Enter your email" required="" />
                                            <button className="theme__btn" type="submit">Subscribe</button>
                                        </form>
                                    </div>{ /* end contact-form-action */}
                                </div>{ /* end col-md-3 */}
                            </div>{ /* end cta-box */}
                        </div>{ /* end col-md-12 */}
                    </div>{ /* end row */}
                </div>{ /* end container */}
            </section>
        </div>
    );
}
export default Subscribe;