"use client";
import Image from "next/image";
import productURL from "#/assets/images/keyboard.jpg";
import { useState } from "react";
import Button from "#/components/Button/Button";
import Link from "next/link";
import { toast } from "react-toastify";
const initialCartList = [
  {
    img: productURL,
    title: "Ban phim co k550",
    price: 120,
    quantity: 1,
  },
  {
    img: productURL,
    title: "Ban phim co k550",
    price: 120,
    quantity: 1,
  },
];

export default function Cart() {
  const [cartList, setCartList] = useState(initialCartList);
  const [checkVoucher, setCheckVoucher] = useState("");

  const handleSumbit = () => {
    if (checkVoucher.length > 0) {
      console.log(checkVoucher);
      toast.success("Bạn nhận được voucher giảm 5%");
    } else {
      toast.warning("Bạn chưa nhập mã");
    }
  };

  const handleQuantityChange = (index: number, value: number) => {
    const updatedCart = cartList.map((item, i) =>
      i === index ? { ...item, quantity: value > 0 ? value : 1 } : item
    );
    setCartList(updatedCart);
  };

  return (
    <section>
      <div className="mt-6 flex items-center justify-between">
        <Link href="/">
          <Button w={218} h={56} text="Quay về trang chủ" />
        </Link>
        <Button w={218} h={56} primary text="Xoá Giỏ hàng" />
      </div>
      <ul className="w-full h-[72px] shadow flex items-center justify-between mt-10 rounded-2xl  text-center">
        <li className="w-1/4">Sản phẩm</li>
        <li className="w-1/4">Giá</li>
        <li className="w-1/4">Số lượng</li>
        <li className="w-1/4">Tổng tiền</li>
      </ul>
      {cartList.map((item, index) => (
        <article
          className="w-full max-h-[102px] shadow-lg rounded-2xl flex items-center my-4 p-2"
          key={index}
        >
          <div className="w-1/4 h-full flex items-start gap-2.5">
            <Image
              src={item.img}
              alt=""
              className="object-cover bg-cover rounded"
              width={65}
            />
            <div className="text-sm font-semibold">{item.title}</div>
          </div>
          <div className="w-1/4 h-full flex items-center justify-center font-semibold">
            <p>${item.price}</p>
          </div>
          <div className="w-1/4 h-full flex items-center justify-center font-semibold">
            <input
              type="number"
              value={item.quantity}
              min={1}
              className="w-[50px] outline outline-[1.7px] pl-2 outline-black/90 rounded"
              onChange={(e) =>
                handleQuantityChange(index, Number(e.target.value))
              }
            />
          </div>
          <div className="w-1/4 h-full flex items-center justify-center font-semibold">
            <p>${item.price * item.quantity}</p>
          </div>
        </article>
      ))}
      <div className="my-4 flex items-center ">
        <div className="w-1/2 min-h-[400px]">
          <form
            action=""
            method="post"
            className=" flex items-center gap-4"
            onSubmit={handleSumbit}
          >
            <label htmlFor="checkVoucher" className="font-semibold">Nhập mã phiếu:</label>
            <input
              type="text"
              placeholder="VD giam19"
              name="checkVoucher"
              value={checkVoucher}
              onChange={(e) => setCheckVoucher(e.target.value)}
              className="px-4 py-3 rounded-md  outline-2 outline"
            />

            <Button
              type="submit"
              primary
              w={218}
              h={56}
              text="Áp dụng phiếu giảm giá"
            />
          </form>
        </div>
        <div className="w-1/2 min-h-[400px] pl-32 mt-4 ">
          <div className="px-6 py-8 border-[1.8px] rounded shadow-lg">
            <h1 className="text-2xl">Hoá đơn</h1>
            <div className="flex items-center justify-between border-b-2 border-[#b3b3b3] py-5">
              <p>Tổng tiền</p>
              <p>$111</p>
            </div>
            <div className="flex items-center justify-between border-b-2 border-[#b3b3b3] py-5">
              <p>Ship</p>
              <p>Free</p>
            </div>

            <div className="flex justify-center my-4">
              <Link href="/product/checkout">
                <Button primary w={218} h={56} text="Thanh toán" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
