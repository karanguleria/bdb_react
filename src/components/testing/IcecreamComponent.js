import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../../redux'

function icecreamComponent(props) {
    return (
        <div>
            <h1>nuumber of Icecream {props.numberOfIcecream}</h1>
            <button onClick={() => { props.buyIcecream() }}>buyIcecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfIcecream: state.icecream.numberOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(icecreamComponent)