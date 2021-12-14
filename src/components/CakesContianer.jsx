import { buyCake } from "../redux/cakeRedux/CakeActions";
import { connect } from "react-redux";

const CakesContianer = (props) => {
    return (<div>
        <h2>number of cakes-{ props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div> );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(CakesContianer);