import { useState, useEffect } from 'react';



export default 
function App4() {
  
  const [ title, setTitle ] = useState('hide');
  const [ state, setState ] = useState(true);

  function changeTitle() {
    setTitle(prev => prev === 'hide' ? 'show' : 'hide');
  }

  function changeState() {
    setState(prev => !prev);
  }

  return (
    <div>   
      <button onClick={changeTitle}>{title}</button>
      <button onClick={changeState}>{state ? 'show' : 'hide'}</button>      
      { state && <Hello /> }
    </div>
  );
}

function Hello() {
  useEffect(() => {
    console.log(' Created Hello :) ');

    return () => {
      console.log(' Destroyed Hello :( ');
    };
  }, []);

  return (
    <h1>Hello</h1>
  );
}