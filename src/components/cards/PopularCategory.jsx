import React from 'react';

function PopularCategory() {
    return (
        <div className="PopularCategory col-md-3 col-sm-6">
            <div className="cat-item">
                <figure className="category-fig">
                    <img src="images/img1.jpg" alt="category" className="cat-img" />
                    <figcaption className="fig-caption">
                        <a href="/#" className="cat-fig-box">
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
    );
}
export default PopularCategory;
