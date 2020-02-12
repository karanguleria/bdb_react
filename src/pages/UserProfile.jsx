import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';
import MostVisitedPlace from '../components/cards/MostVisitedPlace.jsx';

function UserProfile() {
    return (
        <div className="UserProfile">
            <Header/>
            <Breadcrum title="user profile"/>
            {/* ================================    START USER-PROFILE AREA ================================= */}
            <section className="user-profile-area most-visited-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="user-content">
                                <div className="user-avatar">
                                    <img src="images/team1.jpg" alt="user" />
                                    <div className="user-meta-box">
                                        <h3 className="user__name">Mark Williamson</h3>
                                        <p className="user__text">Joined 4 years ago</p>
                                    </div>{/* end user-meta-box */}
                                </div>{/* end user-avatar */}
                                <div className="user-details">
                                    <div className="user-item author-review">
                                        <h4 className="user__label">Reviews</h4>
                                        <div className="user__states">
                                            <span className="la la-star"></span>
                                            <span className="la la-star"></span>
                                            <span className="la la-star"></span>
                                            <span className="la la-star"></span>
                                            <span className="la la-star-half-empty"></span>
                                            <span className="rating-text">56(Reviews)</span>
                                        </div>{/* end user__states */}
                                    </div>{/* end user-item */}
                                    <div className="user-item author-listing">
                                        <h4 className="user__label">Listings</h4>
                                        <p className="userlist__number">12</p>
                                    </div>{/* end user-item */}
                                </div>{/* end user-details */}
                                <div className="user-contact">
                                    <h3 className="cont__title">Contact Details</h3>
                                    <ul className="author__contact">
                                        <li><span className="la la-map-marker"></span>101 Parkview, New York</li>
                                        <li><span className="la la-phone"></span><a href="/#">+7(111)123456789</a></li>
                                        <li><span className="la la-envelope-o"></span><a href="/#">example@gmail.com</a></li>
                                        <li><span className="la la-globe"></span><a href="/#">www.techydevs.com</a></li>
                                    </ul>
                                    <ul className="author__link">
                                        <li><a href="/#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="/#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="/#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="/#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="/#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>{/* end user-contact */}
                                <div className="modal-wrapper">
                                    <button type="button" className="theme__btn" data-toggle="modal" data-target=".bs-example-modal-lg"><span className="la la-envelope-o"></span> send message</button>
                                    <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                        <div className="modal-dialog modal-lg" role="document">
                                            <div className="modal-content">
                                                <div className="contact-form-action">
                                                    {/*Contact Form*/}
                                                    <form method="post">
                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12 form-group">
                                                                <label className="label-text">Write Message</label>
                                                                <textarea className="message-control form-control" name="message"
                                                                    placeholder="Your Message to Mark Williamson"></textarea>
                                                            </div>{/* end col-md-12 */}
                                                            <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                                                <button className="theme__btn" type="submit"><i className="fa fa-paper-plane"></i> Send message</button>
                                                            </div>{/* end col-md-12 */}
                                                        </div>{/* end row */}
                                                    </form>
                                                </div>{/* end contact-form-action */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal"><span className="la la-close"></span> Close</button>
                                                </div>{/* end modal-footer */}
                                            </div>{/* end modal-content */}
                                        </div>{/* end modal-dialog */}
                                    </div>{/* end modal */}
                                </div>{/* end modal-wrapper */}
                            </div>{/* end user-content */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-8">
                            <h3 className="userlist-title">Mark Williamson's Listings</h3>
                            <div className="most-visited-wrap3 row">
                               <MostVisitedPlace class="col-md-6"/>
                               <MostVisitedPlace class="col-md-6"/>
                               <MostVisitedPlace class="col-md-6"/>
                               <MostVisitedPlace class="col-md-6"/>
                               <MostVisitedPlace class="col-md-6"/>
                               <MostVisitedPlace class="col-md-6"/>
                               <MostVisitedPlace class="col-md-6"/>
                            </div>{/* end most-visited-wrap */}
                            <div className="button-shared text-center">
                                <a href="/#" className="theme__btn"><span className="la la-refresh"></span> load more listings</a>
                            </div>{/* end button-shared */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end user-profile-area */}
            {/* ================================    END USER-PROFILE AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default UserProfile;