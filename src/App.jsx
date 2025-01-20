import React from "react";
import useTimer from "./customHooks/useTimer";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";

const App = () => {
  const currentTime = useTimer(); // Hook personalizado

  return (
    <div>
      <h1>Custom Hooks</h1>
      <Timer currentTime={currentTime} />
      <Calculator />
    </div>
  );
};

export default App;
