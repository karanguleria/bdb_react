import React, { Component } from 'react'
// import CakeComponent from '../components/testing/CakeComponent'
// import IcecreamComponent from '../components/testing/IcecreamComponent'
// import FruitComponent from '../components/testing/FruitComponent'
// import NewCakeContainer from '../components/testing/NewCakeContainer'
// import ItemContainer from '../components/testing/ItemContainer'
// import UserContainer from '../components/testing/UserContainer'
import CategoryContainer from '../components/cards/CategoryContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';
// import FeaturedCategory from '../components/cards/FeaturedCategory';
// import PopularCategory from '../components/cards/PopularCategory';
import MostVisitedPlace from '../components/cards/MostVisitedPlace';
// import Testimonial from '../components/cards/Testimonial';
import TestimonialContainer from '../components/cards/TestimonialContainer';
import ClientLogo from '../components/cards/ClientLogo';
import BlogPost from '../components/cards/BlogPost';
import FunFacts from '../components/cards/FunFacts';
import WeOffer from '../components/cards/WeOffer';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
// import axios from 'axios';

var ClientLogosettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false
};
// var Testimonialsettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
// };
var BlogPostsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
};

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // testimonials: []
        }
        // console.log(props);

        // this.handleTestimonials = () => {
        //     axios.get('http://awardselfie.com/bdb/public/api/testimonials')
        //         .then(response => {
        //             this.setState({ testimonials: response.data.data });
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         })
        // };
    }
    componentDidMount() {
        // this.handleTestimonials();

    }
    render() {
        return (
            <div className="Home">
                <Header />

                <section className="hero-wrapper" id="home">
                    <div className="hero-overlay"></div>
                    <div className="container">
                        {/* TEsting start */}

                        {/* <UserContainer />
                        <CakeComponent />
                        <IcecreamComponent />
                        <FruitComponent />
                        <NewCakeContainer />
                        <ItemContainer/> */}
                        {/* <ItemContainer cake/>  */}
                        {/* <br />
                        <br />
                        <br />
                        <br /> */}
                        {/* TEsting start */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-heading">
                                    <h2 className="hero__title cd-headline zoom">
                                        What are you interested in
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">Hotels</b>
                                            <b>Restaurants</b>
                                            <b>Shops</b>
                                            <b>Salons</b>
                                            <b>Apartments</b>
                                            <b>Travels</b>
                                            <b>Business</b>
                                            <b>Fitness</b>
                                        </span>
                                    </h2>
                                    <h4 className="hero__meta">
                                        Discover the best places to stay, eat, shop & visit the city nearest to you.
                                    </h4>
                                </div>
                                <div className="main-search-input">
                                    <div className="main-search-input-item">
                                        <input className="form-control" type="text" placeholder="What are you looking for?" />
                                    </div>
                                    <div className="main-search-input-item location">
                                        <select>
                                            <option data-display="Select a location">Select a location</option>
                                            <option value="1">Australia</option>
                                            <option value="2">AB Canada</option>
                                            <option value="3">Amsterdam Natherlands</option>
                                            <option value="4">Austin TX, USA</option>
                                            <option value="5">Bengaluru Karnataka, India</option>
                                            <option value="6">Berlin, Germany</option>
                                            <option value="7">Barcelona, Spain</option>
                                            <option value="8">USA</option>
                                            <option value="9">UK</option>
                                            <option value="10">United Arab Emirates</option>
                                            <option value="11">Japan</option>
                                            <option value="12">China</option>
                                            <option value="13">Belgium</option>
                                            <option value="14">France</option>
                                            <option value="15">Austria</option>
                                            <option value="16">Russia</option>
                                            <option value="17">Sweden</option>
                                            <option value="18">Norway</option>
                                            <option value="19">Denmark</option>
                                            <option value="20">Bangladesh</option>
                                        </select>
                                    </div>
                                    <div className="main-search-input-item category">
                                        <select>
                                            <option data-display="All Category">All Category</option>
                                            <option value="1">Shops</option>
                                            <option value="2">Hotels</option>
                                            <option value="3">Foods & Restaurants</option>
                                            <option value="4">Fitness</option>
                                            <option value="5">Travel</option>
                                            <option value="6">Salons</option>
                                            <option value="7">Event</option>
                                            <option value="8">Business</option>
                                        </select>
                                    </div>
                                    <div className="main-search-input-btn">
                                        <button onClick={() => { this.props.buyCake() }} className="button theme__btn" type="submit">Search {this.props.numberOfCakes} </button>
                                    </div>
                                </div>
                                <div className="highlighted-categories">
                                    <h4 className="highlighted__or">Or</h4>
                                    <h5 className="highlighted__title">browse featured categories:</h5>
                                    <CategoryContainer categoryType={'featured'} count={6} layoutType={'small'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cat-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading text-center">
                                    <h2 className="sec__title">Most Popular Categories</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia
                                        tortors.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row cat-info-wrap">
                            <CategoryContainer categoryType={'popular'} count={8} />
                        </div>
                    </div>
                </section>
                <section className="hiw-area text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading">
                                    <h2 className="sec__title">Plan The Vacation of Your Dreams</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia
                                        tortors.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row hiw-info-wrap">
                            <div className="col-md-4 col-sm-6">
                                <div className="hiw-item">
                                    <div className="hiw-icon">
                                        <span className="la la-map-o"></span>
                                    </div>
                                    <div className="hiw-content">
                                        <h4 className="hiw__title">Find Interesting Place</h4>
                                        <p className="hiw__desc">
                                            Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                            luctus, finibus tellus ut, convallis eros.
                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="hiw-item">
                                    <div className="hiw-icon">
                                        <span className="la la-envelope-o"></span>
                                    </div>
                                    <div className="hiw-content">
                                        <h4 className="hiw__title">Contact a Few authors</h4>
                                        <p className="hiw__desc">
                                            Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                            luctus, finibus tellus ut, convallis eros.
                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="hiw-item">
                                    <div className="hiw-icon">
                                        <span className="la la-user"></span>
                                    </div>
                                    <div className="hiw-content">
                                        <h4 className="hiw__title">Make a Reservation</h4>
                                        <p className="hiw__desc">
                                            Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam
                                            luctus, finibus tellus ut, convallis eros.
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="hiw-video-btn">
                                    <img src="images/video-img.jpg" alt="video-img" />
                                    <div className="video-text">
                                        <a className="mfp-iframe video-play-btn" href="https://www.youtube.com/watch?v=DQMeTCtsLcU" title="Play Video">
                                            <span className="la la-play"></span>
                                        </a>
                                        <p className="video__desc">watch how it works</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="most-visited-area text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading">
                                    <h2 className="sec__title">Most Visited Places</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia tortors.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="most-visited-wrap">
                                    <Slider {...BlogPostsettings}>
                                        <MostVisitedPlace />
                                        <MostVisitedPlace />
                                        <MostVisitedPlace />
                                        <MostVisitedPlace />
                                        <MostVisitedPlace />
                                        <MostVisitedPlace />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="funfact-area text-center">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="section-heading">
                                        <h2 className="sec__title sec__title2">Numbers Say Everything</h2>
                                        <p className="sec__meta">
                                            Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                            a feugiat eros. Nunc ut lacinia tortors.
                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row fun-fact-wrap">
                            <FunFacts />
                            <FunFacts />
                            <FunFacts />
                            <FunFacts />
                        </div>
                    </div>
                </section>
                <section className="hiw-area hiw-area2 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading">
                                    <h2 className="sec__title">What We Offer</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia
                                        tortors.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row hiw-info-wrap">
                            <WeOffer />
                            <WeOffer />
                            <WeOffer />
                            <WeOffer />

                        </div>
                    </div>
                </section>
                <section className="cta-area">
                    <img src="images/symble1.png" alt="" className="symble-img" />
                    <img src="images/symble2.png" alt="" className="symble-img" />
                    <img src="images/symble3.png" alt="" className="symble-img" />
                    <img src="images/symble4.png" alt="" className="symble-img" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="section-heading">
                                    <h2 className="sec__title">Sign up for 30 days trial!</h2>
                                    <p className="sec__meta">
                                        No payment required, jump to get started. Nunc ut lacinia tortors.
                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <div className="cta-button-box">
                                    <a href="sign-up.html" className="theme__btn">register now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial-area text-center">
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
                    <img src="images/team1.jpg" alt="testtmonial" className="random-img" />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">

                                <TestimonialContainer />

                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <div className="section-heading text-center">
                                    <h2 className="sec__title">Latest Tips & Articles</h2>
                                    <p className="sec__meta">
                                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero,
                                        a feugiat eros. Nunc ut lacinia tortors.
                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row blog-post-wrapper">
                            <BlogPost />
                            <BlogPost />
                            <BlogPost />
                        </div>
                    </div>
                </section>
                <section className="clientlogo-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="client-logo">
                                    <Slider {...ClientLogosettings}>
                                        <ClientLogo />
                                        <ClientLogo />
                                        <ClientLogo />
                                        <ClientLogo />
                                        <ClientLogo />
                                        <ClientLogo />
                                        <ClientLogo />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Home



