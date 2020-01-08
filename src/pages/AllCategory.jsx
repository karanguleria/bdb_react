import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum.jsx';
import Footer from '../components/Footer';
import PopularCategory from '../components/cards/PopularCategory';

function Category() {
    return (
        <div className="Category">
            <Header />
            <Breadcrum />
            <section className="cat-area cat-area2 all-cat-area">
                <div className="container">
                    <div className="row cat-info-wrap">
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                        <PopularCategory />
                    </div>{/* end row */}
                </div>{/* end container */}
            </section>
            <Footer />
        </div>
    );
}
export default Category;