'use client'
import Link from "next/link";
import { useState } from "react";
import { FaChartBar } from "react-icons/fa6";

export default function NavbarMobile({list = []}: {list?: {id:number,name:string,href:string}[]}) {
    const [dropdown, setDropdown] = useState<boolean>(false);
    return(
         <nav className="w-3/12 sm:block lg:hidden h-full leading-20 flex items-center pl-4 relative">
            <span className="flex w-1/3 h-full items-center text-black/85 " onClick={() => setDropdown(!dropdown)}>
              <FaChartBar size={22} />
              {dropdown && (
                <>
                  {/* Overlay để đóng dropdown khi click ra ngoài */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setDropdown(false)}
                  />
                  {/* Dropdown menu */}
                  <div className="w-screen bg-gray-50 shadow-md absolute top-[80px] left-0 rounded-md px-2 z-20">
                    <ul>
                      {list.map((item) => (
                        <li
                          className="text-lg font-bold"
                          key={item.id}
                        >
                          <Link
                            href={item.href}
                            className="w-full h-full block text-lg px-8 py-2 text-right"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </span>
          </nav>
    );
}