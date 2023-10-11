import { useState } from "react";

import CounterWithStateManagement from "./features/Counter";

type CounterProps = {
  init: number
};

// Using React.state
const Counter1 = ({ init }: CounterProps) => {
  const [counter, setCounter] = useState(init);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <h3>With React State</h3>
      <h4>Props: {init}</h4>
      <h4>State: {counter}</h4>
      <br />
      <button onClick={increment}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

const App = () => {
  const INITIAL_COUNTER = 0;

  return (
    <>
      <CounterWithStateManagement />
      -----
      <Counter1 init={INITIAL_COUNTER} />
    </>
  );
};

export default App;
