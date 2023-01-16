import React, { useContext } from 'react';
import  { UserDispatch }  from '../App';
import { FiBookOpen } from "react-icons/fi";
import { MdCommute,MdDelete } from "react-icons/md";
const TodoLists = ({todos}) => {
    const dispatch = useContext(UserDispatch);
    return (
        <div>
            <ul>
                {todos.map(todo=>
                    <li key={todo.id} style={{color: todo.isDone ? "#eee":"#333"}}>
                       <MdCommute></MdCommute><FiBookOpen></FiBookOpen><span onClick={()=>{dispatch({type:'toggleTodo',id:todo.id})}}>
                            {todo.text}</span>
                        <button onClick={()=>dispatch({type:'deleteTodo',id:todo.id})}><MdDelete/></button>
                    </li>
                )}
                {/* <li><span>할일</span><button>삭제</button></li>
                <li><span>할일</span><button>삭제</button></li> */}
            </ul>
        </div>
    );
};

export default TodoLists;