import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTestimonials } from '../../redux'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

var Testimonialsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};

function TestimonialsContainer({ testimonialsData, fetchTestimonials }) {
    useEffect(() => {
        fetchTestimonials()
    }, [])
    return testimonialsData.loading ? (
        <h2>Loading</h2>
    ) : testimonialsData.error ? (
        <h2>{testimonialsData.error}</h2>
    ) : (
                <div>
                    <Slider {...Testimonialsettings}>
                        {testimonialsData &&
                            testimonialsData.testimonials &&
                            testimonialsData.testimonials.map(testimonials =>
                                <div key={testimonials.id} className="Testimonial testimonial-item">
                                    <div className="testi-comment">
                                        <p className="testi__desc">
                                            {testimonials.description}
                                        </p>
                                    </div>
                                    <div className="testi__img">
                                        <img src={testimonials.image} alt={testimonials.name} />
                                    </div>
                                    <h4 className="tesi__title">{testimonials.name}</h4>
                                    <span className="testi__meta">{testimonials.location}</span>
                                </div>
                            )}

                    </Slider>
                </div>
            )
}

const mapStateToProps = (state) => {
    return {
        testimonialsData: state.testimonial
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTestimonials: () => dispatch(fetchTestimonials())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestimonialsContainer)