import {
    counter
    // checkLogin,
    // fetchHome,
    // fetchDashboard,
    // fetchProfile,
    // fetchCurrentUser,
    // fetchProfileSetting,
    // handleLoginAuth,
    // handleLogoutAuth,
    // setUser,
    // setCategory,
    // setUserCategory
} from './types';

const mapDispatchToProps = (dispatch) => {
    return {
          counter: () => dispatch(counter()),
        //   checkLogin: () => dispatch(checkLogin()),
        //   fetchHome: () => dispatch(fetchHome()),
        //   fetchDashboard: () => dispatch(fetchDashboard()),
        //   fetchProfile: () => dispatch(fetchProfile()),
        //   fetchProfileSetting: () => dispatch(fetchProfileSetting()),
        //   handleLoginAuth: () => dispatch(handleLoginAuth()),
        //   handleLogoutAuth: () => dispatch(handleLogoutAuth()),
        //   fetchCurrentUser: () => dispatch(fetchCurrentUser()),
        //   setUser: (data) => dispatch(setUser(data)),
        //   setCategory: (data) => dispatch(setCategory(data)),
        //   setUserCategory: (data) => dispatch(setUserCategory(data)),
    };
};


export default mapDispatchToProps;
