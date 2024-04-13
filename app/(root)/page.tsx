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

export default async function Todo() {
  const user = await currentUser();
//   const { sessionClaims } =await auth();
// console.log(sessionClaims)
  // const userId = sessionClaims?.userId as string;
  console.log("id",user?.publicMetadata?.userId)
  const userId=user?.publicMetadata?.userId as string

  const listItems = await getTaskByUser(userId);

  return (
    <>
      <Display userId={userId} listItems={listItems}></Display>

    </>
  );
}