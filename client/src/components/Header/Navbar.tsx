'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({list = []}: {list?: {id:number,name:string,href:string}[]}) {
    
    const pathname = usePathname();
  return (
    <nav className="hidden lg:block  lg:w-5/12 h-full leading-20 ">
      <ul className=" flex items-center justify-end h-full gap-8 ">
        {list.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href ? "active" : ""
              } py-2 text-md hover:text-gray-800`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
