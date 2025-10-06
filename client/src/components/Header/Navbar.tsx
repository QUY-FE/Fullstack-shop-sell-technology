'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({list = []}: {list?: {id:number,name:string,href:string}[]}) {
    
  const pathname = usePathname();
  return (
    <nav className="hidden lg:block  lg:w-5/12 h-full leading-20 ">
      <ul className=" flex items-center justify-center h-full gap-3 ">
        {list.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href ? "active" : ""
              } p-3 text-sm hover:text-gray-700 `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
