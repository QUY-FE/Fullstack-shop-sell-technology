"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

import {
  FaHeadphonesAlt,
  FaShippingFast,
  FaFacebookSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { GoShieldCheck, GoPaperAirplane } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { MdLocationPin, MdMail } from "react-icons/md";

import qrAppURL from "#/assets/images/QR.jpg";
import nameAppURL from "#/assets/images/name.jpg";
import logoAppURL from "#/assets/images/logo.jpg";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  const igLink = "https://www.instagram.com/";
  const fbLink = "https://www.facebook.com/";
  const ttLink = "https://www.tiktok.com/";
  const xLink = "https://x.com/";

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length > 0) {
      console.log({ email });
      setEmail("");
      toast.success("voucher giảm 15% sẽ sớm gửi đến bạn", {
        position: "top-right",
      });
    } else {
      toast.error("Bạn chưa nhập Email", {
        position: "top-right",
      });
    }
  };
  return (
    <footer className="w-full min-h-[300px] bg-black">
      <div className="w-full max-h-[400px] mt-10 flex gap-4 bg-white border-b-[2.5px] border-colorBorder">
        <div className="w-1/3 p-4 text-center">
          <p className="w-[60px] h-[60px] flex items-center justify-center bg-black/25 rounded-full mx-auto mb-4">
            <span className="w-[45px] h-[45px] flex items-center justify-center bg-black/90 text-white rounded-full">
              <FaHeadphonesAlt size={25} />
            </span>
          </p>
          <h1 className="h-[80px] text-3xl font-semibold mb-2">Tư vấn 24/7</h1>
          <p className="h-[60px] text-black/85">
            Chúng tôi luôn luôn lắng nghe và tư vấn khi bạn gọi
          </p>
        </div>
        <div className="w-1/3 p-4 text-center">
          <p className="w-[60px] h-[60px] flex items-center justify-center bg-black/25 rounded-full mx-auto mb-4">
            <span className="w-[45px] h-[45px] flex items-center justify-center bg-black/90 text-white rounded-full">
              <FaShippingFast size={25} />
            </span>
          </p>
          <h1 className="h-[80px] text-3xl font-semibold mb-2">
            Miễn phí và Giao hàng nhanh
          </h1>
          <p className="text-black/85">
            Đương nhiên là sẽ đàm bảo hàng đến tay bạn sẽ ko móm méo{" "}
          </p>
        </div>
        <div className="w-1/3 p-4 text-center">
          <p className="w-[60px] h-[60px] flex items-center justify-center bg-black/25 rounded-full mx-auto mb-4">
            <span className="w-[45px] h-[45px] flex items-center justify-center bg-black/90 text-white rounded-full">
              <GoShieldCheck size={25} />
            </span>
          </p>
          <h1 className="h-[80px] text-3xl font-semibold mb-2">
            Chính sách hoàn hàng
          </h1>
          <p className="h-[60px] text-black/85 ">
            Bạn có thể hoàn hàng trong vòng 30 ngày
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] h-full mx-auto pt-10 flex text-white">
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Theo dõi</h1>
          <li className="py-2 my-2">Giảm 15% cho đơn hàng đầu tiên</li>
          <li className="w-full h-[50px] ">
            <form
              action=""
              method="post"
              className="w-full h-full shadow-lg rounded-lg flex items-center bg-black text-white border-2 border-colorBorder"
              onSubmit={(e) => handleOnSubmit(e)}
            >
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Nhập Email"
                className="w-5/6 h-full pl-3 outline-none rounded-lg bg-black"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <button
                type="submit"
                className="w-1/6 h-full flex items-center justify-center  hover:bg-white/40 active:bg-white/55"
              >
                <GoPaperAirplane size={25} />
              </button>
            </form>
          </li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Hỗ trợ</h1>
          <li className="py-2 flex gap-4">
            <span>
              <MdLocationPin size={15} />
            </span>
            <span className="text-sm">Đồng Đăng,TP.Lạng Sơn</span>
          </li>
          <li className="py-2 flex items-center gap-4">
            <span>
              <MdMail size={14} />
            </span>

            <span className="text-sm">hotrokhachhang@gmail.com</span>
          </li>
          <li className="py-2 flex items-center gap-4">
            <span>
              <FaPhoneAlt size={12} />
            </span>
            <span className="text-sm">029453853239</span>
          </li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Khác</h1>
          <li>
            <Link href="/" className="block w-full h-full py-2 hover:underline">
              Điều khoản người dùng
            </Link>
          </li>
          <li>
            <Link href="/" className="block w-full h-full py-2 hover:underline">
              Chính sách bảo mật
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block w-full h-full py-2 hover:underline"
            >
              Liên hệ
            </Link>
          </li>
          <li>
            <Link href="/" className="block w-full h-full py-2 hover:underline">
              FAQ
            </Link>
          </li>
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Tài khoản</h1>
          <li>
            <Link
              href="/settings"
              className="block w-full h-full py-2 hover:underline"
            >
              Tài khoản của tôi
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href="/sign-in" className="block h-full py-2 hover:underline">
              Đăng Nhập
            </Link>
            /
            <Link href="/register" className="block  h-full py-2  hover:underline">
              Tạo tài khoản
            </Link>
          </li>
          <li>
            <Link href="/cart" className="block w-full h-full py-2 hover:underline">
              Giỏ hàng
            </Link>
          </li>
          {/* <li>
            <Link href="/" className="block w-full h-full py-2 hover:underline">
              Shop
            </Link>
          </li> */}
        </ul>
        <ul className="w-1/5 h-[300px] px-3 text-sm">
          <h1 className="py-2 text-2xl font-semibold">Cài đặt app</h1>
          <li className="py-2">{" Tiết kiệm đến $3 khi tải App :))"}</li>
          <li className="py-2 flex items-center space-x-4">
            <Image src={qrAppURL} alt="ảnh QR" width={90} height={80} />
            <div className="flex-col  space-y-1">
              <Image src={logoAppURL} alt="logo app" width={110} height={30} />
              <Image src={nameAppURL} alt="name app" width={110} height={30} />
            </div>
          </li>
          <li className="py-2">
            <ul className="flex items-center">
              <li>
                <Link
                  href={igLink}
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   "
                >
                  <FaInstagram size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={fbLink}
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   "
                >
                  <FaFacebookSquare size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={ttLink}
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   "
                >
                  <AiFillTikTok size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={xLink}
                  target="_blank"
                  className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/20 hover:scale-105   "
                >
                  <CiTwitter size={25} />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p className="bg-black text-xs text-white/40 py-2.5 text-center  border-t-[2.5px] border-[#b3b3b3]">
        &copy; 2025 - Make with 🧠- by Quý Nguyễn,
      </p>
    </footer>
  );
}
