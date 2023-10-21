import { useState,useRef} from "react";
import { useDispatch,useSelector } from "react-redux";
import {hidemodal} from '../store/favouriteSlice'
import { addTask,removeTask,deleteAllTask,editTask } from "../store/TodoList";


function CreateTask({listTask,dispatch,editT,setEditT}){
  console.log('edit value===',editT);
  const [displayInput,setDisplayInput] =useState(false);
  const [editVal,setEditVal] =useState(""); 

  const handleDisplayInput=()=>{
    setEditT(!editT);
    setDisplayInput(!displayInput);
  }

  const handleEditedVal=(index)=>{

    setEditT(!editT);
    setDisplayInput(!displayInput);
    dispatch(editTask({index,editVal}));
  }

  const EditedVal =(e) =>{
    setEditVal(e.target.value);
  }


  return (
    <>

  {listTask.length > 0 && <button onClick={()=>dispatch(deleteAllTask())}>Delete All</button>}
        <ul>{listTask.length > 0 && listTask.map((task,index)=>(
          <div key={index} style={{border: "1px solid red", width: "300px"}}>
          <li>{task}</li>
          <button onClick={()=>dispatch(removeTask(task))}>Remove task</button>
          {displayInput ? <input type="text" value ={editVal} onChange={(e)=>EditedVal(e)} /> : "" }

          { editT ? <button onClick={()=>{handleDisplayInput()}}>edit task</button> : <button onClick={()=>{handleEditedVal(index)}}>task</button>}
          
          </div>
          ))}</ul>
  </>
  )

}

function FormApp(){
    //useRef hooks to store data,which avoids the component from rerender
    const inputName =useRef('');
    const inputPassword =useRef(null);

    //radio buttons
    const [gender,setGender] =useState('')

    //checkbox
    const [checked,setChecked] = useState([]);
    let fruits = ['apple','mango','pine'];

    const InputFocus =(e)=>{
        const form = e.target.form;
        const index = Array.prototype.indexOf.call(form, e.target);
        console.log('index==',Array.prototype.indexOf.call(form, e.target));
    console.log('elements==',form.elements);
    form.elements[index + 1].focus();
    console.log('focus',form.elements,form.elements[index + 1]);
    e.preventDefault();
    e.stopPropagation();

    }

    //Radiobutton
    const onRadio =(e)=> setGender(e)

    //checkbox
    const CheckedFruits =(event)=>{
        let updatedList =[...checked];
        if(event.target.checked){
          updatedList = [...checked,event.target.value];
        } else {
         updatedList.splice(checked.indexOf(event.target.value,1));
        }
        setChecked(updatedList);
      }

      //to display Form data as alert
      const getData=(e)=>{
        e.preventDefault();
        console.log('dataaaaaaaaaaaaaaa',inputName,inputPassword);
      }

      //to display modal
      const dispatch =useDispatch();
      const {headerbtn} = useSelector((store)=> store.favouriteSlice);
      const modalval=[
        "apple",
        "mango",
        "pineapple",
        "orange",
        "musk melon"
      ];

      //todo list
      const [task,setTask]= useState('');
      const {listTask} = useSelector((store)=> store.todo);
      const [editT,setEditT] = useState(true);
      const handleInputTask =()=>{
        if(task !== ''){
        dispatch(addTask(task));
        setTask("");
        }
      }

    return(
        <>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" ref={inputName} placeholder="enter name" onKeyUp={(e)=>{if(e.key === "Enter"){InputFocus(e)}}}/>
                <label for="password">Password</label>
                <input type="password" id="password" ref={inputPassword} placeholder="enter password" onKeyUp={(e)=>{if(e.key === "Enter"){InputFocus(e)}}}/>
                <label>Female</label>
                <input type="radio" value="Female" checked={gender === "Female"} onChange={(e)=>onRadio(e.target.value)}/>
                <label>Male</label>
                <input type="radio" value="Male" checked={gender === "Male"} onChange={(e)=>onRadio(e.target.value)}/>
                <label>Other</label>
                <input type="radio" value="Other" checked={gender === "Other"} onChange={(e)=>onRadio(e.target.value)}/>
                <div>
              {fruits.map((elem)=>(
                <label>
                <input type="checkbox" value={elem} onChange={CheckedFruits}/>
                {elem}
                </label>
              ))}
              <div>
              {checked.length>0 && checked.map((elem)=><p>the fruits are {elem}</p>)}
              </div>
            </div>
                <button onClick={(e)=>getData(e)}>Submit</button>
            </div>
        </form>

        This is a form application

        {/* this is a modal */}
        <div>
        <button onClick={()=>dispatch(hidemodal())}>modal</button>
        <ul>{headerbtn && modalval.map((elem)=><li key={elem}>{elem}</li>) }</ul>
        </div>


        {/* todo list */}
        <div>
          <input value={task} onChange={(e)=>setTask(e.target.value)}/>
          <button onClick={()=>{
            handleInputTask();
            }}>Add task</button>

            <CreateTask listTask={listTask} dispatch={dispatch} editT={editT} setEditT={(value)=>setEditT(value) }/>
          
        </div>
        </>
    )
    
}

export default FormApp;