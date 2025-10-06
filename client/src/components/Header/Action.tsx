"use client";
import { useProducts } from "#/context/productContext";
import Link from "next/link";
import { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaShoppingBag,
  FaRegUserCircle,
} from "react-icons/fa";
import { IoMdSettings, IoMdExit } from "react-icons/io";
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

export default function Action({ currentUser }: { currentUser?: boolean }) {
  const { products } = useProducts();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const handleDeleteInput = (field: string) => {
        if(field === 'keyword') setKeyword('');
        
    }

  return (
    <section className="w-3/12 lg:w-5/12 h-full flex items-center justify-end gap-2">
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
          className="w-[280px] h-[38px] px-2 outline-none bg-[#f5f5f5]"
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
        )
      }
        <button className="w-10 h-10 text-black/70 px-2 hover:bg-black/10 rounded-full active:bg-black/15">
          <FaSearch className="mx-auto text-primary" size={20} />
        </button>

        {/* Dropdown Search */}
        <div className="absolute top-14 left-0 w-full max-h-[50vh] bg-gray-100 rounded-md shadow-lg z-50 p-2 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
          <p className="text-xs text-primary font-semibold mb-2">Hot</p>
          <ul className="mb-2">
            {products.map((product) => (
              <li key={product?._id}>
                <Link
                  href={`/product/${product?.slug}`}
                  className="py-2 pl-2 text-black/75 rounded-md hover:bg-black/10 block"
                >
                  {product?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Phần cart */}
      <Link
        href={currentUser ? "/cart" : "/sign-in"}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 active:bg-black/15"
      >
        <FaShoppingCart className="pb-1 transition mx-auto" size={25} />
      </Link>
      {/* phần user drop down */}
      {currentUser ? (
        <button
          className="relative w-10 h-10 rounded-full  hover:bg-black/10 active:bg-black/5"
          onClick={() => setDropdown(!dropdown)}
        >
          <FaRegUserCircle size={25} className="mx-auto" />
          {dropdown && (
            <>
              {/* Overlay để đóng dropdown khi click ra ngoài */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setDropdown(false)}
              />
              {/* Dropdown menu */}
              <div className="w-screen lg:w-[270px] h-[50vh] px-3 py-2 bg-white shadow-lg absolute top-[50px] lg:top-[45px] right-0 rounded-md z-20 transition">
                <ul>
                  {userMenu.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="my-2 py-2 w-full h-full flex items-center justify-between px-16 rounded-sm hover:bg-black/10"
                      >
                        <p>{item.text}</p>
                        <span>{item.icon}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="border-colorBorder border-t-2">
                    <button className=" my-2 py-2 w-full h-full flex items-center justify-between px-16 rounded-sm hover:bg-black/10">
                      <p>Logout</p>
                      <span>
                        <IoMdExit />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </button>
      ) : null}
    </section>
  );
}
