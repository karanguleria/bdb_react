import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function TopPlace() {
    return (
        <div className="TopPlace">
            <Header/>
            <Breadcrum/>
            {/* ================================    START CAT AREA ================================= */}
            <section className="cat-area destination-area top-places-area">
                <div className="container">
                    <div className="row cat-info-wrap">
                        <div className="col-md-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <img src="images/flag21.png" alt="canada" />
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">Canada</h4>
                                                <span className="badge">12 listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-6 */}
                        <div className="col-md-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <img src="images/flag1.jpg" alt="united sates" />
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">united sates</h4>
                                                <span className="badge">22 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-6 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <img src="images/flag1.jpg" alt="united kingdom" />
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">united kingdom</h4>
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
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <img src="images/flag22.png" alt="mexico" />
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">mexico</h4>
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
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <img src="images/flag1.jpg" alt="costa rica" />
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">costa rica</h4>
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
                                    <img src="images/img1.jpg" alt="category-image" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <img src="images/flag1.jpg" alt="australia" />
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">australia</h4>
                                                <span className="badge">50 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="button-shared text-center">
                                <a href="#" className="theme__btn"><span className="la la-refresh"></span> load more</a>
                            </div>{/* end button-shared */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end cat-area */}
            {/* ================================    END CAT AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default TopPlace;