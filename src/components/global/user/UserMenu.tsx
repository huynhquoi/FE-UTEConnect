"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../shared/Icons";

type CardProps = React.ComponentProps<typeof Card>;

const UserMenu = ({ className, ...props }: CardProps) => {
  return (
    <>
      <Card className={cn("", className)} {...props}>
        <CardHeader>
          <CardTitle className="h-8">
            <span className="font-bold">Cá nhân hóa</span>
          </CardTitle>
          <CardContent className="grid gap-4 p-0">
            <Link href="./" className="flex items-center justify-start">
              <Icons.user className="h-5 w-5 mr-2 mb-1" />
              Hồ sơ cá nhân
            </Link>
            <Link href="./" className="flex items-center justify-start">
              <Icons.job className="h-5 w-5 mr-2 mb-1" />
              Việc làm của bạn
            </Link>
            <Link href="./" className="flex items-center justify-start">
              <Icons.save className="h-5 w-5 mr-2 mb-1" />
              Công việc đã lưu
            </Link>
            <Link href="./" className="flex items-center justify-start">
              <Icons.follow className="h-5 w-5 mr-2 mb-1" />
              Đang theo dõi
            </Link>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default UserMenu;
