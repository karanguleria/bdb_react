import React from 'react';

function Contact() {
    return (
        <div class="Contact">
            {/* ================================    START ADD-LISTING AREA ================================= */}
            <section class="add-listing-area contact-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="add-list-form-item">
                                <div class="add-list-title-wrap">
                                    <h3 class="add-lis-title">Get In Touch</h3>
                                </div>{/* add-list-title-wrap */}
                                <div class="add-list-content contact-list-content">
                                    <div class="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div class="row">
                                                <div class="col-md-12 col-sm-12 form-group">
                                                    <label class="label-text">Your Name</label>
                                                    <input class="form-control" type="text" name="name" placeholder="You Name" />
                                                </div>{/* end col-md-12 */}
                                                <div class="col-md-12 col-sm-12 form-group">
                                                    <label class="label-text">Your E-mail</label>
                                                    <input class="form-control" type="text" name="name" placeholder="Email Address" />
                                                </div>{/* end col-md-12 */}
                                                <div class="col-md-12 col-sm-12 form-group">
                                                    <label class="label-text">Your Message</label>
                                                    <textarea class="message-control form-control" name="message"
                                                        placeholder="Write Your Message..."></textarea>
                                                </div>{/* end col-md-12 */}
                                                <div class="col-md-12 col-sm-12 form-group">
                                                    <button type="submit" class="theme__btn send__btn">
                                                        <span class="la la-envelope-o"></span> Send Message
                                        </button>
                                                </div>{/* end col-md-12 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-7 */}
                        <div class="col-md-5">
                            <div class="add-list-form-item">
                                <div class="add-list-title-wrap">
                                    <h3 class="add-lis-title">Our Office</h3>
                                </div>{/* add-list-title-wrap */}
                                <div class="add-list-content">
                                    <div class="our-office-content">
                                        <img src="images/img15.jpg" alt="group-img" />
                                        <p class="office__desc">
                                            Mauris aliquet eu quam id ornare. Morbi ac quam enim.
                                            Cras vitae nulla condimentum, semper dolor non, faucibus dolor.
                                            Praesent eros turpis, commodo vel justo at
                            </p>
                                        <ul class="office__address">
                                            <li><span class="la la-map-marker"></span> USA 27TH Brooklyn NY</li>
                                            <li><span class="la la-phone"></span> +7(111)123456789</li>
                                            <li><span class="la la-envelope-o"></span> contact@dirto.com</li>
                                        </ul>
                                    </div>{/* end our-office-content */}
                                </div>{/* end add-list-content */}
                                <div class="add-list-title-wrap working-item">
                                    <h3 class="add-lis-title">Working Hours</h3>
                                </div>{/* add-list-title-wrap */}
                                <ul class="working-list">
                                    <li>Monday to Friday<span>9am - 7pm</span></li>
                                    <li>Saturday to Sunday <span class="closed-time">Closed</span></li>
                                </ul>
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-5 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end add-listing-area */}
            {/* ================================    END ADD-LISTING AREA ================================= */}

            {/*========= start google map ===========*/}
            <div class="gmaps">
                <div id="map"></div>
                <div class="map-address-box">
                    <ul class="map-address">
                        <li>
                            <span class="la la-map-marker"></span>
                            <h5 class="map__title">address</h5>
                            <p class="map__desc">
                                Melbourne, Australia, 105 South <br /> Park Avenue
                </p>
                        </li>
                        <li>
                            <span class="la la-phone"></span>
                            <h5 class="map__title">phone</h5>
                            <p class="map__desc">Local: 2800 256 508</p>
                            <p class="map__desc">Local: 666 777 888</p>
                        </li>
                        <li>
                            <span class="la la-envelope-o"></span>
                            <h5 class="map__title">email</h5>
                            <p class="map__desc">needhelp@dirto.com</p>
                            <p class="map__desc">inquiry@dirto.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/*========= end google map ===========*/}
        </div>
    );
}

export default Contact;