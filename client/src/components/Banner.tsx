"use client";
import Image from "next/image";
import Link from "next/link";

import { FaAngleRight } from "react-icons/fa6";
import Carousel from "react-multi-carousel";

import banner1 from "#/assets/images/banner1_hd.jpeg";
import banner3 from "#/assets/images/banner3.jpg";
import banner4 from "#/assets/images/banner4.webp";
const tabbarMenu = [
  {
    href: "/",
    title: "Womens  Fashion",
    icon: <FaAngleRight />,
  },
  {
    href: "/",
    title: "Men Fashion",
    icon: <FaAngleRight />,
  },
  {
    href: "/",
    title: "Electronics",
  },
  {
    href: "/",
    title: "Home & Lifestyle",
    icon: <FaAngleRight />,
  },
  {
    href: "/",
    title: "Medicine",
  },
  {
    href: "/",
    title: "Sprots & Outdoor",
    icon: <FaAngleRight />,
  },
  {
    href: "/",
    title: "Baby & Toys",
  },
  {
    href: "/",
    title: "Groceries & Pets",
    icon: <FaAngleRight />,
  },
  {
    href: "/",
    title: "Health & Beauty",
  },
];
const allBanner = [banner1, banner3, banner4];

export default function Banner() {
  return (
    <section className="w-full lg:flex mb-20 ">
      <div className="lg:w-3/12 hidden lg:block   max-h-[500px] py-[30px] pr-[12px] border-r-2 border-[#dbdbdb]">
        <ul>
          {tabbarMenu.map((item, index: number) => (
            <li className="w-full h-full flex items-center" key={index}>
              <Link
                href={item.href}
                className="block w-full h-full py-2 text-md font-semibold hover:text-[#e34646]"
              >
                {item.title}
              </Link>
              {item.icon ? <span>{item.icon}</span> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-9/12 lg:max-h-[500px] lg:py-[30px] lg:pl-[30px] ">
        <Carousel
          // autoPlay
          arrows={false}
          additionalTransfrom={0}
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="container"
          draggable
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
          }}
          rewind
          showDots
          slidesToSlide={1}
          swipeable
        >
          {allBanner.map((imgURL, index) => (
            <article
              key={index}
              className="relative w-full h-[280px] lg:h-[500px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={imgURL}
                alt={`banner-${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </article>
          ))}
        </Carousel>
      </div>

      <div className="mt-4 snap-x">
        <div className="lg:hidden w-full overflow-x-auto whitespace-nowrap px-2 py-3">
          <div className="flex space-x-3">
            {tabbarMenu.map((item, index: number) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-md hover:bg-red-500 hover:text-white transition whitespace-nowrap active:bg-[#e34646]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
