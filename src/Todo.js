import React, {useState} from 'react'
import { List, ListItem, ListItemText, Button,Input, Modal } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput]=useState('');
    
    const updateTodo = () =>{
      // update the todo 
       db.collection('todos').doc(props.todo.id).set({
           todo: input
       }, {merge : true});
       setOpen(false);
    }
    return (
        <>
           
       <Modal
            open={open}
            onClose={e => setOpen(false) }
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
           <div className={classes.paper}> 
            <h1>Updata Todo</h1>
             <Input placeholder={props.todo.todo}  value={input} onChange={e=> setInput(e.target.value)} /> 
             <Button variant="contained" color="primary" onClick={updateTodo}> Update Todo</Button>
            </div>        
      
     </Modal>
       
        <List className='todo_list'>
         <ListItem>
             <ListItemText  primary={props.todo.todo}  secondary='Dummy deadLine'/>
         </ListItem>
  
         <EditIcon onClick={e=>setOpen(true)}> Edit</EditIcon>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete() } > </DeleteForeverIcon>
        </List>
    
        </>     
    )
}

export default Todo
