import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const pathName = router.pathname.split("/")[1];
  const pathParam = router.pathname.split("/")[2] || "0";

  return (
    <header className="w-full flex justify-center items-center bg-white h-14 ">
      <nav>
        <Link href="/">
          <a> Home </a>
        </Link>
        |
        <Link href="/login">
          <a> Login </a>
        </Link>
        |<Link href="/Signup"> Signup</Link>
      </nav>
    </header>
  );
}
