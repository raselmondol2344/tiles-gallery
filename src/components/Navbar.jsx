"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="navbar bg-base-100 border-b border-gray-200 px-2">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-10 mt-3 w-25 p-2 font-bold text-black bg-fuchsia-300 text-center"
          >
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/all-tiles"}>All Tiles</Link></li>
            <li><Link href={"/profile"}>Profile</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/all-tiles"}>All Tiles</Link></li>
          <li><Link href={"/profile"}>Profile</Link></li>
        </ul>
      </div>

      {/* RIGHT (Auth অংশ সবসময় visible) */}
      <div className="navbar-end gap-3">

        {!user && (
          <>
            <Link href={"/register"} className="btn btn-ghost btn-sm">
              Register
            </Link>
            <Link href={"/logIn"} className="btn btn-ghost btn-sm">
              Log in
            </Link>
          </>
        )}

        {user && (
          <div className="flex items-center gap-3">
            <Link href={"/profile"}>
              <Avatar size="sm">
                <Avatar.Image
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user.name.charAt(0)}
                </Avatar.Fallback>
              </Avatar>
            </Link>

            <Button onClick={handleSignout} size="sm" variant="danger">
              sign out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;