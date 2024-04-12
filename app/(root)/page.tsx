
import { List } from "@/components/shared/List";
import { Button } from "@/components/ui/button";
import { InputBar } from "@/components/shared/InputBar";
import { createTask, getTaskById } from "@/lib/actions/task.action";

export default async function Home() {
  const listItems=await getTaskById();
  console.log(listItems)
// const create=async()=>{
//   try {
//     const event={

//         name: "mohit",
//         userId:"ccdc",
//         path: '/'

//     }
//     console.log(event)
//     const newEvent = await createTask(event)

//     console.log(newEvent)
//   } catch (error) {
//     console.log(error);
//   }
// }

  return (
    <>
    
    <InputBar></InputBar>
    <List list={listItems}></List>
    </>
  );
}
