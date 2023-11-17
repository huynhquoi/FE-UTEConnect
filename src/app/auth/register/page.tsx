"use client";

import XInput from "@/components/global/shared/XInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-select";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  userName: z.string().email(),
  password: z.string().min(6),
});

const RegisterPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
  });
  return (
    <>
      <Card style={{ width: "512px" }}>
        <CardHeader>
          <CardTitle className="font-bold text-xl">ĐĂNG KÝ</CardTitle>
          <CardDescription>
            Hãy đăng ký một tài khoản cá nhân của bạn
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form className="w-full space-y-6">
              <XInput label="Email" required placeholder="Email" />
              <XInput label="Mật khẩu" required placeholder="Mật khẩu" />
              <Button type="submit" className="w-full">
                Đăng ký
              </Button>
              <Separator className="my-4" />
              <div className=" flex items-center justify-center">
                <span>
                  Bạn đã có tài khoản?
                  <Link href={"./login"} style={{ color: "red" }}>
                    {" "}
                    Đăng nhập ngay
                  </Link>
                </span>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default RegisterPage;
