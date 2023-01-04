import { useState, useEffect } from 'react';

export default 
function App2() {
  const [ keyword, setKeyword ] = useState('');
  const [ counter, setValue ] = useState(0);
  
  const countUp = () => {   
    setValue(prev => prev + 1);
  }
  console.log('App2');

  const runOnlyOnce = () => {
    console.log('Once - 통신');
  }
    
  const changeKeyword = e => setKeyword(e.target.value);

  useEffect(runOnlyOnce, []);
  useEffect(() => {
    console.log('키워드 검색');
  }, [ keyword ])
  return (
    <div>
      <h1>Counter</h1>
      <input onChange={changeKeyword} type="search" value={keyword} />            
      <h3>{counter}</h3>
      <button onClick={countUp}>click me</button>
    </div>
  );
}
