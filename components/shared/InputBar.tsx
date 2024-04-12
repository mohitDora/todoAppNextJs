'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createTask } from '@/lib/actions/task.action';

export function InputBar() {
  const [task, setTask] = useState("");

  const handleInputChange = (e:any) => {
    setTask(e.target.value);
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const newTask=await createTask(task,"/");
    console.log(newTask)
    console.log("Email submitted:", task);
    // Optionally, you can clear the input field after submission
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input 
        type="text" 
        placeholder="Enter your task" 
        value={task} 
        onChange={handleInputChange} 
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
