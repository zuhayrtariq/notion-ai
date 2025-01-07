'use client'

import { SignInButton, useUser,SignedOut, SignedIn, UserButton } from "@clerk/nextjs"

const Header = () => {

  const {user} = useUser();
  return (
    <div>
      {
        user && (
          <h1>{user?.firstName}{`'s`}</h1>
        )
      }
      {/* {Breadcrumbs} */}

<div>
  <SignedOut>
    <SignInButton/>
  </SignedOut>

  <SignedIn>
    <UserButton/>
  </SignedIn>
</div>
    </div>
  )
}

export default Header