import React, { Component } from 'react'

export default class Testimonial extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Testimonial testimonial-item">
                <div className="testi-comment">
                    <p className="testi__desc">
                        {this.props.testimonial.description}
                    </p>
                </div>
                <div className="testi__img">
                    <img src={this.props.testimonial.image} alt={this.props.testimonial.name} />
                </div>
                <h4 className="tesi__title">{this.props.testimonial.name}</h4>
                <span className="testi__meta">{this.props.testimonial.location}</span>
            </div>
        )
    }
}
