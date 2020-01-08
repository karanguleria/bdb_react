import React from 'react';

function FeaturedCategory(props) {
    return (
        <li className="FeaturedCategory">
            <a href="#">
                <span className="highlight-icon hli-one"><i className={props.icon}></i></span>
                {props.title}
                </a>
        </li>
    );
}
export default FeaturedCategory;
