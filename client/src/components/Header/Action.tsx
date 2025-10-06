'use client'
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart,FaSearch,FaShoppingBag,FaRegUserCircle } from "react-icons/fa";
import { IoMdSettings,IoMdExit } from "react-icons/io";

const userMenu = [
    {
        id: 1,
        text: 'Setting',
        icon: <IoMdSettings />,
        href: '/settings'
    },
    {
        id: 2,
        text: 'My Orders',
        icon: <FaShoppingBag />,
        href: '/MyOrders'
    },
]

export default function Action({currentUser}: {currentUser?: boolean}) {
    const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <section className="w-3/12 lg:w-5/12 h-full flex items-center justify-end gap-6">
      <div className="bg-[#f5f5f5] hidden  rounded-md lg:flex items-center px-2 py-1">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-[244px] h-[38px] px-2 outline-none bg-[#f5f5f5]" 
        />

        <button className="w-10 h-10 text-black/70 px-2 hover:bg-black/10 rounded-full active:bg-black/15">
          <FaSearch className="mx-auto text-primary " size={20} />
        </button>
      </div>
      <Link href={currentUser ? '/cart' :'/sign-in'} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 active:bg-black/15">
        <FaShoppingCart className="pb-1 transition mx-auto" size={25} />
      </Link>
      {
        currentUser ? (
        <button className="relative w-10 h-10 rounded-full  hover:bg-black/10 active:bg-black/5" onClick={() => setDropdown(!dropdown)}>
            <FaRegUserCircle size={25} className="mx-auto"/>
            {dropdown && (
            <>
                {/* Overlay để đóng dropdown khi click ra ngoài */}
                <div
                className="fixed inset-0 z-10"
                onClick={() => setDropdown(false)}
                />
                {/* Dropdown menu */}
                <div className="w-screen lg:w-[300px] bg-white shadow-lg absolute top-[50px] lg:top-[45px] right-0 rounded-md z-20 transition">
                <ul>
                    {userMenu.map(item => (
                    <li
                        key={item.id}
                    >
                        <Link href={item.href} className="py-2 w-full h-full flex items-center justify-between px-16 rounded-md hover:bg-black/10">
                            <p>{item.text}</p>
                            <span>{item.icon}</span>
                        </Link>
                    </li>
                    ))}
                    <li className="border-colorBorder border-t-2">
                      <button className="py-2 w-full h-full flex items-center justify-between px-16 rounded-md hover:bg-black/10">
                            <p>Logout</p>
                            <span><IoMdExit /></span>
                      </button>
                    </li>
                </ul>
                </div>

            </>
            )}
        </button>
        ) : 
        null
      }
    </section>
  );
}
