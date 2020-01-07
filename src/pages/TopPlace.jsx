import React from 'react';

function TopPlace() {
    return (
        <div class="TopPlace">
            {/* ================================    START CAT AREA ================================= */}
            <section class="cat-area destination-area top-places-area">
                <div class="container">
                    <div class="row cat-info-wrap">
                        <div class="col-md-6">
                            <div class="cat-item">
                                <figure class="category-fig">
                                    <img src="images/img23.jpg" alt="category-image" class="cat-img" />
                                    <figcaption class="fig-caption">
                                        <a href="#" class="cat-fig-box">
                                            <div class="cat__icon">
                                                <img src="images/flag21.png" alt="canada" />
                                            </div>
                                            <div class="cat__content">
                                                <h4 class="cat__name-title">Canada</h4>
                                                <span class="badge">12 listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-6 */}
                        <div class="col-md-6">
                            <div class="cat-item">
                                <figure class="category-fig">
                                    <img src="images/img24.jpg" alt="category-image" class="cat-img" />
                                    <figcaption class="fig-caption">
                                        <a href="#" class="cat-fig-box">
                                            <div class="cat__icon">
                                                <img src="images/flag1.jpg" alt="united sates" />
                                            </div>
                                            <div class="cat__content">
                                                <h4 class="cat__name-title">united sates</h4>
                                                <span class="badge">22 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-6 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="cat-item">
                                <figure class="category-fig">
                                    <img src="images/img25.jpg" alt="category-image" class="cat-img" />
                                    <figcaption class="fig-caption">
                                        <a href="#" class="cat-fig-box">
                                            <div class="cat__icon">
                                                <img src="images/flag2.jpg" alt="united kingdom" />
                                            </div>
                                            <div class="cat__content">
                                                <h4 class="cat__name-title">united kingdom</h4>
                                                <span class="badge">32 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="cat-item">
                                <figure class="category-fig">
                                    <img src="images/img26.jpg" alt="category-image" class="cat-img" />
                                    <figcaption class="fig-caption">
                                        <a href="#" class="cat-fig-box">
                                            <div class="cat__icon">
                                                <img src="images/flag22.png" alt="mexico" />
                                            </div>
                                            <div class="cat__content">
                                                <h4 class="cat__name-title">mexico</h4>
                                                <span class="badge">44 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="cat-item">
                                <figure class="category-fig">
                                    <img src="images/img27.jpg" alt="category-image" class="cat-img" />
                                    <figcaption class="fig-caption">
                                        <a href="#" class="cat-fig-box">
                                            <div class="cat__icon">
                                                <img src="images/flag18.jpg" alt="costa rica" />
                                            </div>
                                            <div class="cat__content">
                                                <h4 class="cat__name-title">costa rica</h4>
                                                <span class="badge">48 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="cat-item">
                                <figure class="category-fig">
                                    <img src="images/img23.jpg" alt="category-image" class="cat-img" />
                                    <figcaption class="fig-caption">
                                        <a href="#" class="cat-fig-box">
                                            <div class="cat__icon">
                                                <img src="images/flag3.jpg" alt="australia" />
                                            </div>
                                            <div class="cat__content">
                                                <h4 class="cat__name-title">australia</h4>
                                                <span class="badge">50 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>{/* end cat-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="button-shared text-center">
                                <a href="#" class="theme__btn"><span class="la la-refresh"></span> load more</a>
                            </div>{/* end button-shared */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end cat-area */}
            {/* ================================    END CAT AREA ================================= */}
        </div>
    );
}

export default TopPlace;