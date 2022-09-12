import './App.css';
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Todo from "./components/Todo";
import {collection,addDoc,onSnapshot} from "firebase/firestore";
import {db} from "./fireBase";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const collectionref = collection(db,"todos");


  useEffect(()=>{
    onSnapshot(collectionref,(snapshot)=>{
      setTodos(snapshot.docs.map((doc)=> doc.data().todo));
  });   
  },[collectionref]);

  async function addTodo(e) {
    e.preventDefault();
    await addDoc(collectionref, {
       todo:inputvalue
    });
    setInputvalue("");
  }


  return (
    <div className="App">
      <h1>My Todo App</h1>
      <form>
        <TextField value={inputvalue} onChange={(e) => {
          setInputvalue(e.target.value)
        }} id="standard-basic" label="Enter The Task" variant="standard" />
        <Button disabled={!inputvalue} variant="contained" type="submit" onClick={addTodo} >Add Todo</Button>
      </form>
      <ul>
        {todos.map((todo,idx) =><Todo key={idx} value={todo}/>)}
      </ul>
    </div>
  );
}

export default App;
