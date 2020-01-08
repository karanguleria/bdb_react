import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum.jsx';
import Footer from '../components/Footer.jsx';
import Location from '../components/cards/Location';

function AllLocation() {
    return (
        <div className="AllLocation">
            <Header />
            <Breadcrum />
            {/* ================================    START CAT AREA ================================= */}
            <section class="cat-area cat-area2 cat-area3">
                <div class="container">
                    <div class="row cat-info-wrap">
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                        <Location />
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>{/* end cat-area */}
            {/* ================================    END CAT AREA ================================= */}
            <Footer />
        </div>
    );
}

export default AllLocation;
