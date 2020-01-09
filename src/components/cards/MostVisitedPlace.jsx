import React from 'react';

function MostVisitedPlace(props) {
    return (
        <div className={`MostVisitedPlace most-visited-item ${props.class}`}>
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
    );
}
export default MostVisitedPlace;
