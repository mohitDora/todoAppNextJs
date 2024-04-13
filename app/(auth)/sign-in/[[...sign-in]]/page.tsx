import { SignIn } from "@clerk/nextjs";

export default function page(){
    return (
        <div className="w-full h-screen flex justify-center align-middle">
<SignIn></SignIn>
        </div>
    )
}