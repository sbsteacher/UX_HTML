import { useState } from 'react';

export default 
function App2() {
  let sum = 0;
  const [ counter, setValue ] = useState(0);

  const countUp = () => {
    //setValue(counter + 1);
    // setValue(function(prev) {
    //   return prev + 1;
    // });
    setValue(prev => prev + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={countUp}>click me</button>
    </div>
  );
}
