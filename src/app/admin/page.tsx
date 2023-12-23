import { redirect } from "next/navigation";

const AdminPage = () => {
  redirect("/admin/statistics");
  return <>Admin Page</>;
};

export default AdminPage;
