import React from 'react';

function Category() {
    return (
        <div className="Category">
            <section className="breadcrumb-area">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">all categories</h2>
                                    <ul className="breadcrumb__list">
                                        <li className="active__list-item"><a href="index.html">home</a></li>
                                        <li className="active__list-item">categories</li>
                                        <li>all categories</li>
                                    </ul>
                                </div>{/* end breadcrumb-content */}
                            </div>{/* end col-md-12 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end breadcrumb-wrap */}
                <div className="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                </div>{/* end bread-svg */}
            </section>{/* end breadcrumb-area */}
            <section className="cat-area cat-area2 all-cat-area">
                <div className="container">
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img6.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-magic"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">fitness</h4>
                                                <span className="badge">50 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
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
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img9.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-leaf"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">outdoors</h4>
                                                <span className="badge">48 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img10.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-glass"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">nightlife</h4>
                                                <span className="badge">40 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img11.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-hospital-o"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">hospitals</h4>
                                                <span className="badge">58 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img12.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-tree"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">adventure</h4>
                                                <span className="badge">20 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img13.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-book"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">educations</h4>
                                                <span className="badge">32 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img14.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-car"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">cars</h4>
                                                <span className="badge">42 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img15.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-briefcase"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">jobs</h4>
                                                <span className="badge">52 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img16.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className="la la-money"></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">business</h4>
                                                <span className="badge">78 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>
        </div>
    );
}
export default Category;