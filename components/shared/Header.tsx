import { SignedOut,SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between px-10 py-4'>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Todo App
    </h3>
      <div>
      <SignedIn>
            <UserButton afterSignOutUrl="/" />
          
          </SignedIn>
    <SignedOut>
        <Button>
            <Link href="/sign-in">
            Log in
            </Link>
        </Button>
    </SignedOut>
      </div>
    
    </div>
  )
}

export default Header