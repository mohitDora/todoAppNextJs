'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from "../database"
import Task from "../database/models/task.model"
import User from "../database/models/user.model"

const populateEvent = (query: any) => {
    return query
      .populate({ path: 'userDetails', model: User, select: '_id firstName lastName' })
  }

export async function createEvent({params}:{params:{
    userId:string;
    name:string;
    path:string
}}) {
    try {
      await connectToDatabase()
      const newTask = await Task.create(params.userId)
      revalidatePath(params.path)
  
      return JSON.parse(JSON.stringify(newTask))
    } catch (error) {
      console.log(error)
    }
  }

  // GET ONE EVENT BY ID
export async function getEventById(eventId: string) {
    try {
      await connectToDatabase()
  
      const task = await populateEvent(Task.findById(eventId))
  
      if (!task) throw new Error('Event not found')
  
      return JSON.parse(JSON.stringify(event))
    } catch (error) {
      console.log(error)
    }
  }

  // UPDATE
export async function updateEvent({params}:{params:{
    userId:string;
    name:string;
    path:string
}}) {
    try {
      await connectToDatabase()
  
      const TaskToUpdate = await Task.findById(params.userId)
      if (!TaskToUpdate || TaskToUpdate.organizer.toHexString() !== params.userId) {
        throw new Error('Unauthorized or event not found')
      }
  
      const updatedEvent = await Task.findByIdAndUpdate()
      revalidatePath(params.path)
  
      return JSON.parse(JSON.stringify(updatedEvent))
    } catch (error) {
      console.log(error)
    }
  }
  
  // DELETE
  export async function deleteEvent({params}:{params:{
   taskId:string,
    path:string
}}) {
    try {
      await connectToDatabase()
  
      const deletedEvent = await Task.findByIdAndDelete(params.taskId)
      if (deletedEvent) revalidatePath(params.path)
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