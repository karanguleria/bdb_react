import React, { Component } from 'react'
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum';
import Footer from '../components/Footer.jsx';

export class About extends Component {
    render() {
        return (
            <div className="About">
            <Header/>
            <Breadcrum/>
            {/* ================================ START ABOUT AREA ================================= */}
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-content section-heading">
                                <h2 className="sec__title about__title">Welcome to the Dirto</h2>
                                <p className="sec__desc about__desc">
                                    Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
                                    Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis
                                    libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum,
                                    est elit finibus tellus, ut tristique elit risus at metus.
                    </p>
                                <p className="sec__desc about__desc about__desc2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                                    pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.
                                    Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt.
                                    Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus
                                    feugiat. In fermentum facilisis massa, a consequat purus viverra.
                                    Aliquam erat volutpat.
                    </p>
                                <a href="#" className="theme__btn">find out more</a>
                            </div>{/* end about-content */}
                        </div>{/* end col-md-6 */}
                        <div className="col-md-6">
                            <div className="about-img-wrap">
                                <img src="images/img1.jpg" alt="about-img" />
                                <img src="images/img1.jpg" alt="about-img" />
                                <img src="images/img1.jpg" alt="about-img" />
                                <div className="video-text">
                                    <a className="mfp-iframe video-play-btn" href="https://www.youtube.com/watch?v=DQMeTCtsLcU" title="Play Video">
                                        <span className="la la-youtube-play"></span>
                                    </a>
                                </div>{/* end video-text */}
                            </div>{/* end about-img-wrap */}
                        </div>{/* end col-md-6 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end about-area */}
            {/* ================================ END ABOUT AREA ================================= */}
            {/* ================================ START HIW AREA ================================= */}
            <section className="hiw-area hiw-area2 hiw-area3 text-center">
                <div className="container">
                    <div className="row hiw-info-wrap">
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-users"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title counter">260</h4>
                                    <p className="hiw__desc">
                                        New Visitors Every Week
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-thumbs-up"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title counter">12168</h4>
                                    <p className="hiw__desc">
                                        Happy customers every year
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-certificate"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title counter">172</h4>
                                    <p className="hiw__desc">
                                        Awards Won
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-list-alt"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title counter">732</h4>
                                    <p className="hiw__desc">
                                        New Listing Every Week
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                </div>{/* end container */}
                <div className="add-business-item">
                    <div className="hiw-content">
                        <a href="add-listing.html">
                            <span className="la la-plus"></span>
                            <p>Add Your Business</p>
                        </a>
                    </div>{/* end hiw-content */}
                </div>{/* end add-business-item */}
            </section>{/* end hiw-area */}
            {/* ================================ END HIW AREA ================================= */}
            {/* ================================ START TESTIMONIAL AREA ================================= */}
            <section className="testimonial-area testimonial-area2 text-center">
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" className="random-img" />
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading">
                                    <h2 className="sec__title">What Our Users Said</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia tortors.
                        </p>
                                </div>{/* end section-heading */}
                            </div>{/* end col-md-8 */}
                        </div>{/* end row */}
                    </div>{/* end row */}
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="client-testimonial">
                                <div className="testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src="images/team1.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 className="tesi__title">Richard Doe</h4>
                                    <span className="testi__meta">united states</span>
                                </div>{/* end testimonial-item */}
                                <div className="testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src="images/team1.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 className="tesi__title">Denwen Evil</h4>
                                    <span className="testi__meta">united states</span>
                                </div>{/* end testimonial-item */}
                                <div className="testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src="images/team1.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 className="tesi__title">Amanda Evil</h4>
                                    <span className="testi__meta">united states</span>
                                </div>{/* end testimonial-item */}
                            </div>{/* end client-testimonial */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end testimonial-area */}
            {/* ================================ START TESTIMONIAL AREA ================================= */}
            {/* ================================ START HIW AREA ================================= */}
            <section className="hiw-area hiw-area2 hiw-area4 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading">
                                <h2 className="sec__title">Why Choose Us</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia
                                    tortors.
                    </p>
                            </div>{/* end section-heading */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                    <div className="row hiw-info-wrap">
                        <div className="col-md-4 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-headphones"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title">24/7 Hours Support</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                                        Aenean a quam luctus, finibus tellus ut,
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-dashboard"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Admin Panel</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                                        Aenean a quam luctus, finibus tellus ut,
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="hiw-item">
                                <div className="hiw-icon">
                                    <span className="la la-mobile"></span>
                                </div>{/* end hiw-icon*/}
                                <div className="hiw-content">
                                    <h4 className="hiw__title">Mobile friendly</h4>
                                    <p className="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                                        Aenean a quam luctus, finibus tellus ut,
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end hiw-area */}
            {/* ================================ END HIW AREA ================================= */}
            {/* ================================ START TEAM AREA ================================= */}
            <section className="team-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Our Expert Team Members</h2>
                                <p className="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia tortors.
                    </p>
                            </div>{/* end section-heading */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                    <div className="row team-member-wrap">
                        <div className="col-md-4 col-sm-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="images/team1.jpg" alt="team-img" />
                                </div>{/* end team-img */}
                                <div className="team-content">
                                    <div className="team__bio">
                                        <h4 className="team__title-text">
                                            Austin Evone <i className="fa fa-line-chart"></i>
                                        </h4>
                                        <span className="team__meta-text">Business Consultant</span>
                                    </div>
                                    <div className="team__social">
                                        <ul className="team__social-link">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-vk"></i></a></li>
                                        </ul>
                                        <a className="team__email-link" href="#"><span className="la la-envelope-o"></span></a>
                                    </div>
                                </div>{/* end team-content */}
                            </div>{/* end team-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="images/team1.jpg" alt="team-img" />
                                </div>{/* end team-img */}
                                <div className="team-content">
                                    <div className="team__bio">
                                        <h4 className="team__title-text">
                                            Nikolas Doe <i className="fa fa-photo"></i>
                                        </h4>
                                        <span className="team__meta-text">Photographer</span>
                                    </div>
                                    <div className="team__social">
                                        <ul className="team__social-link">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-vk"></i></a></li>
                                        </ul>
                                        <a className="team__email-link" href="#"><span className="la la-envelope-o"></span></a>
                                    </div>
                                </div>{/* end team-content */}
                            </div>{/* end team-item */}
                        </div>{/* end col-md-4 */}
                        <div className="col-md-4 col-sm-6">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="images/team1.jpg" alt="team-img" />
                                </div>{/* end team-img */}
                                <div className="team-content">
                                    <div className="team__bio">
                                        <h4 className="team__title-text">
                                            Marlin Builders <i className="fa fa-desktop"></i>
                                        </h4>
                                        <span className="team__meta-text">Co-manager associated</span>
                                    </div>
                                    <div className="team__social">
                                        <ul className="team__social-link">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-vk"></i></a></li>
                                        </ul>
                                        <a className="team__email-link" href="#"><span className="la la-envelope-o"></span></a>
                                    </div>
                                </div>{/* end team-content */}
                            </div>{/* end team-item */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end team-area */}
            {/* ================================ END TEAM AREA ================================= */}
            <Footer/>
        </div >
     )
    }
}

export default About
