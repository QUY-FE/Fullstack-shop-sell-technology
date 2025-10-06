'use client'
import Banner from "#/components/Banner";
import FlashSales from "#/components/FlashSales";

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSales targetDate="2025-10-06T22:01:59" />
    </>
  );
}
