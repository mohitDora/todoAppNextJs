'use server'

import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'


export async function createUser({ params }: {
    params: {
        clerkId: string
        firstName: string
        lastName: string
        username: string
        email: string
    }
}) {
    try {
        await connectToDatabase()

        const newUser = await User.create(params)
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
}

export async function getUserById(userId: string) {
    try {
        await connectToDatabase()

        const user = await User.findById(userId)

        if (!user) throw new Error('User not found')
        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        console.log(error)
    }
}

export async function updateUser({params}:{params:{
    clerkId:string,
    firstName: string
  lastName: string
  username: string
}}) {
    try {
        await connectToDatabase()

        const updatedUser = await User.findOneAndUpdate(params, { new: true })

        if (!updatedUser) throw new Error('User update failed')
        return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
        console.log(error)
    }
}

