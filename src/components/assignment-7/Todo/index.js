import React from 'react';
import stores from '../../../stores'

const todoList=stores.todoList
class Todo extends React.Component{
    handleChange=(event,id)=>{
        const value=event.target.value
            todoList.onUpdateTodo(value,id)
        
    }
    handleCheckBox=(value,id)=>{
        
        todoList.onCheckBoxChecked(!value,id)
    }
    handleDeleteBtn=(id)=>{
       todoList.onRemoveClicked(id)
    }
    render(){
        const list=this.props.list
        
        const todos=list.map(todo=>(
            
        <div className={`flex justify-between text-2xl w-full p-1`}>
        <div className={`w-full`}>
        <input type="checkbox"  className={`h-5 w-5 rounded-full bg-blue rounded `} checked={todo.isChecked} onClick={(event)=>this.handleCheckBox(todo.isChecked,todo.id)}/>
        <input type="text" key={todo.id} className={` ${todo.isChecked===true?`line-through text-teal-300 select-none `:`no-underline text-black`}  ml-1 w-11/12`} disabled={todo.isChecked}  defaultValue={todo.title} onChange={(event)=>this.handleChange(event,todo.id)} />
        </div>
        <button onClick={()=>this.handleDeleteBtn(todo.id)}>&times;</button>
        </div>
        ))
        return(
            <div className={`bg-white w-full flex-col `}>
                {todos}
            </div>
        )
    }
}
export {Todo}