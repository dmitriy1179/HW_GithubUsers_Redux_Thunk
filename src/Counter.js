import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actionCreators";

const Counter = ({ count, isCalculating, dispatch }) => {
  return (
    <section>
      <div>
        <h1>Count:</h1>
        {isCalculating ? "LOADING..." : count}
      </div>
      <div>
        <button className="btnCounter" onClick={() => dispatch(increment())} disabled={isCalculating}>
          Increment
        </button>
        <button className="btnCounter" onClick={() => dispatch(reset())} disabled={isCalculating}>
          Reset
        </button>
        <button className="btnCounter" onClick={() => dispatch(decrement())} disabled={isCalculating}>
          Decrement
        </button>
      </div>
    </section>
  )
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
    isCalculating: state.counter.isCalculating
  };
};
  
export default connect(mapStateToProps)(Counter);
  