import { createContext, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import TodoLists from './components/TodoLists';

// 사용할상태초기값저장
//초기상태를 컴포넌트 박에 선언하기 (컴포넌트밖에있으면 app이 다시렌더링되어도 다시 실행되지않음)
const initalState ={
  input:"",
  todos:[
    {id: 1, text: "해야할일1",isDone:false},
    {id: 2, text: "해야할일2",isDone:false},
  ],
  id: 3
}
//reducer 함수 선언
function reducer(state,action){
  switch(action.type){
    //action type지정 할일추가하기 addTodo / input값 변경 changeinput/ 할일 삭제 deleteTodo/isDone반전 toggletoDO
    case 'changeInput':
      return{
        ...state,
        input:action.payload //action에 payload키를 추가해서 dispatch할때 값을 넣어준다.
      };
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos , action.todo], //action 에 값을 추가해서 보내줌
        id: state.id + 1,
        input:""
      };
    case 'deleteTodo':
      return {
      ...state,
      todos: state.todos.filter(todo=>todo.id !== action.id)
    };
    case 'toggleTodo':
      return{
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? {...todo,isDone: !todo.isDone}: todo)
      };
    
    default:
        return state;
  }
}

// context만들기 
export const UserDispatch = createContext(null);

function App() {
  //상태선언하기 reducer
  // const [state,dispatch] = useReducer(함수,초깃값); 초기값을 변수에 저장해둿다가 useReducer에 초기값으로 넣어줌
  const [state,dispatch] = useReducer(reducer,initalState);
  //상태값을 컴포넌트에 전달하기위해 변수로 구조분해할당
  const {todos,input,id} = state; 


  // //인풋값 업데이트 요청 changeInput
  // const onChange = (e)=>{
  //   dispatch({
  //     type:'changeInput',  //action에 들어갈 객체를 만들어주는과정 type키에 changeinput
  //     payload:e.target.value // payload키에 e.target.value // action.type action.payload 로 접근이 가능함
  //   })
  // }

  // //할일 항목추가 업데이트 요청 deleteTodo
  // const addTodo = ()=>{
  //   dispatch({
  //     type:'addTodo',
  //     todo:{id:id , text:input , isDone:false}
  //   })
  // }

  // //할일 항목삭제 업데이트 요청 delTodo
  // const deleteTodo = (id)=>{
  //   dispatch({
  //     type:'deleteTodo',
  //     id: id
  //   })
  // }

  // //할일항목 isdone 토글 요청 toggleTodo
  // const toggleTodo = (id)=>{
  //   dispatch({
  //     type:"toggleTodo",
  //     id:id
  //   })
  // }

  return (
    <UserDispatch.Provider value={dispatch}>
      <div className="App">
        <Header input={input} id={id}></Header>
        <TodoLists todos={todos}></TodoLists>
      </div>
    </UserDispatch.Provider>
  );
}

export default App;