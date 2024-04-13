'use client'
import { List } from "@/components/shared/List";
import { InputBar } from "@/components/shared/InputBar";
import { getTaskByUser } from "@/lib/actions/task.action";
import { SignedOut, auth, useUser } from "@clerk/nextjs";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentUser } from '@clerk/nextjs';
import SigninButton from "@/components/shared/SigninButton"
import { useState } from "react";

export default function Todo(userId:any,listItems:any) {
  const [dis,setDis]=useState(userId.userId)
  console.log(listItems)
  return (
    <>
      {
        userId?.userId ?
          <>
            <Header />
            <InputBar id={userId?.userId}></InputBar>
            {userId?.listItems?.length>0 ?<div className="p-4 w-[100%] md:w-[50vw] m-auto">
              <List list={userId?.listItems}></List>
            </div>: <p className="leading-7 [&:not(:first-child)]:mt-6 m-auto text-center text-muted-foreground">
      Enter the task in the text box and press the add task button.
    </p>}
            


          </>
          :
          <div className="w-full h-screen flex justify-center flex-col align-middle p-4 gap-16">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            TodoTastic: Your Ultimate Task Management Solution
            </h1>
            <SigninButton></SigninButton>
          </div>
      }



    </>
  );
}