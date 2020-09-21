import React, { useState, useEffect } from 'react';
import { Button, FormControl , Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'
function App() {
 const [todos, setTodos]= useState([]);
 const [input, setInput] = useState('');
 
  // when the app load, we need listen to the database and fetch new todos as the get addedd/removed
   useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      console.log(snapshot.docs.map(doc=> doc.data().todo));
      setTodos(snapshot.docs.map(doc=>({id:doc.id ,todo: doc.data().todo}) ))
    }

    )
   }, [])
  // add to do function
  const Addtodo =(event)=>{
    console.log('add to do clicked');
    // prevent from refresh
    event.preventDefault();
   db.collection('todos').add({
     todo: input,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })
    // clear up the input after submiting
    setInput('');
  }
  return (
    <div className="App">
    <h1>Todo</h1> 
    <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input  value={input} onChange={event => setInput(event.target.value)}  />
      </FormControl>
   
      <Button disabled={!input} variant="contained" color="primary"type='submit' onClick={Addtodo}> Add todo</Button>
     </form>
     <ul>
       {todos.map(todo=>(
        <Todo todo={todo} />
       ))}
     
     </ul>
   </div>
  );
}

export default App;
