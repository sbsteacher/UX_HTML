import { useState } from "react";

export default 
function ToDoApp() {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    function todoInputChange(e) {
        setTodo(e.target.value);
    }

    function onSubmit(e) {
        console.log('dd');
        e.preventDefault();
        //기존 todoList 깊은 복사
        //0번 방에, todo값 넣을 수 있어야 한다.
        //복사된 배열 todoList에 넣어준다.
        //const arr = [ todo, ...todoList ];
        //setTodoList(arr);
        if(todo === '') { return; }
        setTodoList(prev => [ todo, ...prev ]);
        setTodo('');
    }

    function clear(e) {
        e.preventDefault();
        setTodoList([]);
    }

    function delItem(idx) {
        console.log(idx);
        
        todoList.splice(idx, 1)
        setTodoList([ ...todoList]);        
        
       //setTodoList(prev => prev.filter((val, subIdx) => idx !== subIdx));
       
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" 
                    onChange={todoInputChange}
                    value={todo} />
                <button>Add Todo</button>
                <button onClick={clear}>Clear</button>
            </form>
            <ul>
              { 
                todoList.map((item, idx) => 
                <li key={idx}>
                    {item} 
                    <button onClick={() => { delItem(idx); }}>삭제</button>
                </li>)
              }
            </ul>
        </div>
    );
}