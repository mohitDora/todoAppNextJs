'use client'
import { Button } from "@/components/ui/button";
import { createTask } from "@/lib/actions/task.action";

export default function Home() {
const create=async()=>{
  try {
    const event={

        name: "mohit",
        userId:"ccdc",
        path: '/'

    }
    console.log(event)
    const newEvent = await createTask(event)

    console.log(newEvent)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <Button onClick={create}>mohit</Button>
  );
}
