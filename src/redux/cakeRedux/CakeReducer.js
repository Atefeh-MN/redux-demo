import { BUY_CAKES } from "./CakeType"


const initialState = {
    numOfCakes:10,
}
const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKES:
            return { ...state, numOfCakes: state.numOfCakes -action.payload};
        default: return state;
    }
    
}
export default CakeReducer;