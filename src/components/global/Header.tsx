"use client"

import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { MainNav } from "./MainNav";
import UserDisplay from "./user/UserDisplay";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const route = useRouter();
  return (
    <>
      <div className="flex items-center justify-between h-14 border-b">
        <div className="flex items-center justify-center ml-4">
          <Link
            href={"/"}
            className="font-bold ml-4"
            style={{ fontSize: "20px" }}
          >
            MyJob
          </Link>
          <MainNav className="ml-12" />
        </div>
        <div className="flex items-center justify-center mr-4">
          {/* <UserDisplay className="mr-3" />
          <ThemeButton /> */}
          <Button className="mr-2" onClick={() => route.push("./auth/login")}>
            Đăng nhập
          </Button>
          <Button
            variant="ghost"
            className="border-solid border-2 border-black"
          >
            Đăng ký
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
