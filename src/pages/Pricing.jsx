import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function Pricing() {
    return (
        <div className="Pricing">
            <Header/>
            <Breadcrum/>
            {/* ================================     START PRICING AREA ================================= */}
            <section className="pricing-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="price-item">
                                <div className="price-head">
                                    <i className="fa fa-paper-plane price__icon"></i>
                                    <h3 className="price__title">Basic Plan</h3>
                                </div>{/* end price-head */}
                                <div className="price-content">
                                    <div className="price-number">
                                        <p className="price__value">
                                            <sup>$</sup>49
                            </p>
                                        <p className="price__subtitle">Per  Month</p>
                                    </div>{/* end price-number */}
                                    <div className="price-listitem">
                                        <ul>
                                            <li><span className="la la-check"></span> One Listing</li>
                                            <li><span className="la la-check"></span> 90 Days Availability</li>
                                            <li><span className="la la-check"></span> Non-Featured</li>
                                            <li><span className="la la-check"></span> Limited Support</li>
                                            <li><span className="la la-close"></span> Average Price Range</li>
                                            <li><span className="la la-close"></span> Business Hours</li>
                                            <li><span className="la la-close"></span> Lifetime Availability</li>
                                            <li><span className="la la-close"></span> Featured In Search Results</li>
                                        </ul>
                                        <a href="#" className="theme__btn">continue</a>
                                    </div>{/* end price-listitem */}
                                </div>{/* end price-content */}
                            </div>{/* end price-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4">
                            <div className="price-item active-price-item">
                                <div className="price-head">
                                    <i className="fa fa-plane price__icon"></i>
                                    <h3 className="price__title">Advanced Plan</h3>
                                </div>{/* end price-head */}
                                <div className="price-content">
                                    <div className="price-number">
                                        <p className="price__value">
                                            <sup>$</sup>99
                            </p>
                                        <p className="price__subtitle">Per  Month</p>
                                    </div>{/* end price-number */}
                                    <div className="price-listitem">
                                        <ul>
                                            <li><span className="la la-check"></span> One Listing</li>
                                            <li><span className="la la-check"></span> 90 Days Availability</li>
                                            <li><span className="la la-check"></span> Non-Featured</li>
                                            <li><span className="la la-check"></span> Limited Support</li>
                                            <li><span className="la la-check"></span> Average Price Range</li>
                                            <li><span className="la la-check"></span> Business Hours</li>
                                            <li><span className="la la-close"></span> Lifetime Availability</li>
                                            <li><span className="la la-close"></span> Featured In Search Results</li>
                                        </ul>
                                        <a href="#" className="theme__btn">continue</a>
                                    </div>{/* end price-listitem */}
                                </div>{/* end price-content */}
                                <div className="recommended-wrap">
                                    <i className="la la-check"></i>
                                    <span>Recommended</span>
                                </div>{/* end recommended-wrap */}
                            </div>{/* end price-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4">
                            <div className="price-item">
                                <div className="price-head">
                                    <i className="fa fa-rocket price__icon"></i>
                                    <h3 className="price__title">Enterprise Plan</h3>
                                </div>{/* end price-head */}
                                <div className="price-content">
                                    <div className="price-number">
                                        <p className="price__value">
                                            <sup>$</sup>149
                            </p>
                                        <p className="price__subtitle">Per  Month</p>
                                    </div>{/* end price-number */}
                                    <div className="price-listitem">
                                        <ul>
                                            <li><span className="la la-check"></span> One Listing</li>
                                            <li><span className="la la-check"></span> 90 Days Availability</li>
                                            <li><span className="la la-check"></span> Non-Featured</li>
                                            <li><span className="la la-check"></span> Limited Support</li>
                                            <li><span className="la la-check"></span> Average Price Range</li>
                                            <li><span className="la la-check"></span> Business Hours</li>
                                            <li><span className="la la-check"></span> Lifetime Availability</li>
                                            <li><span className="la la-check"></span> Featured In Search Results</li>
                                        </ul>
                                        <a href="#" className="theme__btn">continue</a>
                                    </div>{/* end price-listitem */}
                                </div>{/* end price-content */}
                            </div>{/* end price-item */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end pricing-area */}
            {/* ================================    END PRICING AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default Pricing;