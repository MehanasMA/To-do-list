import React from 'react'
import { useState } from 'react';
import './App.css'
import moment from "moment";


    function App() {
      const [toDos,setTodos]=useState([])
      const [toDo, setTodo] = useState('')
      function handleDeleteClick(id) {
        const removeItem = toDos.filter((toDo) => {
          return toDo.id !== id;
        });
        setTodos(removeItem);
      }
      
      return (
        <div className="app">
          <div className="mainHeading">
            <h1>ToDo List</h1>
          </div>
          <div className="subHeading">
            <br />
            {/* <h2>Whoop, it's Wednesday 🌝 ☕ </h2> */}
            <h2> Whoop, it's  {moment().format("dddd")} 🌝 ☕ 
          {/* {moment.locale("ml").format("dddd")} */}
        </h2>
        <h3>lets organize our day </h3>
          </div>
          <div className="input">
            <input value={toDo} onChange={(e)=> setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
            <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
          </div>
          <div className="todos">

            {   toDos.map((obj)=>{
            
              

              return( <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id==obj.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))

                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                  <i onClick={() => handleDeleteClick(obj.id)} className="fas fa-times"></i>
              </div>
            </div>
             ) }
   ) }
            
   

          </div>
        </div>
      );
    }

export default App;
