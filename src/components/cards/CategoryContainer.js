import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux'

function CategoriesContainer({ categoryType, count, layoutType, categoriesData, fetchCategories }) {
    // const 
    // console.log(categoryType)
    // console.log(count)
    useEffect(() => {
        fetchCategories(categoryType, count)
    }, [])
    if (categoriesData.loading) {
        return (<p>Loading</p>)
    }

    if (categoriesData.error) {
        return (<p>{categoriesData.error}</p>)
    }
    var displayData = ''
    if (categoryType === 'popular') {
        displayData = categoriesData.popularCategories
    }
    else if (categoryType === 'featured') {
        displayData = categoriesData.featuredCategories
    } else {
        displayData = categoriesData.categories
    }
    switch (layoutType) {
        case 'small':
            return (
                <ul className="highlighted-list-item">
                    {
                        displayData &&
                        displayData.map(category =>
                            <li className="FeaturedCategory">
                                <a href="/#">
                                    <span className="highlight-icon hli-one"><i className={category.icon}></i></span>
                                    {category.title}
                                </a>
                            </li>
                        )
                    }
                </ul>
            )
        default: return (
            <div className="row cat-info-wrap">
                {
                    displayData &&
                    displayData.map(category =>
                        <div key={category.id} className="PopularCategory col-md-3 col-sm-6">
                            <div className="cat-item">
                                <figure className="category-fig">
                                    <img src="images/img1.jpg" alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <a href="/#" className="cat-fig-box">
                                            <div className="cat__icon">
                                                <span className={category.icon}></span>
                                            </div>
                                            <div className="cat__content">
                                                <h4 className="cat__name-title">{category.title}</h4>
                                                <span className="badge">22 Listings</span>
                                            </div>
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                }
            </div >
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    const categoryType = ownprops.categoryType ? ownprops.categoryType : 'all'
    const count = ownprops.count ? ownprops.count : 'all'
    return {
        categoriesData: state.category,
        categoryType: categoryType,
        count: count,

    }
}

const mapDispatchToProps = (dispatch, ownprops) => {
    const categoryType = ownprops.categoryType ? ownprops.categoryType : 'all'
    // console.log(categoryType);
    const count = ownprops.count ? ownprops.count : 'all'
    return {
        fetchCategories: (categoryType, count) => dispatch(fetchCategories(categoryType, count))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesContainer)