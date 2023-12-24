import React from "react";
import { Inter } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Đăng nhập",
  description: "Generated by create next app",
};

const LoginLayout = ({ children }: React.PropsWithChildren) => (
  <div className="flex items-center justify-center w-[100vw] h-[100vh]">
    {children}
  </div>
);

export default LoginLayout;
