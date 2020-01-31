import { createStore } from "redux";
import reducer from './reducer';

const initialState = {
  count:0,
  login:false,
  token: false,
  expiry: false,
  username: false,
  userimage: false,
  userId : false,
  categories:false,
  userCategories: [],
  selfies: false
};

function configureStore(initalState) {
  return createStore(reducer,initialState);
}

export default configureStore;
