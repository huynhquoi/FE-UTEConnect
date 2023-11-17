"use client";

import HomeSearch from "@/components/global/home/HomeSearch";

const ImageUrl =
  "https://i.pinimg.com/originals/e2/d3/5e/e2d35e04854f742b459c1c50267713e7.jpg";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex mx-28 mt-16">
        <div className="">
          <p className="text-5xl mt-12">Chào mừng bạn đến với </p>
          <p className="text-6xl pt-4 font-bold">My Job</p>
          <p className="text-2xl w-[720px] mt-7">
            Việc làm IT không chỉ là công việc, nó là một cuộc phiêu lưu. Bắt
            đầu cuộc hành trình của bạn ngay tại đây!
          </p>
          <HomeSearch className="mt-12 w-[600px]" />
        </div>
        <img
          className="block rounded-xl h-3/5 w-3/5 ml-10"
          src={ImageUrl}
          alt="Logo"
        />
      </div>
    </main>
  );
}
