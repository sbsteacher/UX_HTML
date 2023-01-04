import Button from './Button';
import styled from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styled.btn}>Welcome back!</h1>
      <Button text='확인' />
      <Button text='취소' />
    </div>
  );
}

export default App;
