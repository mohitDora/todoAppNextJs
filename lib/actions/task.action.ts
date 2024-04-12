'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from "../database"
import Task from "../database/models/task.model"
import User from "../database/models/user.model"

const populateEvent = (query: any) => {
    return query
      .populate({ path: 'userDetails', model: User, select: '_id firstName lastName' })
  }

export async function createTask(task:any,path:string) {

    try {
      await connectToDatabase()
      console.log(task)
      const newTask = await Task.create({name:task})
      revalidatePath(path)
  
      return JSON.parse(JSON.stringify(newTask))
    } catch (error) {
      console.log(error)
    }
  }

  // GET ONE EVENT BY ID
//   eventId: string
export async function getTaskById() {
    try {
      await connectToDatabase()
  
      const task = await Task.find()
  
      if (!task) throw new Error('Event not found')
  
      return JSON.parse(JSON.stringify(task))
    } catch (error) {
      console.log(error)
    }
  }

  // UPDATE
export async function updateEvent(
    userId:string,
    isCompleted:Object,
    path:string
) {
    try {
      await connectToDatabase()
  
      const TaskToUpdate = await Task.findById(userId)
    //   if (!TaskToUpdate || TaskToUpdate.organizer.toHexString() !== userId) {
    //     throw new Error('Unauthorized or event not found')
    //   }
        if(!TaskToUpdate) throw new Error("Not found")
      const updatedEvent = await Task.findByIdAndUpdate(userId,isCompleted)
      revalidatePath(path)
  
      return JSON.parse(JSON.stringify(updatedEvent))
    } catch (error) {
      console.log(error)
    }
  }
  
  // DELETE
  export async function deleteEvent(
   taskId:string,
    path:string
) {
    try {
      await connectToDatabase()
  
      const deletedEvent = await Task.findByIdAndDelete(taskId)
      if (deletedEvent) revalidatePath(path)
    } catch (error) {
      console.log(error)
    }
  }

 // GET EVENTS BY ORGANIZER
export async function getEventsByUser({params}:{params:{
    userId:string;
    name:string;
    path:string
}}) {
    try {
      await connectToDatabase()
  
      const conditions = { organizer: params.userId }

  
      const eventsQuery = Task.find(conditions)
  
      const events = await populateEvent(eventsQuery)
  
      return JSON.parse(JSON.stringify(events))
    } catch (error) {
      console.log(error)
    }
  }