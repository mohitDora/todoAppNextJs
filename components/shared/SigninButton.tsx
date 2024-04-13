import { SignedOut,SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Header() {
  return (
    <SignedOut>
        <Link href="/sign-in" className=' mx-auto'>
        <Button >
            
            Get Started
         
        </Button>
        </Link>
    </SignedOut>

  )
}

export default Header