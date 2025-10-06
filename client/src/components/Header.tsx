"use client";
import Link from "next/link";

import Sales from "#/components/Sales";
import Navbar from "./Header/Navbar";
import Action from "./Header/Action";
import NavbarMobile from "./Header/NavbarMobile";

const navbarListDefault = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    name: "Sign in",
    href: "/sign-in",
  },
];
const navbarListWithCurrentUser = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 4,
    name: "Products",
    href: "/products",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  },
];
export default function Header() {
  // Trường hợp có user
  const currentUser = true;
  return (
    <header id="Home">
      <Sales
        hasSales
        totalSales={47}
        titleSales="Giảm giá cực sốc trong mùa hè này với đồ bơi "
      />
      <div className="border-b border-colorBorder">
        <div className="max-w-[1200px] h-[80px] mx-auto  flex items-center ">
          {/* Navbar mobile */}
          <NavbarMobile list={currentUser ? navbarListWithCurrentUser :  navbarListDefault} />
          {/* Logo */}
          <Link
            href="/"
            className="w-6/12 lg:w-2/12 h-full flex items-center lg:justify-start md:justify-center text-2xl lg:text-left lg:text-2xl font-semibold"
          >
            Quynguyen
          </Link>
          {/* navbar */}
          <Navbar list={currentUser ? navbarListWithCurrentUser :  navbarListDefault} />
          {/* action */}
          <Action currentUser={currentUser} />
        </div>
      </div>
    </header>
  );
}
