import React,{useState} from 'react';
export default function Modal(props){
  const [edittedTask,setEdittedTask]=useState('');
  return (
    <div  className={`modal ${props.isOpen ? 'open' : ''} items-center text-black  flex-col justify-evenly rounded-lg`}>
      <input className="w-3/4 h-1/4 rounded-lg" onChange={(e)=>setEdittedTask(e.target.value)} type="text" />
      <div className="w-full flex justify-center text-white">
          <button onClick={props.closeModal}>close</button>
          <button onClick={()=>props.handleEdit(edittedTask,props.id)}>save</button>
      </div>
    </div>
  )
}