"use client";
import Link from "next/link";

import Sales from "#/components/Sales";
import Navbar from "./Header/Navbar";
import Action from "./Header/Action";
import NavbarMobile from "./Header/NavbarMobile";

const navbarListDefault = [
  {
    id: 1,
    name: "Trang chủ",
    href: "/",
  },
  {
    id: 2,
    name: "Về chúng tôi",
    href: "/about",
  },
  {
    id: 3,
    name: "Liên Hệ",
    href: "/contact",
  },
  {
    id: 4,
    name: "Đăng nhập",
    href: "/sign-in",
  },
];
const navbarListWithCurrentUser = [
  {
    id: 1,
    name: "Trang chủ",
    href: "/",
  },
  {
    id: 4,
    name: "Tất cả sản phẩm",
    href: "/products",
  },
  {
    id: 2,
    name: "Về chúng tôi",
    href: "/about",
  },
  {
    id: 3,
    name: "Liên hệ",
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
        totalSales={50}
        titleSales="Giảm giá cực sốc trong mùa hè này với đồ gaming "
      />
      <div className="border-b-2 border-colorBorder">
        <div className="max-w-[1200px] h-[80px] mx-auto  flex items-center ">
          {/* Navbar mobile */}
          <NavbarMobile list={currentUser ? navbarListWithCurrentUser :  navbarListDefault} />
          {/* Logo */}
          <Link
            href="/"
            className="w-6/12 lg:w-2/12 h-full flex items-center lg:justify-start md:justify-center text-2xl lg:text-left lg:text-2xl font-semibold"
          >
            Quynguyen.shop
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
