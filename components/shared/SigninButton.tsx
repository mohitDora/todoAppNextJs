import { SignedOut,SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Header() {
  return (
    <SignedOut>
        <Button className='w-[20rem] mx-auto'>
            <Link href="/sign-in">
            Get Started
            </Link>
        </Button>
    </SignedOut>

  )
}

export default Header