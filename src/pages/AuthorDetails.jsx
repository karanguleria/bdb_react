import React from 'react';

function AuthorDetails() {
    return (
        <div class="AuthorDetails">
            {/* ================================    START BREADCRUMB AREA================================= */}
            <section class="breadcrumb-area">
                <div class="breadcrumb-wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="breadcrumb-content">
                                    <h2 class="breadcrumb__title">about us</h2>
                                    <ul class="breadcrumb__list">
                                        <li class="active__list-item"><a href="index.html">home</a></li>
                                        <li class="active__list-item">pages</li>
                                        <li>about us</li>
                                    </ul>
                                </div>{/* end breadcrumb-content */}
                            </div>{/* end col-md-12 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end breadcrumb-wrap */}
                <div class="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                </div>{/* end bread-svg */}
            </section>{/* end breadcrumb-area */}
            {/* ================================    END BREADCRUMB AREA ================================= */}
            {/* ================================    START ABOUT AREA ================================= */}
            <section class="about-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="about-content section-heading">
                                <h2 class="sec__title about__title">Welcome to the Dirto</h2>
                                <p class="sec__desc about__desc">
                                    Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
                                    Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis
                                    libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum,
                                    est elit finibus tellus, ut tristique elit risus at metus.
                    </p>
                                <p class="sec__desc about__desc about__desc2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                                    pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.
                                    Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt.
                                    Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus
                                    feugiat. In fermentum facilisis massa, a consequat purus viverra.
                                    Aliquam erat volutpat.
                    </p>
                                <a href="#" class="theme__btn">find out more</a>
                            </div>{/* end about-content */}
                        </div>{/* end col-md-6 */}
                        <div class="col-md-6">
                            <div class="about-img-wrap">
                                <img src="images/img16.jpg" alt="about-img" />
                                <img src="images/img15.jpg" alt="about-img" />
                                <img src="images/img16.jpg" alt="about-img" />
                                <div class="video-text">
                                    <a class="mfp-iframe video-play-btn" href="https://www.youtube.com/watch?v=DQMeTCtsLcU" title="Play Video">
                                        <span class="la la-youtube-play"></span>
                                    </a>
                                </div>{/* end video-text */}
                            </div>{/* end about-img-wrap */}
                        </div>{/* end col-md-6 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end about-area */}
            {/* ================================    END ABOUT AREA================================= */}
            {/* ================================    START HIW AREA================================= */}
            <section class="hiw-area hiw-area2 hiw-area3 text-center">
                <div class="container">
                    <div class="row hiw-info-wrap">
                        <div class="col-md-3 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-users"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title counter">260</h4>
                                    <p class="hiw__desc">
                                        New Visitors Every Week
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-thumbs-up"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title counter">12168</h4>
                                    <p class="hiw__desc">
                                        Happy customers every year
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-certificate"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title counter">172</h4>
                                    <p class="hiw__desc">
                                        Awards Won
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-3 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-list-alt"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title counter">732</h4>
                                    <p class="hiw__desc">
                                        New Listing Every Week
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                </div>{/* end container */}
                <div class="add-business-item">
                    <div class="hiw-content">
                        <a href="add-listing.html">
                            <span class="la la-plus"></span>
                            <p>Add Your Business</p>
                        </a>
                    </div>{/* end hiw-content */}
                </div>{/* end add-business-item */}
            </section>{/* end hiw-area */}
            {/* ================================    END HIW AREA ================================= */}
            {/* ================================       START TESTIMONIAL AREA ================================= */}
            <section class="testimonial-area testimonial-area2 text-center">
                <img src="images/team1.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team2.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team3.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team4.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team5.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team6.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team7.jpg" alt="testtmonial-image" class="random-img" />
                <img src="images/team1.jpg" alt="testtmonial-image" class="random-img" />
                <div class="container">
                    <div class="row">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="section-heading">
                                    <h2 class="sec__title">What Our Users Said</h2>
                                    <p class="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia tortors.
                        </p>
                                </div>{/* end section-heading */}
                            </div>{/* end col-md-8 */}
                        </div>{/* end row */}
                    </div>{/* end row */}
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="client-testimonial">
                                <div class="testimonial-item">
                                    <div class="testi-comment">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div class="testi__img">
                                        <img src="images/team1.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 class="tesi__title">Richard Doe</h4>
                                    <span class="testi__meta">united states</span>
                                </div>{/* end testimonial-item */}
                                <div class="testimonial-item">
                                    <div class="testi-comment">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div class="testi__img">
                                        <img src="images/team2.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 class="tesi__title">Denwen Evil</h4>
                                    <span class="testi__meta">united states</span>
                                </div>{/* end testimonial-item */}
                                <div class="testimonial-item">
                                    <div class="testi-comment">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat non
                                            proident. Occaecat cupidatat non proident des
                                            culpa officia deserunt mollit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga
                                            minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?
                            </p>
                                    </div>
                                    <div class="testi__img">
                                        <img src="images/team3.jpg" alt="testimonial image" />
                                    </div>
                                    <h4 class="tesi__title">Amanda Evil</h4>
                                    <span class="testi__meta">united states</span>
                                </div>{/* end testimonial-item */}
                            </div>{/* end client-testimonial */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end testimonial-area */}
            {/* ================================       START TESTIMONIAL AREA ================================= */}
            {/* ================================    START HIW AREA ================================= */}
            <section class="hiw-area hiw-area2 hiw-area4 text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="section-heading">
                                <h2 class="sec__title">Why Choose Us</h2>
                                <p class="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia
                                    tortors.
                    </p>
                            </div>{/* end section-heading */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                    <div class="row hiw-info-wrap">
                        <div class="col-md-4 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-headphones"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title">24/7 Hours Support</h4>
                                    <p class="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                                        Aenean a quam luctus, finibus tellus ut,
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-4 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-dashboard"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title">Admin Panel</h4>
                                    <p class="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                                        Aenean a quam luctus, finibus tellus ut,
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-4 col-sm-6">
                            <div class="hiw-item">
                                <div class="hiw-icon">
                                    <span class="la la-mobile"></span>
                                </div>{/* end hiw-icon*/}
                                <div class="hiw-content">
                                    <h4 class="hiw__title">Mobile friendly</h4>
                                    <p class="hiw__desc">
                                        There are many variations of passages of Lorem Ipsum available.
                                        Aenean a quam luctus, finibus tellus ut,
                        </p>
                                </div>{/* end hiw-content */}
                            </div>{/* end hiw-item */}
                        </div>{/* end col-md-3 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end hiw-area */}
            {/* ================================    END HIW AREA ================================= */}
            {/* ================================    START TEAM AREA ================================= */}
            <section class="team-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="section-heading text-center">
                                <h2 class="sec__title">Our Expert Team Members</h2>
                                <p class="sec__meta">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                    a feugiat eros. Nunc ut lacinia tortors.
                    </p>
                            </div>{/* end section-heading */}
                        </div>{/* end col-md-8 */}
                    </div>{/* end row */}
                    <div class="row team-member-wrap">
                        <div class="col-md-4 col-sm-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="images/team1.jpg" alt="team-img" />
                                </div>{/* end team-img */}
                                <div class="team-content">
                                    <div class="team__bio">
                                        <h4 class="team__title-text">
                                            Austin Evone <i class="fa fa-line-chart"></i>
                                        </h4>
                                        <span class="team__meta-text">Business Consultant</span>
                                    </div>
                                    <div class="team__social">
                                        <ul class="team__social-link">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-vk"></i></a></li>
                                        </ul>
                                        <a class="team__email-link" href="#"><span class="la la-envelope-o"></span></a>
                                    </div>
                                </div>{/* end team-content */}
                            </div>{/* end team-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-4 col-sm-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="images/team2.jpg" alt="team-img" />
                                </div>{/* end team-img */}
                                <div class="team-content">
                                    <div class="team__bio">
                                        <h4 class="team__title-text">
                                            Nikolas Doe <i class="fa fa-photo"></i>
                                        </h4>
                                        <span class="team__meta-text">Photographer</span>
                                    </div>
                                    <div class="team__social">
                                        <ul class="team__social-link">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-vk"></i></a></li>
                                        </ul>
                                        <a class="team__email-link" href="#"><span class="la la-envelope-o"></span></a>
                                    </div>
                                </div>{/* end team-content */}
                            </div>{/* end team-item */}
                        </div>{/* end col-md-4 */}
                        <div class="col-md-4 col-sm-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="images/team3.jpg" alt="team-img" />
                                </div>{/* end team-img */}
                                <div class="team-content">
                                    <div class="team__bio">
                                        <h4 class="team__title-text">
                                            Marlin Builders <i class="fa fa-desktop"></i>
                                        </h4>
                                        <span class="team__meta-text">Co-manager associated</span>
                                    </div>
                                    <div class="team__social">
                                        <ul class="team__social-link">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fa fa-vk"></i></a></li>
                                        </ul>
                                        <a class="team__email-link" href="#"><span class="la la-envelope-o"></span></a>
                                    </div>
                                </div>{/* end team-content */}
                            </div>{/* end team-item */}
                        </div>{/* end col-md-4 */}
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end team-area */}
            {/* ================================    END TEAM AREA================================= */}
        </div>
    );
}

export default AuthorDetails;