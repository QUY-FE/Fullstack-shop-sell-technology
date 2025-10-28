'use client'
import Banner from "#/components/Banner";
import FlashSales from "#/components/FlashSales";

export default function Home() {
  return (
    <>
      <Banner />
      <FlashSales targetDate="2026-12-30T22:01:59" />
    </>
  );
}
