import React,{useContext} from 'react';
import { UserDispatch } from '../App';

const Header = ({input,id}) => {
    const dispatch = useContext(UserDispatch)
    return (
        <div>
            <h2>to do list reducer</h2>
            <div>
                <input value={input} onChange={(e)=>{dispatch({
                    type:'changeInput',
                    payload:e.target.value
                })}}/>
                <button onClick={()=>{dispatch({
                    type:'addTodo',
                    todo:{id:id , text:input , isDone:false}
                })}}>+</button>
            </div>
        </div>
    );
};

export default Header;