"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Icons } from "../../shared/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type CardProps = React.ComponentProps<typeof Card>;

const JobCard = ({ className, ...props }: CardProps) => {
  return (
    <>
      <Card className={cn("", className)} {...props}>
        <CardHeader>
          <CardTitle className="h-8 flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-start">
                <span className="font-bold mb-2">Cong ty A</span>
                <span className="font-light text-[12px]">
                  Đăng vào 3h trước
                </span>
              </div>
            </div>
            <div className=" flex justify-between">
              <Button className="mr-2">
                <Icons.send className="fill-white h-6 w-6 mr-2" /> Ứng tuyển
                ngay
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Icons.moreVertical className="h-6 w-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className="flex items-center justify-start">
                    <Icons.save className="h-5 w-5 mr-2" />
                    Lưu ngay
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-start">
                    <Icons.send className=" h-5 w-5 mr-2" />
                    Chia sẻ
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-start">
                    <Icons.eye className=" h-5 w-5 mr-2" />
                    Xem chi tiết
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="grid gap-4 mt-4">
          <span className="text-xl font-bold">
            Senior Developer ReactJs/NextJs
          </span>

          <span className="text-ellipsis overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            fringilla tellus nibh, sit amet mollis mauris consequat in. Sed
            vitae dolor eu risus tincidunt rutrum lacinia in nunc. Nam bibendum
            nisl lacus, eu mattis elit molestie non. Curabitur dignissim
            pellentesque velit a accumsan. Vivamus nec metus nisl. Integer in
            egestas arcu. Ut purus purus, rhoncus et lectus non, congue
            scelerisque augue. Phasellus quis risus ligula. Donec ornare eu arcu
            vitae pretium. Aenean vitae leo ante. Nulla sodales eros quis sem
            tincidunt blandit. Aenean consequat, velit sit amet consequat
            molestie, sapien ante porttitor quam, ut dapibus augue ipsum ac
            odio. Vivamus pharetra, nulla eget eleifend imperdiet, ligula nibh
            fringilla orci, vitae dictum ipsum enim ac neque. Nulla tincidunt
            convallis ullamcorper. Etiam purus urna, auctor quis venenatis
            vitae, viverra vel ex. Curabitur vitae leo diam. Phasellus ut erat
            id ligula commodo imperdiet. Sed sit amet lectus metus. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Fusce vulputate,
            metus sed interdum semper, tortor turpis scelerisque risus, id
            dapibus nisl dui at sem. Nulla aliquam congue mollis. Nunc tempus
            nibh eget ipsum ornare, lacinia finibus purus interdum. Ut gravida
            risus ac tortor euismod blandit. Maecenas varius nisi sed justo
            accumsan, imperdiet maximus nunc congue. Quisque dignissim nisl in
            finibus convallis. Suspendisse at nulla at nisl consectetur lobortis
            et consequat nisl.
          </span>
        </CardContent>
      </Card>
    </>
  );
};

export default JobCard;
