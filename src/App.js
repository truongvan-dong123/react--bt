import './App.css';
import Header from './layout/Header';
import Body from './layout/Body';
import { useState } from 'react'

const todoArray = [
  {
      content: "Dùng create-react-app tạo app",
      isDone: true
  },
  {
      content: "Dùng create-react-app tạo app",
      isDone: false
  },
  {
      content: "Dùng create-react-app tạo app",
      isDone: true
  },
  {
     
  },
  
]

function App() {
  const [listTodo,setListTodo] = useState(todoArray)
  
  const AddOnChange = (value)=> {
    console.log("value ~",value)
    setListTodo([
      ...listTodo,
      {
        content: value,
        isDone: false
      },
    ])  
  }
  return (
    <div className="App">
      <Header  AddOnChange={AddOnChange}/>
      <Body  todoArray={listTodo}/>
    </div>
  );
}

export default App;
