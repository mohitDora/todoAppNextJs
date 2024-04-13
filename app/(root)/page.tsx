import { List } from "@/components/shared/List";
import { InputBar } from "@/components/shared/InputBar";
import { getTaskByUser } from "@/lib/actions/task.action";
import { SignedOut, auth, useUser } from "@clerk/nextjs";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentUser } from '@clerk/nextjs';
import Display from "@/components/shared/Display"
import SigninButton from "@/components/shared/SigninButton"
import { revalidatePath } from "next/cache";

export default async function Todo() {
  const user = await currentUser();
  revalidatePath("/")
  console.log("id", user)
  const userId = user?.publicMetadata?.userId as string

  const listItems = await getTaskByUser(userId);

  return (
    <>
      
            <Header />
            <InputBar id={userId}></InputBar>
            {userId? <div className="p-4 w-[100%] md:w-[50vw] m-auto">
              <List list={listItems}></List>
            </div> : <p className="leading-7 [&:not(:first-child)]:mt-6 m-auto text-center text-muted-foreground">
              Enter the task in the text box and press the add task button.
            </p>}
         

    </>
  );
}