"use client";

import React, { useEffect } from "react";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/AntdRegistry";

import "@/app/globals.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MainAdminHeader from "@/components/mainLayout/MainAdminHeader";
import { useGlobalStore } from "@/hook/useUser";
import { redirect } from "next/navigation";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "UTE Connect",
//   description: "Generated by create next app",
// };

const AdminLayout = ({ children }: React.PropsWithChildren) => {
  const user = useGlobalStore();
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (!user?.userid) {
      return;
    }
    if (user?.role?.roleid !== 1) {
      localStorage?.removeItem("isLogin");
      redirect("/authAdmin/login");
    }
  }, [user?.role, user?.userid]);
  return (
    <StyledComponentsRegistry>
      <Layout>
        <MainAdminHeader />
        <Content
          className="bg-gray-100 pt-6"
          style={{ minHeight: "95vh", width: "99w" }}
        >
          {children}
        </Content>
      </Layout>
    </StyledComponentsRegistry>
  );
};

export default AdminLayout;
