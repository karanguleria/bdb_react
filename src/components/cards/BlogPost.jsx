import React from 'react';

function BlogPost() {
    return (
        <div className="BlogPost col-md-4 col-sm-6">
            <div className="blog-post-item">
                <div className="blog-post-img">
                    <a href="blog-single.html">
                        <img src="images/img4.jpg" alt="blog image" className="blog__img" />
                    </a>
                </div>
                <div className="blog-post-body">
                    <a href="blog-single.html" className="blog__title">
                        50 Greatest Event Places in London
                        </a>
                    <ul className="post__meta">
                        <li>25 Dec, 2018 - <a href="#" className="tag__text">Tips & Tricks</a></li>
                        <li><a href="#">340 Likes</a></li>
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
                </div>
            </div>
        </div>

    );
}
export default BlogPost;
