import { createStore } from 'redux'
import CakeReducer from './cakeRedux/CakeReducer'


const store = createStore(CakeReducer);
export default store;