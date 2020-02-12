import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function BlogGrid() {
    return (
        <div className="BlogGrid">
            <Header/>
            <Breadcrum title="blog grid"/>
            {/* ================================        START BLOG AREA================================= */}
            <section className="blog-area inner-blog-area">
                <div className="container">
                    <div className="row blog-post-wrapper">
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                                    </a>
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        50 Greatest Event Places in London
                        </a>
                                    <ul className="post__meta">
                                        <li>25 Dec, 2018 - <a href="/#" className="tag__text">Tips & Tricks</a></li>
                                        <li><a href="/#">340 Likes</a></li>
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
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                                    </a>
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        Top 10 Best Clothing Shops in Sydney
                        </a>
                                    <ul className="post__meta">
                                        <li>26 Dec, 2018 - <a href="/#" className="tag__text">Tips & News</a></li>
                                        <li><a href="/#">620 Likes</a></li>
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
                                            <span>Mark Wins</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                                    </a>
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        Top 15 Greatest Ideas for Health & Body
                        </a>
                                    <ul className="post__meta">
                                        <li>27 Dec, 2018 - <a href="/#" className="tag__text">Tips & Tricks</a></li>
                                        <li><a href="/#">800 Likes</a></li>
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
                                            <span>Matt Derry</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                                    </a>
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        10 Greatest Food Places in United States
                        </a>
                                    <ul className="post__meta">
                                        <li>25 Dec, 2018 - <a href="/#" className="tag__text">Tips & Tricks</a></li>
                                        <li><a href="/#">340 Likes</a></li>
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
                                            <span>Kamran</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                                    </a>
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        Best way to train young artists to be creative?
                        </a>
                                    <ul className="post__meta">
                                        <li>26 Dec, 2018 - <a href="/#" className="tag__text">Tips & News</a></li>
                                        <li><a href="/#">620 Likes</a></li>
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
                                            <span>Juhen</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post-item">
                                <div className="blog-post-img">
                                    <a href="blog-single.html">
                                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                                    </a>
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <a href="blog-single.html" className="blog__title">
                                        Moonlight Forest - Lantern Art Festival at Los Angeles
                        </a>
                                    <ul className="post__meta">
                                        <li>27 Dec, 2018 - <a href="/#" className="tag__text">Tips & Tricks</a></li>
                                        <li><a href="/#">800 Likes</a></li>
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
                                            <span>Tambir</span>
                                        </li>
                                        <li>
                                            <a href="blog-single.html" className="blog__btn">
                                                read more <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pagination-wrapper text-center">
                                <ul className="pagination-list">
                                    <li><a href="/#" className="pag__prev"><i className="fa fa-angle-double-left"></i></a></li>
                                    <li><a href="/#">1</a></li>
                                    <li className="pag__active"><a href="/#">2</a></li>
                                    <li><a href="/#">3</a></li>
                                    <li><a href="/#">4</a></li>
                                    <li><a href="/#" className="pag__next"><i className="fa fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>{/* end pagination-wrapper */}
                        </div>{/* end col-md-12 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end blog-area */}
            {/* ================================       START BLOG AREA ================================= */}
            <Footer/>
        </div>
    );
}

export default BlogGrid;