import {buyCake} from './index'
function mapDispatchToProps (dispatch ) {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default mapDispatchToProps