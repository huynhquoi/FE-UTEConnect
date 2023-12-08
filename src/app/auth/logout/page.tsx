"use client";

import { redirect } from "next/navigation";

const Logout = () => {
  if (typeof window === "undefined") {
    return;
  } else {
    localStorage.removeItem("response");
    redirect("/");
  }
};

export default Logout;
