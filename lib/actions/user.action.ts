'use server'

import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'


export async function createUser(user:any) {
    try {
        await connectToDatabase()

        const newUser = await User.create(user)
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

export async function updateUser(clerkId: string, user: any) {
    try {
        await connectToDatabase()

        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

        if (!updatedUser) throw new Error('User update failed')
        return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
        console.log(error)
    }
}

