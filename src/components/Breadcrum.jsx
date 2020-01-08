
import React from 'react';
import { Link } from "react-router-dom";

function Breadcrum(props) {
    return (
        <div className="Breadcrum">
            {/* ================================     START BREADCRUMB AREA ================================= */}
            < section className="breadcrumb-area" >
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumb-content">
                                    <h2 className="breadcrumb__title">{props.title}</h2>
                                    <ul className="breadcrumb__list">
                                        <li className="active__list-item"><Link to="/">home</Link></li>
                                        <li className="active__list-item">{props.title}</li>
                                    </ul>
                                </div>{/* end breadcrumb-content */}
                            </div>{/* end col-md-12 */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end breadcrumb-wrap */}
                <div className="bread-svg">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                </div>{/* end bread-svg */}
            </section > {/* end breadcrumb-area */}
            {/* ================================     END BREADCRUMB AREA ================================= */}
        </div>
    );
}
export default Breadcrum;