import { SignedOut } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Header() {
  return (
    <SignedOut>
        <Button>
            <Link href="/sign-in">
            Log in
            </Link>
        </Button>
    </SignedOut>
  )
}

export default Header