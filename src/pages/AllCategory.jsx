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

                    <CategoryContainer />
                    <CategoryContainer categoryType={'popular'} count={8} />
                    <CategoryContainer categoryType={'featured'} count={8} />


                </div>{/* end container */}
            </section>
            <Footer />
        </div>
    );
}
export default Category;