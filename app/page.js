"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle, settittle] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const [index,setIndex] = useState(false);
  const SubmitHandler = (i)=>{
     i.preventDefault()
     let temp;
     if(tittle.trim() !== "")
      if(index || index !== false){ 
        temp = [...mainTask]
        temp[index] = tittle;
        setmainTask(temp)
     setIndex(false)
     settittle("")
    }
    else{
      setmainTask([...mainTask, tittle])
      settittle("")
      console.log(mainTask)
}
}

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask].filter((elem,ind) => ind != i)
    setmainTask(copyTask)
}

const RemoveAllTask = () =>{
  let confirmed = window.confirm('Are you sure you want to remove all tasks?');
  if (confirmed) {
    setmainTask([])
  }
}

let editHandler = (ind) =>{
  let data = mainTask[ind];
  setIndex(ind)
  settittle(data)
}

let renderTask = ('No Task Available')
return (
  <>
    <h1 className=' bg-yellow-300 text-black p-3 text-5xl'>
      My Todo App
    </h1>
<div className="main_div1">

<form onSubmit={SubmitHandler}>

    <input 
    type='text' 
    className=' bg-transparent text-yellow-200 text-2xl border-zinc-200 border-4 m-8 px-4' 
    placeholder='Enter Task Here'
    value={tittle}
    onChange={(i)=>
      settittle(i.target.value)
    }> 
    </input>
    <button className='p-2 text italic'>{index || index !== false ? `Update Task ${index + 1}`  : "Add Task"}</button>
</form>


<hr/>

<div className='p-8 bg-yellow-200'>
   <ul>{
     (mainTask.length==0)?
     <h2>{renderTask}</h2>
  :

  mainTask.map((t,i) =>
<>
<li className='flex items-center justify-center'>{t}
  <div>
    <p className='text-2xl font-semibold text italic'>{t.tittle}</p>
  </div>

<button
    disabled = {index !== false} 
  onClick={() =>{
    deleteHandler(i)
  }}
  className='bg-black p-2 mb-2 text italic ml-5'>
    ❌
</button>

<button
 disabled = {index !== false }
 onClick={() => {
   editHandler(i)
  }}
  className='bg-black p-2 mb-2 text italic ml-5' >
    ✎✏
  </button>

</li>
</>
)
   }</ul>
</div>

<button
 disabled = {mainTask.length == 0 || index !== false}
 onClick={() =>{
 RemoveAllTask()
}}
 className=' p-2 mb-2 text italic text-center mt-3'>
  All Task ✖️
</button>


</div>
  </>
 
 )
}

export default page;