'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createTask } from '@/lib/actions/task.action';


export function InputBar(id:any) {
console.log("input",id)
  const [task, setTask] = useState("");

  const handleInputChange = (e:any) => {
    setTask(e.target.value);
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const newTask=await createTask(task,id.id,"/");
    console.log(newTask)
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md lg:max-w-lg items-center space-x-2 m-auto mt-4 p-4">
      <Input 
        type="text" 
        placeholder="Enter your task" 
        value={task} 
        onChange={handleInputChange} 
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
