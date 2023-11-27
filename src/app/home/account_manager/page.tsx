"use client";

import { useRouter } from "next/navigation";

const AccountManagerPage = () => {
  const router = useRouter();
  const accountId = "abcdef";

  router.push(`/home/account_manager/${accountId}`);

  return <>Hello Account</>;
};

export default AccountManagerPage;
