// Using Redux (state management)
import { connect } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = ({ dispatch, tahubulat }) => {
  return (
    <div>
      <h3>With Redux State Management</h3>
      <h4>Counter: {tahubulat}</h4>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tahubulat: state.counter.count
});

export default connect(mapStateToProps)(Counter);
