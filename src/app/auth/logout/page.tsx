"use client";

import { redirect } from "next/navigation";

const Logout = () => {
  localStorage.removeItem("response");
  redirect("/");
};

export default Logout;
