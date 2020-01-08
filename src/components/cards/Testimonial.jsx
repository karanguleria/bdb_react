import React from 'react';

function Testimonial() {
    return (
        <div className="Testimonial testimonial-item">
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
        </div>

    );
}
export default Testimonial;
