"use client";
import { useAuth } from "#/context/authContext";
import { useProducts } from "#/context/productContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaShoppingBag,
  FaBell,
  FaUserAltSlash,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { LuCircleUser } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";

const userMenu = [
  {
    id: 1,
    text: "Setting",
    icon: <IoMdSettings />,
    href: "/settings",
  },
  {
    id: 2,
    text: "My Orders",
    icon: <FaShoppingBag />,
    href: "/MyOrders",
  },
];

export default function Action() {
  const { products } = useProducts();
  const { user } = useAuth();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const pathname = usePathname();

  const handleDeleteInput = (field: string) => {
    if (field === "keyword") setKeyword("");
  };

  return (
    <section className="w-3/12 lg:w-5/12 h-full flex items-center justify-between gap-2  px-2 lg:px-4">
      {/* // Phần search */}
      <div className="relative bg-[#f5f5f5] hidden rounded-lg lg:flex items-center px-2 py-1 group  transition-all duration-200">
        <input
          type="text"
          value={keyword}
          name="keyword"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
          placeholder="Bạn cần tìm gì?"
          className="w-[240px] h-[38px] px-2 outline-none bg-[#f5f5f5]"
        />
        {keyword.length > 0 ? (
          <p
            onClick={() => handleDeleteInput("keyword")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10"
          >
            <TiDelete size={26} />
          </p>
        ) : (
          <p className="w-10 h-10"></p>
        )}
        <button className="w-10 h-10 text-black/70 px-2 hover:bg-black/10 rounded-full active:bg-black/15">
          <FaSearch className="mx-auto text-primary" size={20} />
        </button>

        {/* Dropdown Search */}
        <div className="absolute top-14 left-0 w-full min-h-screen bg-gray-100 rounded-md shadow-lg z-50 p-2 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
          <p className="text-xs text-primary font-semibold mb-2">Hot</p>
          <ul className="mb-2">
            {products.map((product) => (
              <li key={product?._id}>
                <Link
                  href={`/products/${product?.slug}`}
                  className="py-2 pl-2 text-black/75 rounded-md hover:bg-black/10 block"
                >
                  {product?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* Phần cart */}
        {
          user ? (
            <Link
              href={"/cart" }
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 active:bg-black/15"
            >
              <FaShoppingCart className="pb-1 transition mx-auto" size={25} />
              <div
                className={`${
                  pathname === "/cart" ? "block" : "hidden"
                } w-full h-[3px] absolute bottom-0 left-0 rounded-full bg-gradient-to-r from-red-500 to-orange-400`}
              ></div>
            </Link>
          ) : null
        }
        {/* profile user */}
        <Link
          href={user ? "/profile" : "/login"} 
          className="relative w-10 h-10 flex items-center justify-center  rounded-full hover:bg-black/10"
        >
          
          {
            user ? <LuCircleUser size={25} /> : <FaUserAltSlash size={25} />
          }
          <div
            className={`${
              pathname === "/profile" ? "block" : "hidden"
            } w-full h-[3px] absolute bottom-0 left-0 rounded-full bg-gradient-to-r from-red-500 to-orange-400`}
          ></div>
        </Link>
        {
          user ? (
          <button
            onClick={() => setDropdown(!dropdown)}
            className="relative w-10 h-10 flex items-center justify-center  rounded-full hover:bg-black/10"
          >
            <FaBell size={22} />
          </button>
          ) : null
        }
      </div>
    </section>
  );
}
