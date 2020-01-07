import React from 'react';

function Subscribe() {
    return (
        <div class="Subscribe">
            <section class="cta-area cta-area2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="cta-box clearfix">
                                <div class="col-md-8">
                                    <div class="section-heading">
                                        <h2 class="sec__title sec__title2">Subscribe to Newsletter!</h2>
                                        <p class="sec__meta">
                                            Subscribe to get latest updates and information.
                                        </p>
                                    </div>{ /* end section-heading */}
                                </div>{ /* end col-md-8 */}
                                <div class="col-md-4">
                                    <div class="contact-form-action">
                                        { /*Contact Form*/}
                                        <form method="post">
                                            <span class="la la-envelope-o"></span>
                                            <input class="form-control" type="email" placeholder="Enter your email" required="" />
                                            <button class="theme__btn" type="submit">Subscribe</button>
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