import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function ListingDetails() {
    return (
        <div className="ListingDetails">
            <Header/>
            <Breadcrum/>
            {/* ================================    START SINGLE-LISTING AREA ================================= */}
            <section className="single-listing-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="single-listing-wrap">
                                <h2 className="sl__title">Gallery</h2>
                                <div className="gallery-carousel">
                                    <div data-dot="<img src='images/img17.jpg'>" className="gallery-item">
                                        <img src="images/img17.jpg" alt="gallery-image" />
                                    </div>{/* end gallery-item */}
                                    <div data-dot="<img src='images/img18.jpg'>" className="gallery-item">
                                        <img src="images/img18.jpg" alt="gallery-image" />
                                    </div>{/* end gallery-item */}
                                    <div data-dot="<img src='images/img19.jpg'>" className="gallery-item">
                                        <img src="images/img19.jpg" alt="gallery-image" />
                                    </div>{/* end gallery-item */}
                                    <div data-dot="<img src='images/img20.jpg'>" className="gallery-item">
                                        <img src="images/img20.jpg" alt="gallery-image" />
                                    </div>{/* end gallery-item */}
                                    <div data-dot="<img src='images/img21.jpg'>" className="gallery-item">
                                        <img src="images/img21.jpg" alt="gallery-image" />
                                    </div>{/* end gallery-item */}
                                    <div data-dot="<img src='images/img22.jpg'>" className="gallery-item">
                                        <img src="images/img22.jpg" alt="gallery-image" />
                                    </div>{/* end gallery-item */}
                                </div>{/* end gallery-carousel */}
                                <div className="listing-description">
                                    <h2 className="sl__title">Description</h2>
                                    <p className="listing__text">
                                        Nemo ucxqui officia voluptatem accu santium doloremque laudantium,
                                        totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi
                                        officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                                        unde omnis iste natus error sit voluptatem accusan tium dolorem
                                        que laudantium, totam rem aperiam the eaque ipsa quae abillo
                                        was inventore veritatis keret quasi aperiam architecto
                                        beatae vitae dicta sunt explicabo.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                                </div>{/* end listing-description */}
                                <div className="feature-listing">
                                    <h2 className="sl__title">Features</h2>
                                    <ul className="features__list">
                                        <li>Instant Noodles</li>
                                        <li>Wireless Internet</li>
                                        <li>Smoking Allowed</li>
                                        <li>Street Parking</li>
                                        <li>Bike Parking</li>
                                        <li>Accepts Credit cards</li>
                                    </ul>
                                </div>{/* end feature-listing */}
                                <div className="video-listing">
                                    <h2 className="sl__title">Video</h2>
                                    <div className="video__box">
                                        <img src="images/img22.jpg" alt="video-image" />
                                        <div className="video__box-content">
                                            <a className="mfp-iframe video-play-btn" href="https://www.youtube.com/watch?v=5dAICQT1HiU" title="Play Video">
                                                <span className="la la-play-circle-o"></span>
                                            </a>
                                            <p className="video__desc">watch video</p>
                                        </div>{/* end video__box-content */}
                                    </div>{/* end video__box */}
                                </div>{/* end video-listing */}
                                <div className="listing-map gmaps">
                                    <h2 className="sl__title">Location</h2>
                                    <div id="map"></div>
                                </div>{/* end listing-map */}
                                <div className="contact-listing">
                                    <h2 className="sl__title">Contact Information</h2>
                                    <ul className="contact__list">
                                        <li>
                                            <span><i className="la la-map-marker"></i> Address:</span>
                                            101 East Parkview Road, New York
                            </li>
                                        <li>
                                            <span><i className="la la-envelope-o"></i> Email:</span>
                                            <a href="mailto:example@gmail.com">example@gmail.com</a>
                                        </li>
                                        <li>
                                            <span><i className="la la-phone"></i> Phone:</span>
                                            <a href="#">+7(111)123456789</a>
                                        </li>
                                        <li>
                                            <span><i className="la la-external-link-square"></i> Website:</span>
                                            <a href="#">www.techydevs.com</a>
                                        </li>
                                    </ul>
                                    <div className="social-contact">
                                        <a href="#" className="facebook-link"><i className="fa fa-facebook"></i> Facebook</a>
                                        <a href="#" className="twitter-link"><i className="fa fa-twitter"></i> Twitter</a>
                                        <a href="#" className="instagram-link"><i className="fa fa-instagram"></i> Instagram</a>
                                        <a href="#" className="linkedin-link"><i className="fa fa-linkedin"></i> Linkedin</a>
                                        <a href="#" className="youtube-link"><i className="fa fa-youtube-play"></i> Youtube</a>
                                    </div>
                                </div>{/* end contact-listing */}
                                <div className="review-listing">
                                    <h2 className="sl__title">4 Reviews</h2>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment">
                                                <img className="avatar__img" alt="" src="images/team1.jpg" />
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <span className="comment__author">adam smith</span>
                                                        <span className="comment__date">Reviewed 2 Days ago</span>
                                                        <ul className="review__count">
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p className="comment-content">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                                        Curabitur non nulla sit amet nisl tempus
                                        </p>
                                                    <div className="comment-reply">
                                                        <a className="comment__btn" href="#">
                                                            <i className="la la-reply"></i> Reply
                                            </a>
                                                        <p className="helpful__btn">
                                                            Was this review?
                                                <a href="#">
                                                                <i className="la la-thumbs-o-up"></i> Helpful
                                                </a>
                                                            <a href="#">
                                                                <i className="la la-smile-o"></i> Funny
                                                </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>{/* end comment */}
                                            <ul className="comments-reply">
                                                <li>
                                                    <div className="comment">
                                                        <img className="avatar__img" alt="" src="images/team2.jpg" />
                                                        <div className="comment-body">
                                                            <div className="meta-data">
                                                                <span className="comment__author">Julian Smith</span>
                                                                <span className="comment__date">Reviewed 3 Days ago</span>
                                                                <ul className="review__count">
                                                                    <li><span className="la la-star"></span></li>
                                                                    <li><span className="la la-star"></span></li>
                                                                    <li><span className="la la-star"></span></li>
                                                                    <li><span className="la la-star"></span></li>
                                                                    <li><span className="la la-star-half-empty"></span></li>
                                                                </ul>
                                                            </div>
                                                            <p className="comment-content">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                Ut enim ad minim veniam.
                                                                Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                            <div className="comment-reply">
                                                                <a className="comment__btn" href="#">
                                                                    <i className="la la-reply"></i> Reply
                                                    </a>
                                                                <p className="helpful__btn">
                                                                    Was this review?
                                                        <a href="#">
                                                                        <i className="la la-thumbs-o-up"></i> Helpful
                                                        </a>
                                                                    <a href="#">
                                                                        <i className="la la-smile-o"></i> Funny
                                                        </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>{/* end comment */}
                                            <div className="comment">
                                                <img className="avatar__img" alt="" src="images/team3.jpg" />
                                                <div className="comment-body">
                                                    <div className="meta-data">
                                                        <span className="comment__author">Matt Derry</span>
                                                        <span className="comment__date">Reviewed 4 Days ago</span>
                                                        <ul className="review__count">
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                            <li><span className="la la-star"></span></li>
                                                        </ul>
                                                    </div>
                                                    <p className="comment-content">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation.
                                                        Curabitur non nulla sit amet nisl tempus
                                        </p>
                                                    <div className="comment-reply">
                                                        <a className="comment__btn" href="#">
                                                            <i className="la la-reply"></i> Reply
                                            </a>
                                                        <p className="helpful__btn">
                                                            Was this review?
                                                <a href="#">
                                                                <i className="la la-thumbs-o-up"></i> Helpful
                                                </a>
                                                            <a href="#">
                                                                <i className="la la-smile-o"></i> Funny
                                                </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>{/* end comment */}
                                        </li>
                                    </ul>
                                    <div className="button-shared text-center">
                                        <a href="#" className="theme__btn">
                                            <span className="la la-refresh"></span> Load more review
                            </a>
                                    </div>{/* end button-shared */}
                                </div>{/* end review-listing */}
                                <div className="add-review-listing" id="review">
                                    <h2 className="sl__title">Add a Review</h2>
                                    <p className="sl__desc">Your email address will not be published. Required fields are marked *</p>
                                    <ul className="rating__list">
                                        <li>
                                            <span className="la la-star"></span>
                                            <label className="review-label">
                                                <input type="radio" checked="checked" name="review-radio" />
                                                <span className="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span className="la la-star"></span> <span className="la la-star"></span>
                                            <label className="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span className="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span className="la la-star"></span><span className="la la-star"></span><span className="la la-star"></span>
                                            <label className="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span className="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span className="la la-star"></span><span className="la la-star"></span><span className="la la-star"></span><span className="la la-star"></span>
                                            <label className="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span className="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span className="la la-star"></span><span className="la la-star"></span><span className="la la-star"></span><span className="la la-star"></span><span className="la la-star"></span>
                                            <label className="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span className="review-mark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div className="contact-form-action">
                                        {/*Contact Form*/}
                                        <form method="post">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Name</label>
                                                    <input className="form-control" type="text" name="name" placeholder="Your Name" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-6 col-sm-12 form-group">
                                                    <label className="label-text">Email</label>
                                                    <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 form-group">
                                                    <label className="label-text">Review</label>
                                                    <textarea className="message-control form-control" name="message" placeholder="Write Message"></textarea>
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 col-xs-12 upload-btn-wrapper">
                                                    <button className="theme__btn upload__btn">
                                                        <span className="la la-photo"></span> Upload Photo
                                        </button>
                                                    <input type="file" name="photo" />
                                                </div>{/* end col-md-12 */}
                                                <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                                    <button className="theme__btn" type="submit">
                                                        Submit review
                                        </button>
                                                </div>{/* end col-md-12 */}
                                            </div>{/* end row */}
                                        </form>
                                    </div>{/* end contact-form-action */}
                                </div>{/* end add-review-listing */}
                            </div>{/* end single-listing-wrap */}
                        </div>{/* end col-md-8 */}
                        <div className="col-md-4">
                            <div className="author-verified-badge">
                                <div className="author__verified-badge" data-toggle="tooltip" data-placement="top" title="Listing has been verified and belongs the business owner or manager.">
                                    <span className="la la-check-circle-o"></span> Verified Listing
                    </div>
                            </div>{/* end author-verified-badge */}
                            <div className="sidebar">
                                <div className="sidebar-widget author-widget2">
                                    <div className="author-box clearfix">
                                        <img src="images/team2.jpg" alt="author-image" className="author__img" />
                                        <h4 className="author__title">Mark Williamson</h4>
                                        <p className="author__meta">Posted 3 Days ago</p>
                                    </div>
                                    <ul className="author__contact">
                                        <li><span className="la la-map-marker"></span>101 Parkview, New York</li>
                                        <li><span className="la la-phone"></span><a href="#">+7(111)123456789</a></li>
                                        <li><span className="la la-envelope-o"></span><a href="#">mark123@gmail.com</a></li>
                                        <li><span className="la la-external-link-square"></span><a href="#">www.techydevs.com</a></li>
                                    </ul>
                                    <ul className="author__link">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                    <div className="authorprofile__btn">
                                        <a href="user-profile.html" className="theme__btn">
                                            <span className="la la-user"></span> view profile
                            </a>
                                    </div>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget author-widget2 static-widget">
                                    <h3 className="widget__title">Statics info</h3>
                                    <ul className="author__contact">
                                        <li><span className="la la-list-alt"></span>12 Listings</li>
                                        <li><span className="la la-star-o"></span>4.5 Ratings</li>
                                        <li><span className="la la-bookmark-o"></span>24 Bookmark</li>
                                        <li><span className="la la-eye"></span>745 Views</li>
                                        <li><span className="la la-external-link"></span>120 Share</li>
                                        <li><span className="la la-eye"></span>20 Comments</li>
                                        <li><span className="la la-heart-o"></span>120 Likes</li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget date-widget">
                                    <h3 className="widget__title">Booking</h3>
                                    <input className="date-range form-control" type="text" name="daterange" value="04/08/2019" />
                                    <div className="time-slots">
                                        <select>
                                            <option data-display="Time Slots">Time Slots</option>
                                            <option value="1">8:00am - 8:30am</option>
                                            <option value="2">9:00am - 9:30am</option>
                                            <option value="3">10:00am - 10:30am</option>
                                            <option value="4">11:00am - 11:30am</option>
                                            <option value="5">12:00pm - 12:30pm</option>
                                            <option value="6">13:00pm - 13:30pm</option>
                                            <option value="7">14:00pm - 14:30pm</option>
                                            <option value="8">15:00pm - 15:30pm</option>
                                        </select>
                                    </div>{/* end time-slots */}
                                    <div className="booking-count clearfix">
                                        <div className="input-number-group">
                                            <p>Adults</p>
                                            <div className="input-group-button">
                                                <span className="input-number-decrement">-</span>
                                            </div>
                                            <input className="input-number" type="number" value="0" min="0" max="1000" />
                                            <div className="input-group-button">
                                                <span className="input-number-increment">+</span>
                                            </div>
                                        </div>{/* end input-number-group */}
                                        <div className="input-number-group">
                                            <p>Children</p>
                                            <div className="input-group-button">
                                                <span className="input-number-decrement">-</span>
                                            </div>
                                            <input className="input-number" type="number" value="0" min="0" max="1000" />
                                            <div className="input-group-button">
                                                <span className="input-number-increment">+</span>
                                            </div>
                                        </div>{/* end input-number-group */}
                                    </div>{/* end booking-count */}
                                    <div className="booking-btn-box">
                                        <a href="#" className="theme__btn">request to book</a>
                                    </div>{/* end booking-btn-box */}
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget open-widget">
                                    <h3 className="widget__title">Opening Hours</h3>
                                    <div className="opening-hours">
                                        <div className="listing-badge theme__btn">
                                            <span>now open</span>
                                        </div>
                                        <ul>
                                            <li>Monday <span>9am - 5pm</span></li>
                                            <li>Tuesday <span>9am - 5pm</span></li>
                                            <li>Wednesday <span>9am - 5pm</span></li>
                                            <li>Thursday <span>9am - 5pm</span></li>
                                            <li>Friday <span>9am - 5am</span></li>
                                            <li className="off-text">Sat-Sun <span>Closed</span></li>
                                        </ul>
                                    </div>{/* end opening-hours */}
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget category-widget">
                                    <h3 className="widget__title">Categories</h3>
                                    <div className="widget__list cat__list">
                                        <ul>
                                            <li><a href="#">Restaurant <span className="tag-span">11</span></a></li>
                                            <li><a href="#">Shop <span className="tag-span">21</span></a></li>
                                            <li><a href="#">Fitness <span className="tag-span">31</span></a></li>
                                            <li><a href="#">Event <span className="tag-span">24</span></a></li>
                                            <li><a href="#">Bar <span className="tag-span">15</span></a></li>
                                            <li><a href="#">Salon <span className="tag-span">33</span></a></li>
                                            <li><a href="#">Beauty <span className="tag-span">10</span></a></li>
                                        </ul>
                                    </div>{/* end cat-list */}
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget tag-widget">
                                    <h3 className="widget__title">Tags</h3>
                                    <div className="widget__list tag__list">
                                        <ul>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">Restaurant</a></li>
                                            <li><a href="#">Gym</a></li>
                                            <li><a href="#">Food</a></li>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Car Parking</a></li>
                                            <li><a href="#">Place</a></li>
                                            <li><a href="#">Nightlife</a></li>
                                            <li><a href="#">Disco</a></li>
                                            <li><a href="#">Bar</a></li>
                                            <li><a href="#">Bike Parking</a></li>
                                        </ul>
                                    </div>{/* end cat-list */}
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget similar-widget">
                                    <h3 className="widget__title">Similar Listings</h3>
                                    <div className="similar-list">
                                        <div className="recent-item">
                                            <div className="recent-img">
                                                <a href="blog-single.html">
                                                    <img src="images/img6.jpg" alt="blog image" />
                                                </a>
                                            </div>{/* end recent-img */}
                                            <div className="recentpost-body">
                                                <h4 className="recent__link">
                                                    <a href="blog-single.html">The best sale marketer of the next year</a>
                                                </h4>
                                                <ul className="recent__star">
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                </ul>
                                                <span className="recent__meta"><a href="#">Gym & Fitness</a></span>
                                            </div>{/* end recent-img */}
                                        </div>{/* end recent-item */}
                                        <div className="recent-item">
                                            <div className="recent-img">
                                                <a href="blog-single.html">
                                                    <img src="images/img7.jpg" alt="blog image" />
                                                </a>
                                            </div>{/* end recent-img */}
                                            <div className="recentpost-body">
                                                <h4 className="recent__link">
                                                    <a href="blog-single.html">How to make your ideas became true</a>
                                                </h4>
                                                <ul className="recent__star">
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star-half-empty"></span></li>
                                                </ul>
                                                <span className="recent__meta"><a href="#">Restaurants</a></span>
                                            </div>{/* end recent-img */}
                                        </div>{/* end recent-item */}
                                        <div className="recent-item">
                                            <div className="recent-img">
                                                <a href="blog-single.html">
                                                    <img src="images/img8.jpg" alt="blog image" />
                                                </a>
                                            </div>{/* end recent-img */}
                                            <div className="recentpost-body">
                                                <h4 className="recent__link">
                                                    <a href="blog-single.html">What gets in the way of strategy</a>
                                                </h4>
                                                <ul className="recent__star">
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                </ul>
                                                <span className="recent__meta"><a href="#">Art & Design</a></span>
                                            </div>{/* end recent-img */}
                                        </div>{/* end recent-item */}
                                        <div className="recent-item">
                                            <div className="recent-img">
                                                <a href="blog-single.html">
                                                    <img src="images/img9.jpg" alt="blog image" />
                                                </a>
                                            </div>{/* end recent-img */}
                                            <div className="recentpost-body">
                                                <h4 className="recent__link">
                                                    <a href="blog-single.html">What gets in the way of strategy</a>
                                                </h4>
                                                <ul className="recent__star">
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star"></span></li>
                                                    <li><span className="la la-star-half-empty"></span></li>
                                                </ul>
                                                <span className="recent__meta"><a href="#">Outdoors</a></span>
                                            </div>{/* end recent-img */}
                                        </div>{/* end recent-item */}
                                    </div>{/* end similar-list */}
                                    <div className="view-listing">
                                        <a href="#" className="theme__btn">
                                            <span className="la la-eye"></span> see all listings
                            </a>
                                    </div>{/* end view-listing */}
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget social-widget">
                                    <h3 className="widget__title">follow & connect</h3>
                                    <ul className="social__links">
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Dribbble">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Behance">
                                                <i className="fa fa-behance"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                            </div>{/* end sidebar */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end single-listing-area */}
            {/* ================================    END SINGLE-LISTING  AREA ================================= */}

            {/* ================================    START MOST-VISITED AREA ================================= */}
            <section className="most-visited-area most-visited-area3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2 className="sec__title sec__title4">People Also Viewed</h2>
                            </div>{/* end section-heading */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="most-visited-wrap">
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img18.jpg" className="list-img" alt="" />
                                            <span className="list-name badge">now open</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-cutlery"></span> Restaurant</h5>
                                                <h4 className="listing-title">Favorite Place Food Bank</h4>
                                                <p className="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" className="author-img-box">
                                                <img src="images/team1.jpg" className="author-img" alt="author-img" />
                                            </a>
                                            <ul className="listing-list">
                                                <li><span className="la la-phone"></span> (416) 551-0589</li>
                                                <li><span className="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span className="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star-half-full"></span>
                                                <span className="la la-star last-star"></span>
                                                <span className="rating-count">4.5</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="la la-eye info__count"></span> 247</li>
                                                    <li><span className="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img20.jpg" className="list-img" alt="" />
                                            <span className="list-name badge badge-closed">closed</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-plane"></span> travel</h5>
                                                <h4 className="listing-title">beach blue boardwalk</h4>
                                                <p className="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" className="author-img-box">
                                                <img src="images/team2.jpg" className="author-img" alt="author-img" />
                                            </a>
                                            <ul className="listing-list">
                                                <li><span className="la la-phone"></span> (416) 551-0589</li>
                                                <li><span className="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span className="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star-half-full"></span>
                                                <span className="la la-star last-star"></span>
                                                <span className="rating-count">4.6</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="la la-eye info__count"></span> 247</li>
                                                    <li><span className="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img21.jpg" className="list-img" alt="" />
                                            <span className="list-name badge">now open</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-hotel"></span> hotel</h5>
                                                <h4 className="listing-title">
                                                    hotel govendor <i className="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p className="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" className="author-img-box">
                                                <img src="images/team3.jpg" className="author-img" alt="author-img" />
                                            </a>
                                            <ul className="listing-list">
                                                <li><span className="la la-phone"></span> (416) 551-0589</li>
                                                <li><span className="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span className="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star-half-full"></span>
                                                <span className="la la-star last-star"></span>
                                                <span className="rating-count">4.7</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="la la-eye info__count"></span> 247</li>
                                                    <li><span className="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img22.jpg" className="list-img" alt="" />
                                            <span className="list-name badge">now open</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-music"></span> event</h5>
                                                <h4 className="listing-title">
                                                    sticky band party <i className="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p className="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" className="author-img-box">
                                                <img src="images/team1.jpg" className="author-img" alt="author-img" />
                                            </a>
                                            <ul className="listing-list">
                                                <li><span className="la la-phone"></span> (416) 551-0589</li>
                                                <li><span className="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span className="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star-half-full"></span>
                                                <span className="la la-star last-star"></span>
                                                <span className="rating-count">4.5</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="la la-eye info__count"></span> 247</li>
                                                    <li><span className="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img17.jpg" className="list-img" alt="" />
                                            <span className="list-name badge badge-closed">closed</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-shopping-cart"></span> shopping</h5>
                                                <h4 className="listing-title">Sena Clothing Shopping Mall</h4>
                                                <p className="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" className="author-img-box">
                                                <img src="images/team2.jpg" className="author-img" alt="author-img" />
                                            </a>
                                            <ul className="listing-list">
                                                <li><span className="la la-phone"></span> (416) 551-0589</li>
                                                <li><span className="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span className="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star-half-full"></span>
                                                <span className="la la-star last-star"></span>
                                                <span className="rating-count">4.6</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="la la-eye info__count"></span> 247</li>
                                                    <li><span className="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img18.jpg" className="list-img" alt="" />
                                            <span className="list-name badge">now open</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-hotel"></span> hotel</h5>
                                                <h4 className="listing-title">
                                                    hotel govendor <i className="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p className="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" className="author-img-box">
                                                <img src="images/team3.jpg" className="author-img" alt="author-img" />
                                            </a>
                                            <ul className="listing-list">
                                                <li><span className="la la-phone"></span> (416) 551-0589</li>
                                                <li><span className="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span className="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div className="rating-row">
                                            <div className="rating-rating">
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star"></span>
                                                <span className="la la-star-half-full"></span>
                                                <span className="la la-star last-star"></span>
                                                <span className="rating-count">4.7</span>
                                            </div>
                                            <div className="listing-info">
                                                <ul>
                                                    <li><span className="la la-eye info__count"></span> 247</li>
                                                    <li><span className="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                            </div>{/* end most-visited-wrap */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end most-visited-area */}
            {/* ================================    END MOST-VISITED AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default ListingDetails;