
import { combineReducers } from 'redux'
import CakeReducer from './cakeRedux/CakeReducer'
import IceCreamReducer from './Icecream/IceCreamReducer'


const rootReducer = combineReducers({
    cake: CakeReducer,
    icecreams: IceCreamReducer
});
export default rootReducer;