import React from 'react';
import { Link } from 'react-router-dom'

function BlogPost() {
    return (
        <div className="BlogPost col-md-4 col-sm-6">
            <div className="blog-post-item">
                <div className="blog-post-img">
                    <Link to="/blog-single">
                        <img src="images/img1.jpg" alt="blog" className="blog__img" />
                    </Link>
                </div>
                <div className="blog-post-body">
                    <Link to="/blog-single" className="blog__title">
                        50 Greatest Event Places in London
                        </Link>
                    <ul className="post__meta">
                        <li>25 Dec, 2018 - <Link to="/#" className="tag__text">Tips & Tricks</Link></li>
                        <li><Link to="/#">340 Likes</Link></li>
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
                            <Link to="/blog-single" className="blog__btn">
                                read more <i className="fa fa-angle-right"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
export default BlogPost;
