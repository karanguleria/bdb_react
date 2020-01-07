import React from 'react';

function Pricing() {
    return (
        <div class="Pricing">
            {/* ================================     START PRICING AREA ================================= */}
            <section class="pricing-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="price-item">
                                <div class="price-head">
                                    <i class="fa fa-paper-plane price__icon"></i>
                                    <h3 class="price__title">Basic Plan</h3>
                                </div>{/* end price-head */}
                                <div class="price-content">
                                    <div class="price-number">
                                        <p class="price__value">
                                            <sup>$</sup>49
                            </p>
                                        <p class="price__subtitle">Per  Month</p>
                                    </div>{/* end price-number */}
                                    <div class="price-listitem">
                                        <ul>
                                            <li><span class="la la-check"></span> One Listing</li>
                                            <li><span class="la la-check"></span> 90 Days Availability</li>
                                            <li><span class="la la-check"></span> Non-Featured</li>
                                            <li><span class="la la-check"></span> Limited Support</li>
                                            <li><span class="la la-close"></span> Average Price Range</li>
                                            <li><span class="la la-close"></span> Business Hours</li>
                                            <li><span class="la la-close"></span> Lifetime Availability</li>
                                            <li><span class="la la-close"></span> Featured In Search Results</li>
                                        </ul>
                                        <a href="#" class="theme__btn">continue</a>
                                    </div>{/* end price-listitem */}
                                </div>{/* end price-content */}
                            </div>{/* end price-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-4">
                            <div class="price-item active-price-item">
                                <div class="price-head">
                                    <i class="fa fa-plane price__icon"></i>
                                    <h3 class="price__title">Advanced Plan</h3>
                                </div>{/* end price-head */}
                                <div class="price-content">
                                    <div class="price-number">
                                        <p class="price__value">
                                            <sup>$</sup>99
                            </p>
                                        <p class="price__subtitle">Per  Month</p>
                                    </div>{/* end price-number */}
                                    <div class="price-listitem">
                                        <ul>
                                            <li><span class="la la-check"></span> One Listing</li>
                                            <li><span class="la la-check"></span> 90 Days Availability</li>
                                            <li><span class="la la-check"></span> Non-Featured</li>
                                            <li><span class="la la-check"></span> Limited Support</li>
                                            <li><span class="la la-check"></span> Average Price Range</li>
                                            <li><span class="la la-check"></span> Business Hours</li>
                                            <li><span class="la la-close"></span> Lifetime Availability</li>
                                            <li><span class="la la-close"></span> Featured In Search Results</li>
                                        </ul>
                                        <a href="#" class="theme__btn">continue</a>
                                    </div>{/* end price-listitem */}
                                </div>{/* end price-content */}
                                <div class="recommended-wrap">
                                    <i class="la la-check"></i>
                                    <span>Recommended</span>
                                </div>{/* end recommended-wrap */}
                            </div>{/* end price-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-4">
                            <div class="price-item">
                                <div class="price-head">
                                    <i class="fa fa-rocket price__icon"></i>
                                    <h3 class="price__title">Enterprise Plan</h3>
                                </div>{/* end price-head */}
                                <div class="price-content">
                                    <div class="price-number">
                                        <p class="price__value">
                                            <sup>$</sup>149
                            </p>
                                        <p class="price__subtitle">Per  Month</p>
                                    </div>{/* end price-number */}
                                    <div class="price-listitem">
                                        <ul>
                                            <li><span class="la la-check"></span> One Listing</li>
                                            <li><span class="la la-check"></span> 90 Days Availability</li>
                                            <li><span class="la la-check"></span> Non-Featured</li>
                                            <li><span class="la la-check"></span> Limited Support</li>
                                            <li><span class="la la-check"></span> Average Price Range</li>
                                            <li><span class="la la-check"></span> Business Hours</li>
                                            <li><span class="la la-check"></span> Lifetime Availability</li>
                                            <li><span class="la la-check"></span> Featured In Search Results</li>
                                        </ul>
                                        <a href="#" class="theme__btn">continue</a>
                                    </div>{/* end price-listitem */}
                                </div>{/* end price-content */}
                            </div>{/* end price-item */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end pricing-area */}
            {/* ================================    END PRICING AREA ================================= */}
        </div>
    );
}

export default Pricing;