
import { combineReducers } from 'redux'
import CakeReducer from './cakeRedux/CakeReducer'
import IceCreamReducer from './Icecream/IceCreamReducer'
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    cake: CakeReducer,
    icecreams: IceCreamReducer,
    user:userReducer
});
export default rootReducer;