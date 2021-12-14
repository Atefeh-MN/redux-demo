import { useDispatch, useSelector } from "react-redux";

import { buyIceCream } from "../redux/Icecream/IceCreamActions";

const HooksIceCreamContainer = () => {
    const numOfIceCreams = useSelector((state) => state.icecreams.numOfIceCreams);
    const dispatch = useDispatch();
    return ( <div>
        <h2>number of Ice creams-{numOfIceCreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Ice cream</button>
    </div> );
}
 
export default HooksIceCreamContainer;