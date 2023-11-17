import Link from "next/link";

import { cn } from "@/lib/utils";
import MenuItem from "./MenuItem";

const Menu = [
  {
    menuLabel: "Việc làm IT",
    menuChild: [
      {
        menuLabel: "Việc làm theo cấp bậc",
        href: "./home/job",
      },
      {
        menuLabel: "Việc làm theo kỹ năng",
        href: "./",
      },
      {
        menuLabel: "Việc làm theo công ty",
        href: "./",
      },
      {
        menuLabel: "Việc làm theo thành phố",
        href: "./",
      },
    ],
  },
  {
    menuLabel: "Top công ty IT",
    menuChild: [
      {
        menuLabel: "Top công ty tốt nhất",
        href: "./",
      },
      {
        menuLabel: "Review công ty",
        href: "./",
      },
    ],
  },
  {
    menuLabel: "Blog",
    menuChild: [
      {
        menuLabel: "Báo cáo lương IT",
        href: "./",
      },
      {
        menuLabel: "Sự nghiệp IT",
        href: "./",
      },
      {
        menuLabel: "Ứng tuyển và thăng tiến",
        href: "./",
      },
      {
        menuLabel: "Chuyên môn IT",
        href: "./",
      },
    ],
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {Menu.map((i) => (
        <MenuItem key={i.menuLabel} menuLabel={i.menuLabel} menuChild={i.menuChild} />
      ))}
    </nav>
  );
}
