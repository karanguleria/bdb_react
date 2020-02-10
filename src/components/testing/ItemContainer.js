import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIcecream } from '../../redux'

function ItemContainer(props) {
    return (
        <div>
            <h1>Number of Item {props.item}</h1>
            <button onClick={props.buyItem}>BuyItem</button>
        </div>
    )
}


const mapStateToProps = (state, ownprops) => {
    console.log(ownprops);
    const numberOfItem = ownprops.cake ? state.cake.numberOfCakes : state.icecream.numberOfIcecream
    return {
        item: numberOfItem
    }
}
const mapDispatchToProps = (dispatch, ownprops) => {
    console.log(ownprops);
    const dispatchFunction = ownprops.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIcecream())

    return {
        buyItem: dispatchFunction
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
