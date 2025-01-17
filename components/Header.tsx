"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
function Header() {
    const { user } = useUser();

  return (
    <header className="flex flex-wrap items-center justify-between py-2 px-4">
        <div className="flex items-center w-full flex-wrap justify-between">

            <Form
                action="/search" method="get" className="flex items-center justify-center">
                <input type="text" name="query" placeholder="Search" className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  w-full max-w-4xl"/>       
            </Form>

            <Link href="/" className="text-sm hover:opacity-50 cursor-pointer mx-auto sm:mx-0 ">
                HOME
            </Link>

            <Link href="/" className="uppercase text-sm hover:opacity-50 cursor-pointer mx-auto sm:mx-0 ">
                Cakes
            </Link>

            <Link href="/" className=" uppercase text-sm hover:opacity-50 cursor-pointer mx-auto sm:mx-0 ">
                Cookies
            </Link>

            <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
                <Link href="/basket" className="flex-1 relative flex items-center justify-center sm:justify-start sm:flex-none space-x-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"> 
                <TrolleyIcon className="w-6 h-6" />
                <span className="">Basket</span>
                </Link>

                {/* User area */}
                <ClerkLoaded>
                    {user && (
                    <Link href="/orders" className="flex-1 relative flex items-center justify-center sm:justify-start sm:flex-none space-x-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        <PackageIcon className="w-6 h-6" />
                        <span>My Orders</span>
                    </Link>
                    )}

                     {user ? (
                        <div className="flex items-center space-x-2">
                            <UserButton/>
                                <div className="hidden sm:block text-xs">
                                    <p className="text-grey-400">Welcome Back</p>
                                    <p className="font-bold">{user.fullName}!</p>
                                </div>
                                </div>
                            ) : (
                                <SignInButton mode="modal" />
                                )}   
                    </ClerkLoaded>
            </div>
        </div>
    </header>
  )
}

export default Header
