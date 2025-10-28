"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({
  list = [],
}: {
  list?: { id: number; name: string; href: string }[];
}) {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:block  lg:w-6/12 h-full leading-20 ">
      <ul className=" flex items-center justify-center h-full gap-3 ">
        {list.map((item) => (
          <li key={item.id}>
            {/* <Link
              href={item.href}
              className={`${
                pathname === item.href ? "active" : ""
              } p-3 text-sm hover:text-gray-700 `}
            >
              {item.name}
              <div></div>
            </Link> */}
            <Link
              href={item.href}
              className="relative p-3 text-sm hover:text-gray-700 "
            >
              {item.name}
              <div
                className={`${
                  pathname === item.href ? "block" : "hidden"
                } w-full h-[3px] absolute bottom-0 left-0 rounded-full bg-gradient-to-r from-red-400 to-orange-400`}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
