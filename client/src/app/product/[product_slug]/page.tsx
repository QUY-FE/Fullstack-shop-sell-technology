"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

import Button, { CustomLeftArrow, CustomRightArrow } from "#/components/Button/Button";
import Carousel from "react-multi-carousel";
import { FaRotate } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { useProducts } from "#/context/productContext";


export default function Product({
  params,
}: {
  params: { product_slug: string };
}) {
  const { products, loading , error} = useProducts();
  const product = products.find((p) => p.slug === params.product_slug);

  if (!product) return <h1>Không tìm thấy sản phẩm</h1>;
  if (loading) return <h1>Loading...!</h1>;
  if (error) return <h1>Không tìm thấy sản phẩm</h1>;

  // Sản phẩm liên quan (ví dụ: khác slug)
  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <section className="py-10 ">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Ảnh sản phẩm */}
        <div className="w-5/12 flex flex-col items-center gap-4">
          <div className="w-[350px] h-[350px] bg-white flex items-center justify-center rounded-lg shadow">
            <Image
              src={product?.image || '/not_found.png'}
              alt={product?.title || 'Sản phẩm'}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          {/* Ảnh nhỏ (demo lặp lại ảnh chính) */}
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-white rounded flex items-center justify-center border"
              >
                <Image
                  src={product?.image || '/not_found.png'}
                  alt={product?.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Thông tin sản phẩm */}
        <div className="flex-1 w-7/12">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < product.countStar ? "#ffad33" : "gray"} />
            ))}
            <span className="text-gray-500 text-sm">
              ({product.totalBuy} Đánh giá)
            </span>
            <span className="text-green-600 font-semibold ml-2">Còn hàng</span>
          </div>
          <div className="text-2xl font-bold text-primary mb-2">
            ${product.newPrice}
          </div>
          <div className="text-gray-500 line-through mb-4 italic">
            ${product.oldPrice}
          </div>
          <p className="mb-4 text-gray-700">
            Mô tả sản phẩm .
          </p>
          {/* Demo chọn màu, size */}

          <div className="mb-4">
            <div className="mb-2 font-semibold">Size:</div>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button key={size} className="px-3 py-1 border rounded">
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Số lượng + nút mua */}
          <div className="flex items-center gap-2 mb-4">
            <button className="px-3 py-1 border rounded">-</button>
            <span className="px-3">2</span>
            <button className="px-3 py-1 border rounded">+</button>
            <Link href="/product/checkout">
              <Button text="Mua ngay" w={115} h={40} primary />
            </Link>
          </div>
          {/* Thông tin giao hàng */}
          <div className="border rounded p-4 mb-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold flex items-center gap-3"><FaTruckFast size={25} className="text-primary" /> Miễn phí ship</span>
              <span className="text-gray-500 text-sm">
                Nhập địa chỉ để đơn hàng đến nhanh nhất
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold flex items-center gap-3"><FaRotate size={25} className="text-primary"/> Chính sách đổi trả</span>
              <span className="text-gray-500 text-sm">
                Hoàn hàng trong vòng 30 ngày
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Related items */}
      <div className="mt-12">
        <div className="font-bold text-lg mb-4 text-red-500 flex items-center gap-2">
          <span className="w-2 h-6 bg-red-500 rounded mr-2"></span>
          Related Item
        </div>
        <div className="w-full">
          <Carousel
            // autoPlay
            autoPlaySpeed={3000}
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
            {related.map((product, index) => (
              <article
                className="relative group block w-[205px] h-[300px] md:w-[260px] md:h-[320px] lg:w-[270px] lg:h-[370px] transition"
                key={`product__${index}`}
              >
                <Link
                  href={`/product/${product?.slug}`}
                  className="absolute inset-0 hidden rounded-lg group-hover:flex justify-between py-3 px-2 z-50 hover:bg-black/5"
                >
                  <Link href={`/cart`}>
                    <Button text="Thêm vào giỏ hàng" primary w={125} h={56} />
                  </Link>
                  <Link href={`/product/${product?.slug}`}>
                    <Button text="Xem Sản phẩm" primary w={125} h={56} />
                  </Link>
                </Link>
              {/* <div className="absolute inset-0 bg-black/15 hidden group-hover:block z-40 rounded-lg"></div> */}
                <Image
                  src={product?.image || '/not_found.png'}
                  alt={product?.title || 'Sản phẩm'}
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
                  <p className="h-[30px] leading-[30px] font-medium text-sm italic line-through text-black/60 ">
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
      </div>
    </section>
  );
}
