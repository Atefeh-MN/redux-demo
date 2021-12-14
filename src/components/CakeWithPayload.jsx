import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakeRedux/CakeActions";

const CakeWithPayload = () => {
    const [numbers,setNmbers]=useState(0)
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return ( <div>
        <h2>number of cakes-{numOfCakes}</h2>
        <input type="text" onChange={(e)=>setNmbers(e.target.value)} />
        <button onClick={() => dispatch(buyCake(numbers))}>Buy {numbers}cake</button>
    </div> );
}
 
export default CakeWithPayload;