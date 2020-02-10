import React from 'react'
import { connect } from 'react-redux'
import { buyFruit } from '../../redux'

function FruitComponent(props) {
    return (
        <div>
            <h1>Number of Fruit {props.numberOfFruits}</h1>
            <button onClick={() => { props.buyFruit() }}>Buy Fruit</button>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        numberOfFruits: state.fruit.numberOfFruits
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyFruit: () => dispatch(buyFruit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FruitComponent)