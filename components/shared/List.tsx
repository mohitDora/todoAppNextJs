'use client'

import { deleteEvent, getTaskById, updateEvent } from "@/lib/actions/task.action"
import { Button } from "../ui/button";


export const List =({list}:{list:any}) => {
    const display=list?.map((item:any,index:any)=>{
        return(
            <div key={index}>
            <h1 className={`${item.isCompleted?"bg-lime-400":""}`}>{item.name}</h1>
            <Button onClick={()=>updateEvent(item._id,{...item,isCompleted:!(item.isCompleted)},"/")}>completed</Button>
            <Button onClick={()=>deleteEvent(item._id,"/")}>delete</Button>
            </div>
        )
    })
  return (
    <div>{display}</div>
  )
}
