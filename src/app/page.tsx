"use client";

import { redirect } from "next/navigation";

const AppPage = () => {
  if (!!localStorage.getItem("response")) {
    redirect("home");
  }
  redirect("auth");
};

export default AppPage;
