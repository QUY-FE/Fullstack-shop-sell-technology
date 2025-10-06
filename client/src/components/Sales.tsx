'use client'

import Link from "next/link"

export default function Sales(
    {
        hasSales = false, 
        totalSales = 0, 
        titleSales = 'Summer Sale For All Swim Suits And Free Express Delivery' 
    }: { hasSales?: boolean , totalSales?: number , titleSales?: string}) {
  
    return(
        <div>
        {/* Nếu isSales(Quảng Cáo) = true hiện thông báo giảm giá*/}
        {
            hasSales ? 
            (
            <div className="w-full h-[36px] bg-black">
                <p className="text-white block w-full h-full text-center leading-[36px] text-[13px]">
                {titleSales} - OFF {totalSales}%! 
                <span className="font-bold underline ml-3">
                    <Link href='/'>
                        Shop now
                    </Link>
                </span> 
                </p>
            </div>
            ) : null
        }
        </div>
    )
}