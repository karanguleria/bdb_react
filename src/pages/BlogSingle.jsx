import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

function BlogSingle() {
    return (
        <div className="BlogSingle">
            <Header />
            <Breadcrum />
            {/* ================================        START BLOG AREA ================================= */}
            <section className="blog-area inner-blog-area blog-single-area">
                <div className="container">
                    <div className="row blog-post-wrapper">
                        <div className="col-md-8">
                            <div className="blog-post-item blog-single-post">
                                <div className="blog-post-img">
                                    <img src="images/video-img.jpg" alt="blog" className="blog__img" />
                                </div>{/* end blog-post-img */}
                                <div className="blog-post-body">
                                    <ul className="post__meta">
                                        <li>
                                            <img src="images/team1.jpg" alt="admin-img" />
                                            <span>By David Wise</span>
                                        </li>
                                        <li>25 Dec, 2018 - <a href="/#" className="tag__text">Tips & Tutorials</a></li>
                                        <li><a href="/#">800 Likes</a></li>
                                    </ul>
                                    <a href="blog-single.html" className="blog__title bs__title">
                                        How to Improve Your Customer Service Experience
                        </a>
                                    <p className="blog__desc">
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem eaque ipsa quae ab illo inventore
                                        incididunt ut labore et dolore magna
                                        Boot camps have its supporters and its detractors. Some people do not
                                        understand why you should have to spend money on boot camp when you can get the
                                        MCSE study materials yourself at a fraction of the camp price. However, who has
                                        the willpower to actually sit through a self-imposed MCSE training.
                                        who has the willpower to actually sit through a self-imposed
                        </p>
                                    <p className="blog__desc">
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem eaque ipsa quae ab illo inventore
                                        incididunt ut labore et dolore magna
                                        Boot camps have its supporters and its detractors.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Alias aliquam blanditiis deleniti
                                        dolorem esse facere iusto molestiae obcaecati omnis voluptas.
                        </p>
                                    <p className="blog__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Alias aliquam blanditiis deleniti
                                        dolorem esse facere iusto molestiae obcaecati omnis voluptas.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium, suscipit?
                        </p>
                                    <div className="quote-and-img-box">
                                        <blockquote className="blockquote-content">
                                            <i className="fa fa-quote-left"></i>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem eaque ipsa quae ab illo inventore
                                                incididunt ut labore et dolore magna
                                                consectetur adipisicing elit. Fuga, impedit.
                                </p>
                                            <h4>- Amand Sayfried <span>CEO, Kenvato Market</span></h4>
                                        </blockquote>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="images/img1.jpg" alt="blog-img" className="img-fluid" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src="images/img1.jpg" alt="blog-img" className="img-fluid" />
                                            </div>
                                        </div>{/* end row */}
                                        <div className="quote-text">
                                            <p className="blog__desc">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem eaque ipsa quae ab illo inventore
                                                incididunt ut labore et dolore magna
                                                Boot camps have its supporters and its detractors.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Alias aliquam blanditiis deleniti
                                                dolorem esse facere iusto molestiae obcaecati omnis voluptas.
                                </p>
                                            <p className="blog__desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Alias aliquam blanditiis deleniti
                                                dolorem esse facere iusto molestiae obcaecati omnis voluptas.
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Accusantium, suscipit?
                                </p>
                                        </div>{/* end quote-text */}
                                    </div>{/* end quote-and-img-box */}
                                    <div className="blog-tag-and-share">
                                        <div className="bt-item tags">
                                            <ul>
                                                <li><span className="bts__title">Tags:</span></li>
                                                <li><a href="/#">Technology</a></li>
                                                <li><a href="/#">Lifestyle</a></li>
                                                <li><a href="/#">Fashion</a></li>
                                            </ul>
                                        </div>
                                        <div className="bt-item shares">
                                            <ul>
                                                <li><span className="bts__title">Share to:</span></li>
                                                <li>
                                                    <a href="/#" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" data-toggle="tooltip" data-placement="top" title="Dribbble">
                                                        <i className="fa fa-dribbble"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" data-toggle="tooltip" data-placement="top" title="Behance">
                                                        <i className="fa fa-behance"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{/* end blog-tag-and-share */}
                                    <div className="comments-wrapper">
                                        <h3 className="comments-title">3 Comments</h3>
                                        <ul className="comments-list">
                                            <li>
                                                <div className="comment">
                                                    <img className="avatar__img" alt="" src="images/team1.jpg" />
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <span className="comment__author">adam smith</span>
                                                            <span className="comment__date">17 Dec, 2018 - 4:00 pm</span>
                                                        </div>
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            </p>
                                                        <div className="comment-reply">
                                                            <a className="comment__btn" href="/#">
                                                                <span className="la la-mail-reply"></span> Reply
                                                </a>
                                                            <p className="helpful__action">
                                                                <a href="/#">
                                                                    <i className="la la-thumbs-o-up"></i> Helpful
                                                    </a>
                                                                <a href="/#">
                                                                    <i className="la la-smile-o"></i> Funny
                                                    </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>{/* end comment */}
                                                <ul className="comments-reply">
                                                    <li>
                                                        <div className="comment">
                                                            <img className="avatar__img" alt="" src="images/team1.jpg" />
                                                            <div className="comment-body">
                                                                <div className="meta-data">
                                                                    <span className="comment__author">Collin Smith</span>
                                                                    <span className="comment__date">
                                                                        20 Mar, 2018 -3:00 pm
                                                        </span>
                                                                </div>
                                                                <p className="comment-content">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                                    Ut enim ad minim veniam.
                                                    </p>
                                                                <div className="comment-reply">
                                                                    <a className="comment__btn" href="/#">
                                                                        <span className="la la-mail-reply"></span> Reply
                                                        </a>
                                                                    <p className="helpful__action">
                                                                        <a href="/#">
                                                                            <i className="la la-thumbs-o-up"></i> Helpful
                                                            </a>
                                                                        <a href="/#">
                                                                            <i className="la la-smile-o"></i> Funny
                                                            </a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>{/* end comment */}
                                                <div className="comment">
                                                    <img className="avatar__img" alt="" src="images/team1.jpg" />
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <span className="comment__author">Matt Derry</span>
                                                            <span className="comment__date">
                                                                10 Jan, 2019 - 6:00 pm
                                                </span>
                                                        </div>
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            </p>
                                                        <div className="comment-reply">
                                                            <a className="comment__btn" href="/#">
                                                                <span className="la la-mail-reply"></span> Reply
                                                </a>
                                                            <p className="helpful__action">
                                                                <a href="/#">
                                                                    <i className="la la-thumbs-o-up"></i> Helpful
                                                    </a>
                                                                <a href="/#">
                                                                    <i className="la la-smile-o"></i> Funny
                                                    </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>{/* end comment */}
                                            </li>
                                        </ul>
                                        <div className="contact-form-action">
                                            <h3 className="comments-title leave-title">Leave a Comment</h3>
                                            <p className="leave-desc">
                                                Your email address will not be published.
                                                Required fields are marked.
                                </p>
                                            {/*Contact Form*/}
                                            <form method="post">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 form-group">
                                                        <label className="label-text">your name</label>
                                                        <input className="form-control" type="text" name="name" placeholder="Name" required="" />
                                                    </div>{/* end col-md-12 */}
                                                    <div className="col-md-6 col-sm-12 form-group">
                                                        <label className="label-text">Your email</label>
                                                        <input className="form-control" type="email" name="email"
                                                            placeholder="Email" required="" />
                                                    </div>{/* end col-md-12 */}
                                                    <div className="col-md-12 col-sm-12 form-group">
                                                        <label className="label-text">your message</label>
                                                        <textarea className="message-control form-control" name="message" placeholder="Write Message"></textarea>
                                                    </div>{/* end col-md-12 */}
                                                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                                        <button className="theme__btn" type="submit">
                                                            <i className="fa fa-paper-plane-o"></i> Submit Comment
                                            </button>
                                                    </div>{/* end col-md-12 */}
                                                </div>{/* end row */}
                                            </form>
                                        </div>{/* end contact-form-action */}
                                    </div>{/* end comments-wrapper */}
                                </div>{/* end blog-post-body */}
                            </div>{/* end blog-post-item */}
                        </div>{/* end col-md-8 */}
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="sidebar-widget contact-form-action">
                                    <form method="post">
                                        <div className="form-group">
                                            <input className="form-control" type="search" name="search-field"
                                                placeholder="Search by keywords" />
                                            <button type="button" className="search__btn">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget author-widget">
                                    <img src="images/team1.jpg" alt="author" className="author__img" />
                                    <h4 className="author__title">Mark Williamson</h4>
                                    <p className="author__meta">Senior Web Developer</p>
                                    <ul className="author__profile">
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="top" title="Dribbble">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="top" title="Behance">
                                                <i className="fa fa-behance"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="author__desc">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Asperiores dolorem illo
                                        laborum magni, maxime omnis quam quod totam
                                        voluptatem voluptatibus?
                        </p>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget category-widget">
                                    <h3 className="widget__title">post Categories</h3>
                                    <ul className="widget__list cat__list">
                                        <li><a href="/#">Restaurants <span className="tag-span">22</span></a></li>
                                        <li><a href="/#">travel <span className="tag-span">15</span></a></li>
                                        <li><a href="/#">disco <span className="tag-span">33</span></a></li>
                                        <li><a href="/#">design <span className="tag-span">33</span></a></li>
                                        <li><a href="/#">technology <span className="tag-span">38</span></a></li>
                                        <li><a href="/#">lifestyle <span className="tag-span">25</span></a></li>
                                        <li><a href="/#">fashion <span className="tag-span">30</span></a></li>
                                        <li><a href="/#">art <span className="tag-span">22</span></a></li>
                                        <li><a href="/#">food <span className="tag-span">15</span></a></li>
                                        <li><a href="/#">design <span className="tag-span">33</span></a></li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget recent-widget">
                                    <h3 className="widget__title">popular Posts</h3>
                                    <div className="recent-item">
                                        <div className="recent-img">
                                            <a href="blog-single.html">
                                                <img src="images/img1.jpg" alt="blog" />
                                            </a>
                                        </div>{/* end recent-img */}
                                        <div className="recentpost-body">
                                            <h4 className="recent__link">
                                                <a href="blog-single.html">The best sale marketer of the next year</a>
                                            </h4>
                                            <span className="recent__meta"> 12 Jan, 2019 By <a href="http://techydevs.com">Techydevs</a></span>
                                        </div>{/* end recent-img */}
                                    </div>{/* end recent-item */}
                                    <div className="recent-item">
                                        <div className="recent-img">
                                            <a href="blog-single.html">
                                                <img src="images/img1.jpg" alt="blog" />
                                            </a>
                                        </div>{/* end recent-img */}
                                        <div className="recentpost-body">
                                            <h4 className="recent__link">
                                                <a href="blog-single.html">How to make your ideas became true</a>
                                            </h4>
                                            <span className="recent__meta"> 14 Jan, 2019 By <a href="http://techydevs.com">Techydevs</a></span>
                                        </div>{/* end recent-img */}
                                    </div>{/* end recent-item */}
                                    <div className="recent-item">
                                        <div className="recent-img">
                                            <a href="blog-single.html">
                                                <img src="images/img1.jpg" alt="blog" />
                                            </a>
                                        </div>{/* end recent-img */}
                                        <div className="recentpost-body">
                                            <h4 className="recent__link">
                                                <a href="blog-single.html">What gets in the way of strategy</a>
                                            </h4>
                                            <span className="recent__meta"> 15 Jan, 2019 By <a href="http://techydevs.com">Techydevs</a></span>
                                        </div>{/* end recent-img */}
                                    </div>{/* end recent-item */}
                                    <div className="recent-item">
                                        <div className="recent-img">
                                            <a href="blog-single.html">
                                                <img src="images/img1.jpg" alt="blog" />
                                            </a>
                                        </div>{/* end recent-img */}
                                        <div className="recentpost-body">
                                            <h4 className="recent__link">
                                                <a href="blog-single.html">10 Best way to train young artists</a>
                                            </h4>
                                            <span className="recent__meta"> 16 Jan, 2019 By <a href="http://techydevs.com">Techydevs
                                </a></span>
                                        </div>{/* end recent-img */}
                                    </div>{/* end recent-item */}
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget subscribe-widget contact-form-action">
                                    <h3 className="widget__title widget__title3">newsletter</h3>
                                    <form method="post">
                                        <p className="news__desc">
                                            Here, I focus on a range of items and features
                                            that we use in life without giving them a second thought.
                            </p>
                                        <div className="form-group">
                                            <input className="form-control" type="email" name="email-field"
                                                placeholder="Enter email" />
                                            <button type="submit" className="search__btn subscribe__btn">Subscribe</button>
                                            <p className="news__desc2">You can unsubscribe at any time</p>
                                        </div>
                                    </form>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget tag-widget">
                                    <h3 className="widget__title">popular tags</h3>
                                    <ul className="widget__list tag__list">
                                        <li><a href="/#">technology</a></li>
                                        <li><a href="/#">fashion</a></li>
                                        <li><a href="/#">art</a></li>
                                        <li><a href="/#">design</a></li>
                                        <li><a href="/#">development</a></li>
                                        <li><a href="/#">food</a></li>
                                        <li><a href="/#">marketing</a></li>
                                        <li><a href="/#">video</a></li>
                                        <li><a href="/#">lifestyle</a></li>
                                        <li><a href="/#">adventure</a></li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                                <div className="sidebar-widget social-widget">
                                    <h3 className="widget__title">follow & connect</h3>
                                    <ul className="social__links">
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Instagram">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Dribbble">
                                                <i className="fa fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#" data-toggle="tooltip" data-placement="bottom" title="Behance">
                                                <i className="fa fa-behance"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>{/* end sidebar-widget */}
                            </div>{/* end sidebar */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end blog-area */}
            {/* ================================        START BLOG AREA ================================= */}
            <Footer />
        </div>
    );
}

export default BlogSingle;