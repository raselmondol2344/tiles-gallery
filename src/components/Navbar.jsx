"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
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
          <ul className="flex items-center  text-sm gap-5">
            <li>
              <Link href={"/logOut"}>Log out</Link>
            </li>
            <li>
              <Link href={"/logIn"}>Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;