import { createStore } from "redux";
import reducer from './helpers/reducer';

const store = createStore(reducer);

export default store;
