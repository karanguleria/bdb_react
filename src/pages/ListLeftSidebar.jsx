import React from 'react';

function ListLeftSidebar() {
    return (
        <div class="ListLeftSidebar">
            {/* ================================     START MOST-VISITED AREA ================================= */}
            <section class="most-visited-area most-visited-area2 most-visited-area5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="sidebar sidebar-2">
                                <div class="sidebar-widget">
                                    <div class="main-search-input-item form-group">
                                        <input class="form-control" type="text" placeholder="What are you looking for?" />
                                    </div>{/* end main-search-input-item */}
                                    <div class="main-search-input-item location form-group">
                                        <select>
                                            <option data-display="Select a location">Select a location</option>
                                            <option value="1">Australia</option>
                                            <option value="2">AB Canada</option>
                                            <option value="3">Amsterdam Natherlands</option>
                                            <option value="4">Austin TX, USA</option>
                                            <option value="5">Bengaluru Karnataka, India</option>
                                            <option value="6">Berlin, Germany</option>
                                            <option value="7">Barcelona, Spain</option>
                                            <option value="8">USA</option>
                                            <option value="9">UK</option>
                                            <option value="10">United Arab Emirates</option>
                                            <option value="11">Japan</option>
                                            <option value="12">China</option>
                                            <option value="13">Belgium</option>
                                            <option value="14">France</option>
                                            <option value="15">Austria</option>
                                            <option value="16">Russia</option>
                                            <option value="17">Sweden</option>
                                            <option value="18">Norway</option>
                                            <option value="19">Denmark</option>
                                            <option value="20">Bangladesh</option>
                                        </select>
                                    </div>{/* end main-search-input-item */}
                                    <div class="main-search-input-item category">
                                        <select>
                                            <option data-display="Select a category">Select a category</option>
                                            <option value="1">All Category</option>
                                            <option value="2">Shops</option>
                                            <option value="3">Hotels</option>
                                            <option value="4">Foods & Restaurants</option>
                                            <option value="5">Fitness</option>
                                            <option value="6">Travel</option>
                                            <option value="7">Salons</option>
                                            <option value="8">Event</option>
                                            <option value="9">Business</option>
                                            <option value="10">Jobs</option>
                                        </select>
                                    </div>{/* end main-search-input-item */}
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <h3 class="widget__title">Filter by Category</h3>
                                    <div class="listing-check-list-item listing-check-box">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb1" />
                                            <label for="chb1">Travel <span>11</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb2" />
                                            <label for="chb2">arts <span>22</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb3" />
                                            <label for="chb3">technology <span>9</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb4" />
                                            <label for="chb4">fashion <span>11</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb5" />
                                            <label for="chb5">technology <span>12</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb6" />
                                            <label for="chb6">lifestyle <span>48</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb7" />
                                            <label for="chb7">design <span>23</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb8" />
                                            <label for="chb8">Computer <span>28</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb9" />
                                            <label for="chb9">Jobs <span>33</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb10" />
                                            <label for="chb10">Real Estates <span>38</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb11" />
                                            <label for="chb11">Clothing <span>44</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb12" />
                                            <label for="chb12">Beauty & spa <span>33</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb13" />
                                            <label for="chb13">Event <span>28</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb14" />
                                            <label for="chb14">Health & Fitness <span>22</span></label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb15" />
                                            <label for="chb15">Restaurants <span>38</span></label>
                                        </div>{/* end custom-checkbox */}
                                    </div>
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <h3 class="widget__title">Filter by Price</h3>
                                    <div id="slider-range"></div>{/* end slider-range */}
                                    <div class="price-slider-amount">
                                        <label for="amount" class="filter__label">Price:</label>
                                        <input type="text" id="amount" class="amounts" readonly />
                                    </div>{/* end price-slider-amount */}
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget tag-widget">
                                    <h3 class="widget__title">Filter by Tags</h3>
                                    <ul class="widget__list tag__list">
                                        <li><a href="#">technology</a></li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">art</a></li>
                                        <li><a href="#">design</a></li>
                                        <li><a href="#">development</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">marketing</a></li>
                                        <li><a href="#">video</a></li>
                                        <li><a href="#">lifestyle</a></li>
                                        <li><a href="#">adventure</a></li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <h3 class="widget__title">filter by features</h3>
                                    <div class="listing-check-list-item listing-check-box">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb16" />
                                            <label for="chb16">Elevator in building</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb17" />
                                            <label for="chb17">Friendly workspace</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb18" />
                                            <label for="chb18">Instant Book</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb19" />
                                            <label for="chb19">Wireless Internet</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb20" />
                                            <label for="chb20">Free parking on premises</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb21" />
                                            <label for="chb21">Free parking on street</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb22" />
                                            <label for="chb22">Smoking allowed</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb24" />
                                            <label for="chb24">Events</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb25" />
                                            <label for="chb25">Wheelchair accessible</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb26" />
                                            <label for="chb26"> Alarm system</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb27" />
                                            <label for="chb27">Electricity</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb28" />
                                            <label for="chb28">Attached garage</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb29" />
                                            <label for="chb29">Security cameras</label>
                                        </div>{/* end custom-checkbox */}
                                    </div>
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <h3 class="widget__title">Condition</h3>
                                    <div class="listing-check-box">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb30" />
                                            <label for="chb30">New</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb31" />
                                            <label for="chb31">old</label>
                                        </div>{/* end custom-checkbox */}
                                    </div>
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <h3 class="widget__title">Filter by Ratings</h3>
                                    <ul class="rating__list">
                                        <li>
                                            <span class="la la-star"></span><span class="la la-star"></span><span class="la la-star"></span><span class="la la-star"></span><span class="la la-star"></span>
                                            <label class="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span class="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span class="la la-star"></span> <span class="la la-star"></span><span class="la la-star"></span><span class="la la-star"></span>
                                            <label class="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span class="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span class="la la-star"></span><span class="la la-star"></span><span class="la la-star"></span>
                                            <label class="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span class="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span class="la la-star"></span><span class="la la-star"></span>
                                            <label class="review-label">
                                                <input type="radio" name="review-radio" />
                                                <span class="review-mark"></span>
                                            </label>
                                        </li>
                                        <li>
                                            <span class="la la-star"></span>
                                            <label class="review-label">
                                                <input type="radio" checked="checked" name="review-radio" />
                                                <span class="review-mark"></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <h3 class="widget__title">Posted by</h3>
                                    <div class="listing-check-box">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb32" />
                                            <label for="chb32">dealer</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb33" />
                                            <label for="chb33">individual</label>
                                        </div>{/* end custom-checkbox */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="chb34" />
                                            <label for="chb34">reseller</label>
                                        </div>{/* end custom-checkbox */}
                                    </div>{/* end listing-check-box */}
                                </div>{/* end sidebar-widget */}
                                <div class="sidebar-widget">
                                    <div class="apply-btn">
                                        <a href="#" class="theme__btn">apply filter <span class="la la-angle-double-right"></span></a>
                                    </div>
                                </div>{/* end sidebar-widget */}
                            </div>{/* end sidebar */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-8">
                            <div class="generic-header generic-header2">
                                <p class="showing__text">Showing 1 to 7 of 30 entries</p>
                                <div class="contact-form-action">
                                    {/*Contact Form*/}
                                    <form method="post">
                                        <div class="row">
                                            <div class="form-group">
                                                <div class="add-cat-wrap">
                                                    <select>
                                                        <option data-display="Short by default">Short by default</option>
                                                        <option value="1">High Rated</option>
                                                        <option value="2">Most Reviewed</option>
                                                        <option value="3">Popular Listing</option>
                                                        <option value="4">Newest Listing</option>
                                                        <option value="5">Older Listing</option>
                                                        <option value="6">Price: low to high</option>
                                                        <option value="7">Price: high to low</option>
                                                        <option value="8">Random listing</option>
                                                    </select>
                                                </div>{/* end add-cat-wrap */}
                                            </div>{/* end col-md-12 */}
                                        </div>{/* end row */}
                                    </form>
                                </div>{/* end contact-form-action */}
                                <ul class="generic-nav">
                                    <li><a href="listing-list.html" class="active"><span class="la la-list"></span></a></li>
                                    <li><a href="listing-grid.html" data-toggle="tooltip" data-placement="top" title="Grid View"><span class="la la-th-large"></span></a></li>
                                </ul>
                            </div>{/* end generic-header */}
                            <div class="most-visited-wrap2">
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img1.jpg" class="list-img" alt="" />
                                                <span class="list-name badge">now open</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-cutlery"></span> Restaurant</h5>
                                                <h4 class="listing-title">
                                                    Favorite Place Food Bank <i class="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
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
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img2.jpg" class="list-img" alt="" />
                                                <span class="list-name badge badge-closed">closed</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
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
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img3.jpg" class="list-img" alt="" />
                                                <span class="list-name badge">now open</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-hotel"></span> hotel</h5>
                                                <h4 class="listing-title">
                                                    Hotel Pennsylvania <i class="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
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
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img4.jpg" class="list-img" alt="" />
                                                <span class="list-name badge">now open</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-music"></span> event</h5>
                                                <h4 class="listing-title">sticky band party</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team4.jpg" class="author-img" alt="author-img" />
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
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img5.jpg" class="list-img" alt="" />
                                                <span class="list-name badge">now open</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-shopping-cart"></span> shop</h5>
                                                <h4 class="listing-title">
                                                    Sena Clothing Shopping Mall <i class="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team5.jpg" class="author-img" alt="author-img" />
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
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img6.jpg" class="list-img" alt="" />
                                                <span class="list-name badge badge-closed">closed</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-magic"></span> Gym & Fitness</h5>
                                                <h4 class="listing-title">17 Must-Try Fitness Workouts</h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team7.jpg" class="author-img" alt="author-img" />
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
                                <div class="most-visited-item">
                                    <div class="listing-list-img">
                                        <a href="listing-details.html">
                                            <div class="listing-img-box">
                                                <img src="images/img8.jpg" class="list-img" alt="" />
                                                <span class="list-name badge badge">now open</span>
                                                <span class="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                    <i class="la la-heart-o"></i>
                                                </span>
                                            </div>
                                        </a>
                                    </div>{/* end listing-list-img */}
                                    <div class="listing-content">
                                        <div class="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 class="listing-meta"><span class="la la-paint-brush"></span> Art & Design</h5>
                                                <h4 class="listing-title">
                                                    No-Stress Approach to Painting <i class="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                                </h4>
                                                <p class="listing-location">Bishop Avenue, New York</p>
                                            </a>
                                            <a href="#" class="author-img-box">
                                                <img src="images/team8.jpg" class="author-img" alt="author-img" />
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
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="button-shared text-center">
                                <a href="#" class="theme__btn"><span class="la la-refresh"></span> load more</a>
                            </div>{/* end button-shared */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end most-visited-area */}
            {/* ================================    END MOST-VISITED AREA ================================= */}

        </div>
    );
}

export default ListLeftSidebar;