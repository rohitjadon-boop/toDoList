import { addToDo, deleteToDo } from "./actions/index";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {


    const [currentInput, setCurrentInput] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.toDoList);


    return (

          <div className="container">
          <div>

          <Input placeHolder="Enter" 
          value={ currentInput }
          onChange={(e) => setCurrentInput(e.target.value)}  
          />

          <Button onClick={() => dispatch(addToDo(currentInput), setCurrentInput(""))} 
          operation="+"
          />

          </div> 
          <div>

          {
          list.map((val, id) => {
          return <h1> { val } <Button onClick={() => dispatch(deleteToDo(id))} operation="Delete"/> </h1>
          })
          }
            </div>
        </div>
    )
}

export default App;

