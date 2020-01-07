import React from 'react';

function UserProfile() {
    return (
        <div class="UserProfile">

            {/* ================================    START USER-PROFILE AREA ================================= */}
            <section class="user-profile-area most-visited-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="user-content">
                                <div class="user-avatar">
                                    <img src="images/team2.jpg" alt="user-image" />
                                    <div class="user-meta-box">
                                        <h3 class="user__name">Mark Williamson</h3>
                                        <p class="user__text">Joined 4 years ago</p>
                                    </div>{/* end user-meta-box */}
                                </div>{/* end user-avatar */}
                                <div class="user-details">
                                    <div class="user-item author-review">
                                        <h4 class="user__label">Reviews</h4>
                                        <div class="user__states">
                                            <span class="la la-star"></span>
                                            <span class="la la-star"></span>
                                            <span class="la la-star"></span>
                                            <span class="la la-star"></span>
                                            <span class="la la-star-half-empty"></span>
                                            <span class="rating-text">56(Reviews)</span>
                                        </div>{/* end user__states */}
                                    </div>{/* end user-item */}
                                    <div class="user-item author-listing">
                                        <h4 class="user__label">Listings</h4>
                                        <p class="userlist__number">12</p>
                                    </div>{/* end user-item */}
                                </div>{/* end user-details */}
                                <div class="user-contact">
                                    <h3 class="cont__title">Contact Details</h3>
                                    <ul class="author__contact">
                                        <li><span class="la la-map-marker"></span>101 Parkview, New York</li>
                                        <li><span class="la la-phone"></span><a href="#">+7(111)123456789</a></li>
                                        <li><span class="la la-envelope-o"></span><a href="#">example@gmail.com</a></li>
                                        <li><span class="la la-globe"></span><a href="#">www.techydevs.com</a></li>
                                    </ul>
                                    <ul class="author__link">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>{/* end user-contact */}
                                <div class="modal-wrapper">
                                    <button type="button" class="theme__btn" data-toggle="modal" data-target=".bs-example-modal-lg"><span class="la la-envelope-o"></span> send message</button>
                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                        <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="contact-form-action">
                                                    {/*Contact Form*/}
                                                    <form method="post">
                                                        <div class="row">
                                                            <div class="col-md-12 col-sm-12 form-group">
                                                                <label class="label-text">Write Message</label>
                                                                <textarea class="message-control form-control" name="message"
                                                                    placeholder="Your Message to Mark Williamson"></textarea>
                                                            </div>{/* end col-md-12 */}
                                                            <div class="col-md-12 col-sm-12 col-xs-12 form-group">
                                                                <button class="theme__btn" type="submit"><i class="fa fa-paper-plane"></i> Send message</button>
                                                            </div>{/* end col-md-12 */}
                                                        </div>{/* end row */}
                                                    </form>
                                                </div>{/* end contact-form-action */}
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-default" data-dismiss="modal"><span class="la la-close"></span> Close</button>
                                                </div>{/* end modal-footer */}
                                            </div>{/* end modal-content */}
                                        </div>{/* end modal-dialog */}
                                    </div>{/* end modal */}
                                </div>{/* end modal-wrapper */}
                            </div>{/* end user-content */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-8">
                            <h3 class="userlist-title">Mark Williamson's Listings</h3>
                            <div class="most-visited-wrap3 row">
                                <div class="most-visited-item col-md-6">
                                    <a href="listing-details.html">
                                        <div class="listing-img-box">
                                            <img src="images/img1.jpg" class="list-img" alt="" />
                                            <span class="list-name badge">now open</span>
                                            <span class="like-icon" data-toggle="tooltip" data-placement="bottom"
                                                title="22 Likes">
                                                <i class="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-cutlery"></span> Restaurant</h5>
                                                <h4 class="listing-title">Favorite Place Food Bank</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team1.jpg" class="author-img" alt="author-img" />
                                            </a>
                                            <ul class="listing-list">
                                                <li><span class="la la-phone"></span> (416) 551-0589</li>
                                                <li><span class="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div class="rating-row">
                                            <div class="rating-rating">
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star-half-full"></span>
                                                <span class="la la-star last-star"></span>
                                                <span class="rating-count">4.5</span>
                                            </div>
                                            <div class="listing-info">
                                                <ul>
                                                    <li><span class="la la-eye info__count"></span> 247</li>
                                                    <li><span class="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div class="most-visited-item col-md-6">
                                    <a href="listing-details.html">
                                        <div class="listing-img-box">
                                            <img src="images/img2.jpg" class="list-img" alt="" />
                                            <span class="list-name badge badge-closed">closed</span>
                                            <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i class="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-plane"></span> travel</h5>
                                                <h4 class="listing-title">beach blue boardwalk</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team2.jpg" class="author-img" alt="author-img" />
                                            </a>
                                            <ul class="listing-list">
                                                <li><span class="la la-phone"></span> (416) 551-0589</li>
                                                <li><span class="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div class="rating-row">
                                            <div class="rating-rating">
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star-half-full"></span>
                                                <span class="la la-star last-star"></span>
                                                <span class="rating-count">4.6</span>
                                            </div>
                                            <div class="listing-info">
                                                <ul>
                                                    <li><span class="la la-eye info__count"></span> 247</li>
                                                    <li><span class="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div class="most-visited-item col-md-6">
                                    <a href="listing-details.html">
                                        <div class="listing-img-box">
                                            <img src="images/img3.jpg" class="list-img" alt="" />
                                            <span class="list-name badge">now open</span>
                                            <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i class="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-hotel"></span> hotel</h5>
                                                <h4 class="listing-title">hotel govendor</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team3.jpg" class="author-img" alt="author-img" />
                                            </a>
                                            <ul class="listing-list">
                                                <li><span class="la la-phone"></span> (416) 551-0589</li>
                                                <li><span class="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div class="rating-row">
                                            <div class="rating-rating">
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star-half-full"></span>
                                                <span class="la la-star last-star"></span>
                                                <span class="rating-count">4.7</span>
                                            </div>
                                            <div class="listing-info">
                                                <ul>
                                                    <li><span class="la la-eye info__count"></span> 247</li>
                                                    <li><span class="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div class="most-visited-item col-md-6">
                                    <a href="listing-details.html">
                                        <div class="listing-img-box">
                                            <img src="images/img4.jpg" class="list-img" alt="" />
                                            <span class="list-name badge">now open</span>
                                            <span class="like-icon" data-toggle="tooltip" data-placement="bottom"
                                                title="22 Likes">
                                                <i class="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-music"></span> event</h5>
                                                <h4 class="listing-title">sticky band party</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team1.jpg" class="author-img" alt="author-img" />
                                            </a>
                                            <ul class="listing-list">
                                                <li><span class="la la-phone"></span> (416) 551-0589</li>
                                                <li><span class="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div class="rating-row">
                                            <div class="rating-rating">
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star-half-full"></span>
                                                <span class="la la-star last-star"></span>
                                                <span class="rating-count">4.5</span>
                                            </div>
                                            <div class="listing-info">
                                                <ul>
                                                    <li><span class="la la-eye info__count"></span> 247</li>
                                                    <li><span class="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div class="most-visited-item col-md-6">
                                    <a href="listing-details.html">
                                        <div class="listing-img-box">
                                            <img src="images/img5.jpg" class="list-img" alt="" />
                                            <span class="list-name badge badge-closed">closed</span>
                                            <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i class="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-shopping-cart"></span> shop</h5>
                                                <h4 class="listing-title">Sena Clothing Shopping Mall</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team2.jpg" class="author-img" alt="author-img" />
                                            </a>
                                            <ul class="listing-list">
                                                <li><span class="la la-phone"></span> (416) 551-0589</li>
                                                <li><span class="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div class="rating-row">
                                            <div class="rating-rating">
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star-half-full"></span>
                                                <span class="la la-star last-star"></span>
                                                <span class="rating-count">4.6</span>
                                            </div>
                                            <div class="listing-info">
                                                <ul>
                                                    <li><span class="la la-eye info__count"></span> 247</li>
                                                    <li><span class="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                                <div class="most-visited-item col-md-6">
                                    <a href="listing-details.html">
                                        <div class="listing-img-box">
                                            <img src="images/img3.jpg" class="list-img" alt="" />
                                            <span class="list-name badge">now open</span>
                                            <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i class="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-hotel"></span> hotel</h5>
                                                <h4 class="listing-title">hotel govendor</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team3.jpg" class="author-img" alt="author-img" />
                                            </a>
                                            <ul class="listing-list">
                                                <li><span class="la la-phone"></span> (416) 551-0589</li>
                                                <li><span class="la la-link"></span>
                                                    <a href="#"> www.mysitelink.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o"></span>
                                                    Posted 1 month ago
                                    </li>
                                            </ul>
                                        </div>
                                        <div class="rating-row">
                                            <div class="rating-rating">
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star-half-full"></span>
                                                <span class="la la-star last-star"></span>
                                                <span class="rating-count">4.7</span>
                                            </div>
                                            <div class="listing-info">
                                                <ul>
                                                    <li><span class="la la-eye info__count"></span> 247</li>
                                                    <li><span class="la la-heart-o info__save" data-toggle="tooltip" data-placement="top" title="Bookmark"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>{/* end listing-content */}
                                </div>{/* end most-visited-item */}
                            </div>{/* end most-visited-wrap */}
                            <div class="button-shared text-center">
                                <a href="#" class="theme__btn"><span class="la la-refresh"></span> load more listings</a>
                            </div>{/* end button-shared */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end user-profile-area */}
            {/* ================================    END USER-PROFILE AREA ================================= */}

        </div>
    );
}

export default UserProfile;