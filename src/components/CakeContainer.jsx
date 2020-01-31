import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/index'
function CakeContainer(props) {
    return (
        <div>
<h2>Number of Cakes : {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Add Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes : state.numberOfCakes
    }
}
 
const mapDispatchToPosts = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToPosts) (CakeContainer)
