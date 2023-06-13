import { connect } from "react-redux";
import AddCar from "../components/AddCar";
import { addCar, removeCar } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (index) => dispatch(addCar(index)),
    removeCar: (index) => dispatch(removeCar(index)),
  };
};

export default connect(null, mapDispatchToProps)(AddCar);
