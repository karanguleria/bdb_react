import React from 'react';
import Header from '../components/Header.jsx';
import Breadcrum from '../components/Breadcrum.jsx';
import Footer from '../components/Footer';
import CategoryContainer from '../components/cards/CategoryContainer';

function Category() {
    return (
        <div className="Category">
            <Header />
            <Breadcrum title="All Category" />
            <section className="cat-area cat-area2 all-cat-area">
                <div className="container">
                    <h1>Category</h1>
                    <CategoryContainer />
                    <h1>Popular Category</h1>
                    <CategoryContainer categoryType={'popular'} count={1} />
                    <h1>Featured Category</h1>
                    <CategoryContainer categoryType={'featured'} count={2} layoutType={'small'} />
                </div>{/* end container */}
            </section>
            <Footer />
        </div>
    );
}
export default Category;