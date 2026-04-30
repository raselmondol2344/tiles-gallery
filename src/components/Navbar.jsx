"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user;
  //console.log(user);
  const handleSignout = async() => {
    await authClient.signOut()

  }

  return (
    <div className="border-b border-gray-200 px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <Link href={'/'}>
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto rounded-full "
          />
          
        </div></Link>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>

          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {
            !user && 
            <ul className="flex items-center  text-sm gap-5">
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
            <li>
              <Link href={"/logIn"}>Log in</Link>
            </li>
          </ul>
          }

          {
            user && 
            <div className="flex gap-5 items-center">
             <Link href={'/profile'}>
              <Avatar size="sm">
             <Avatar.Image alt="John Doe" 
             src={user?.image}
              referrerPolicy="no-referrer" 
              />
             <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
             </Link>

            <Button onClick={handleSignout}  size="sm" variant="danger">sign out</Button>

            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;