import React from 'react';

function Home() {
    return (
        <div className="Home">
            <section className="hero-wrapper" id="home">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-heading">
                                <h2 className="hero__title cd-headline zoom">
                                    What are you interested in
                        <span className="cd-words-wrapper">
                                        <b className="is-visible">Hotels</b>
                                        <b>Restaurants</b>
                                        <b>Shops</b>
                                        <b>Salons</b>
                                        <b>Apartments</b>
                                        <b>Travels</b>
                                        <b>Business</b>
                                        <b>Fitness</b>
                                    </span>
                                </h2>
                                <h4 className="hero__meta">
                                    Discover the best places to stay, eat, shop & visit the city nearest to you.
                    </h4>
                            </div>
                            <div className="main-search-input">
                                <div className="main-search-input-item">
                                    <input className="form-control" type="text" placeholder="What are you looking for?" />
                                </div>
                                <div className="main-search-input-item location">
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
                                </div>
                                <div className="main-search-input-item category">
                                    <select>
                                        <option data-display="All Category">All Category</option>
                                        <option value="1">Shops</option>
                                        <option value="2">Hotels</option>
                                        <option value="3">Foods & Restaurants</option>
                                        <option value="4">Fitness</option>
                                        <option value="5">Travel</option>
                                        <option value="6">Salons</option>
                                        <option value="7">Event</option>
                                        <option value="8">Business</option>
                                    </select>
                                </div>
                                <div className="main-search-input-btn">
                                    <button className="button theme__btn" type="submit">Search</button>
                                </div>
                            </div>
                            <div className="highlighted-categories">
                                <h4 className="highlighted__or">Or</h4>
                                <h5 className="highlighted__title">browse featured categories:</h5>
                                <ul className="highlighted-list-item">
                                    <li>
                                        <a href="#">
                                            <span className="highlight-icon hli-one"><i className="la la-building-o"></i></span>
                                            apartments
                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="highlight-icon hli-one"><i className="la la-cutlery"></i></span>
                                            Restaurants
                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="highlight-icon hli-two"><i className="la la-plane"></i></span>
                                            travel
                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="highlight-icon hli-three"><i className="la la-music"></i></span>
                                            Events
                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="highlight-icon hli-three"><i className="la la-gear"></i></span>
                                            fitness
                            </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="highlight-icon hli-four"><i className="la la-hotel"></i></span>
                                            Hotels
                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cat-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Most Popular Categories</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia
                                    tortors.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row cat-info-wrap">
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-cutlery"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">Restaurants</h4>
                                                <span className="badge">12 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img2.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-plane"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">travels</h4>
                                                <span className="badge">22 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img3.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-hotel"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">hotels</h4>
                                                <span className="badge">32 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img4.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-music"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">events</h4>
                                                <span className="badge">44 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img5.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-shopping-cart"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">shops</h4>
                                                <span className="badge">48 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img6.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-gear"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">fitness</h4>
                                                <span className="badge">50 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img7.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-glass"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">food & drink</h4>
                                                <span className="badge">14 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img8.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-paint-brush"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">art & design</h4>
                                                <span className="badge">20 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hiw-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading">
                                <h2 className="sec__title">Plan The Vacation of Your Dreams</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia
                                    tortors.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row hiw-info-wrap">
                        <div className="col-md-4 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-map-o"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Find Interesting Place</h4>
                                    <p className="hiw__desc">
                                        Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                        luctus, finibus tellus ut, convallis eros.
                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-envelope-o"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Contact a Few authors</h4>
                                    <p className="hiw__desc">
                                        Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                        luctus, finibus tellus ut, convallis eros.
                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-user"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Make a Reservation</h4>
                                    <p className="hiw__desc">
                                        Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                        luctus, finibus tellus ut, convallis eros.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="hiw-video-btn">
                                <img src="images/video-img.jpg" alt="video-img" />
                                <div className="video-text">
                                    <a className="mfp-iframe video-play-btn" href="https://www.youtube.com/watch?v=DQMeTCtsLcU" title="Play Video">
                                        <span className="la la-play"></span>
                                    </a>
                                    <p className="video__desc">watch how it works</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="most-visited-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading">
                                <h2 className="sec__title">Most Visited Places</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia tortors.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="most-visited-wrap">
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img1.jpg" className="list-img" alt="" />
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
                                                <h4 className="listing-title">Favorite Place Food Bank
                                        <i className="fa fa-check-circle" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
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
                                    </div>
                                </div>
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img2.jpg" className="list-img" alt="" />
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
                                    </div>
                                </div>
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img3.jpg" className="list-img" alt="" />
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
                                    </div>
                                </div>
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img4.jpg" className="list-img" alt="" />
                                            <span className="list-name badge">now open</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom"
                                                title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-music"></span> event</h5>
                                                <h4 className="listing-title">sticky band party</h4>
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
                                    </div>
                                </div>
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img5.jpg" className="list-img" alt="" />
                                            <span className="list-name badge badge-closed">closed</span>
                                            <span className="like-icon" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                                <i className="la la-heart-o"></i>
                                            </span>
                                        </div>
                                    </a>
                                    <div className="listing-content">
                                        <div className="listing-row-content">
                                            <a href="listing-details.html">
                                                <h5 className="listing-meta"><span className="la la-shopping-cart"></span> shop</h5>
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
                                    </div>
                                </div>
                                <div className="most-visited-item">
                                    <a href="listing-details.html">
                                        <div className="listing-img-box">
                                            <img src="images/img3.jpg" className="list-img" alt="" />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="funfact-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading">
                                    <h2 className="sec__title sec__title2">Numbers Say Everything</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia tortors.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row fun-fact-wrap">
                        <div className="col-md-3 col-sm-6">
                            <div className="fun-item">
                                <div className="fun-number fun-bg1">
                                    <span className="counter">1150</span>
                                    <span className="count-symbol">+</span>
                                </div>
                                <div className="fun-content">
                                    <p className="counter__title">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="fun-item">
                                <div className="fun-number fun-bg2">
                                    <span className="counter">3040</span>
                                    <span className="count-symbol">+</span>
                                </div>
                                <div className="fun-content">
                                    <p className="counter__title">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="fun-item">
                                <div className="fun-number fun-bg3">
                                    <span className="counter">2020</span>
                                    <span className="count-symbol">+</span>
                                </div>
                                <div className="fun-content">
                                    <p className="counter__title">Cup of Coffee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="fun-item">
                                <div className="fun-number fun-bg4">
                                    <span className="counter">350</span>
                                    <span className="count-symbol">+</span>
                                </div>
                                <div className="fun-content">
                                    <p className="counter__title">Awards Winning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hiw-area hiw-area2 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading">
                                <h2 className="sec__title">What We Offer</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia
                                    tortors.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row hiw-info-wrap">
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-map"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Greatest Places</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-cutlery"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Greatest Restaurants</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-hotel"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Greatest Hotels</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item more-content">
                                <div className="hiw-icon">
                                    <span className="la la-ellipsis-h"></span>
                                </div>
                                <div className="hiw-content">
                                    <h4 className="hiw__title">And More...</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-area">
                <img src="images/symble1.png" alt="" className="symble-img" />
                <img src="images/symble2.png" alt="" className="symble-img" />
                <img src="images/symble3.png" alt="" className="symble-img" />
                <img src="images/symble4.png" alt="" className="symble-img" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="section-heading">
                                <h2 className="sec__title">Sign up for 30 days trial!</h2>
                                <p className="sec__meta">
                                    No payment required, jump to get started. Nunc ut lacinia tortors.
                    </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-offset-1">
                            <div className="cta-button-box">
                                <a href="sign-up.html" className="theme__btn">register now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-area text-center">
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team2.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team3.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team4.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team5.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team6.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team7.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading">
                                    <h2 className="sec__title">What Our Users Said</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia tortors.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="client-testimonial">
                                <div className="testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src="images/team1.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 className="tesi__title">Richard Doe</h4>
                                    <span className="testi__meta">united states</span>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src="images/team2.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 className="tesi__title">Denwen Evil</h4>
                                    <span className="testi__meta">united kingdom</span>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src="images/team3.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 className="tesi__title">Collis Pong</h4>
                                    <span className="testi__meta">melbourne, australia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Latest Tips & Articles</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia tortors.
                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row blog-post-wrapper">
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img4.jpg" alt="blog image" className="blog__img" />
                                    </a>
                                </div>
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        50 Greatest Event Places in London
                        </a>
                                    <ul className="post__meta">
                                        <li>25 Dec, 2018 - <a href="#" className="tag__text">Tips & Tricks</a></li>
                                        <li><a href="#">340 Likes</a></li>
                                    </ul>
                                    <p className="blog__desc">
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem eaque ipsa quae ab illo inventore
                                        incididunt ut labore et dolore magna
                        </p>
                                    <ul className="post__bottom">
                                        <li>
                                            <img src="images/team1.jpg" alt="" />
                                            <span className="by__text">By</span>
                                            <span>David Wise</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img5.jpg" alt="blog image" className="blog__img" />
                                    </a>
                                </div>
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        Top 10 Best Clothing Shops in Sydney
                        </a>
                                    <ul className="post__meta">
                                        <li>26 Dec, 2018 - <a href="#" className="tag__text">Tips & News</a></li>
                                        <li><a href="#">620 Likes</a></li>
                                    </ul>
                                    <p className="blog__desc">
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem eaque ipsa quae ab illo inventore
                                        incididunt ut labore et dolore magna
                        </p>
                                    <ul className="post__bottom">
                                        <li>
                                            <img src="images/team2.jpg" alt="" />
                                            <span className="by__text">By</span>
                                            <span>Mark Wins</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img6.jpg" alt="blog image" className="blog__img" />
                                    </a>
                                </div>
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        Top 15 Greatest Ideas for Health & Body
                        </a>
                                    <ul className="post__meta">
                                        <li>27 Dec, 2018 - <a href="#" className="tag__text">Tips & Tricks</a></li>
                                        <li><a href="#">800 Likes</a></li>
                                    </ul>
                                    <p className="blog__desc">
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem eaque ipsa quae ab illo inventore
                                        incididunt ut labore et dolore magna
                        </p>
                                    <ul className="post__bottom">
                                        <li>
                                            <img src="images/team3.jpg" alt="" />
                                            <span className="by__text">By</span>
                                            <span>Matt Derry</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clientlogo-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="client-logo">
                                <div className="client-logo-item">
                                    <img src="images/client-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="images/client-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="images/client-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="images/client-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="images/client-logo.png" alt="brand image" />
                                </div>
                                <div className="client-logo-item">
                                    <img src="images/client-logo.png" alt="brand image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
