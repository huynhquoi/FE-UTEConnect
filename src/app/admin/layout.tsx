import React from "react";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/AntdRegistry";

import "@/app/globals.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import MainAdminHeader from "@/components/mainLayout/MainAdminHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UTE Connect",
  description: "Generated by create next app",
};

const AdminLayout = ({ children }: React.PropsWithChildren) => (
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

export default AdminLayout;
