import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function Contact() {
    return (
        <div className="Contact">
            <Header/>
            <Breadcrum/>
            {/* ================================    START ADD-LISTING AREA ================================= */}
            <section className="add-listing-area contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Get In Touch</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content contact-list-content">
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Your Name</label>
                                                    <input className="form-control" type="text" name="name" placeholder="You Name" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Your E-mail</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Email Address" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Your Message</label>
                                                    <textarea className="message-control form-control" name="message"
                                                        placeholder="Write Your Message..."></textarea>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <button type="submit" className="theme__btn send__btn">
                                                        <span className="la la-envelope-o"></span> Send Message
                                        </button>
                                                </div>{/* end col-md-12 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-list-content */}
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-7 */}
                        <div className="col-md-5">
                            <div className="add-list-form-item">
                                <div className="add-list-title-wrap">
                                    <h3 className="add-lis-title">Our Office</h3>
                                </div>{/* add-list-title-wrap */}
                                <div className="add-list-content">
                                    <div className="our-office-content">
                                        <img src="images/img15.jpg" alt="group-img" />
                                        <p className="office__desc">
                                            Mauris aliquet eu quam id ornare. Morbi ac quam enim.
                                            Cras vitae nulla condimentum, semper dolor non, faucibus dolor.
                                            Praesent eros turpis, commodo vel justo at
                            </p>
                                        <ul className="office__address">
                                            <li><span className="la la-map-marker"></span> USA 27TH Brooklyn NY</li>
                                            <li><span className="la la-phone"></span> +7(111)123456789</li>
                                            <li><span className="la la-envelope-o"></span> contact@dirto.com</li>
                                        </ul>
                                    </div>{/* end our-office-content */}
                                </div>{/* end add-list-content */}
                                <div className="add-list-title-wrap working-item">
                                    <h3 className="add-lis-title">Working Hours</h3>
                                </div>{/* add-list-title-wrap */}
                                <ul className="working-list">
                                    <li>Monday to Friday<span>9am - 7pm</span></li>
                                    <li>Saturday to Sunday <span className="closed-time">Closed</span></li>
                                </ul>
                            </div>{/* end add-list-form-item */}
                        </div>{/* end col-md-5 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end add-listing-area */}
            {/* ================================    END ADD-LISTING AREA ================================= */}

            {/*========= start google map ===========*/}
            <div className="gmaps">
                <div id="map"></div>
                <div className="map-address-box">
                    <ul className="map-address">
                        <li>
                            <span className="la la-map-marker"></span>
                            <h5 className="map__title">address</h5>
                            <p className="map__desc">
                                Melbourne, Australia, 105 South <br /> Park Avenue
                </p>
                        </li>
                        <li>
                            <span className="la la-phone"></span>
                            <h5 className="map__title">phone</h5>
                            <p className="map__desc">Local: 2800 256 508</p>
                            <p className="map__desc">Local: 666 777 888</p>
                        </li>
                        <li>
                            <span className="la la-envelope-o"></span>
                            <h5 className="map__title">email</h5>
                            <p className="map__desc">needhelp@dirto.com</p>
                            <p className="map__desc">inquiry@dirto.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/*========= end google map ===========*/}
            <Footer/>
        </div>
    );
}

export default Contact;