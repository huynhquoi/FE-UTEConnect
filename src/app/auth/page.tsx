import { redirect, useRouter } from "next/navigation";

const AuthPage = () => {
  redirect("./auth/login");
};

export default AuthPage;
