"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import Button, { CustomLeftArrow, CustomRightArrow } from "./Button/Button";
import { useProducts } from "#/context/productContext";

export default function FlashSales() {
  const { products, loading,error} = useProducts();

  if(loading) return <h1>Loading...!</h1>
  if(error) return <h1>Lỗi: {error}</h1>


  return (
    <section className="w-full border-b-1 border-[#b3b3b3]">
      <p className="pl-4 mb-6 border-l-12 border-[#e34646] text-2xl rounded-md font-semibold">
        Todays
      </p>
      <div className="flex items-center justify-between mb-8">
        <h1 className="w-2/6 text-4xl font-semibold">Flash Sales</h1>
        <div className="w-4/6 flex items-center justify-end gap-6 ">
          <h1>
            Ngày: <span>03</span>
          </h1>
          <h1>
            Giờ: <span>03</span>
          </h1>
          <h1>
            Phút: <span>03</span>
          </h1>
          <h1>
            Giây: <span>03</span>
          </h1>
        </div>
      </div>
      <div className="w-full min-h-[400px]">
        <Carousel
          arrows
          additionalTransfrom={0}
          centerMode={false}
          containerClass="carousel-container"
          draggable
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1200 }, items: 4 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          rewind
          slidesToSlide={1}
          swipeable
          itemClass="px-2"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {products.map((product, index) => (
            <article
              className="relative group block w-[270px] h-[370px] transition"
              key={`product__${index}`}
            >
              <div className="absolute w-full  bottom-0   hidden rounded-lg group-hover:flex items-center justify-between py-3 px-2 z-50">                
                <Link href={`/cart`}>
                  <Button text="Thêm vào giỏ hàng" primary w={125} h={56} />              
                </Link>
                <Link href={`/product/${product?.slug}`}>
                  <Button text="Xem Sản phẩm" primary w={125} h={56} />
                </Link>
              </div>
              <Image
                src={product?.image || '/not_found.png'}
                alt={product?.title}
                width={270}
                height={250}
                className="relative object-cover rounded-lg shadow-md"
              />
              <span className="absolute top-4 left-3 w-[55px] h-[27px] bg-[#e34646] text-white rounded text-md text-center font-semibold">
                -{product?.salePercent}%
              </span>
              <h1 className="w-full h-[40px] font-medium leading-[40px]">
                {product?.title}
              </h1>
              <div className="flex items-center gap-3">
                <p className="h-[30px] text-[#e34646] text-lg font-medium leading-[30px]">
                  ${product?.newPrice}
                </p>
                <p className="h-[30px] leading-[30px] font-medium text-sm italic line-through text-black/60">
                  ${product?.oldPrice}
                </p>
              </div>
              <div className="flex items-center h-[30px] leading-[30px]">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < product.countStar ? "#ffad33" : "gray"}
                  />
                ))}
                <p className="px-4 text-black/70 font-medium">
                  ({product?.totalBuy})
                </p>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
      <div className="w-full min-h-[80px] flex items-center justify-center ">
        <Link href="/products">
          <Button text="Xem thêm sản phẩm" primary w={234} h={56} />
        </Link>
      </div>
    </section>
  );
}
