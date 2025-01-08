'use client'

import { SignInButton, useUser,SignedOut, SignedIn, UserButton } from "@clerk/nextjs"

const Header = () => {

  const {user} = useUser();
  console.log("User : ",user)
  return (
    <div className="flex items-center justify-between p-4">
      {
        user && (
          <h1 className="md:text-2xl sm:text-lg">{user?.firstName}{`'s`}</h1>
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