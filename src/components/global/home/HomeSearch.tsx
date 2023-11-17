"use client"

import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import XInput from "../shared/XInput";
import XSelect from "../shared/XSelect";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";

type CardProps = React.ComponentProps<typeof Card>;

const FormSchema = z.object({
  city: z.string(),
  keyword: z.string(),
});

export default function HomeSearch({ className, ...props }: CardProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [formValue, setFormValue] = useState({
    city: "all",
    keyword: "",
  });

  const city = useMemo(
    () => [
      {
        label: "Tất cả thành phố",
        value: "all",
      },
      {
        label: "Hà nội",
        value: "ha-noi",
      },
      {
        label: "Đà Nẵng",
        value: "da-nang",
      },
      {
        label: "Hồ Chí Minh",
        value: "ho-chi-minh",
      },
      {
        label: "Khác",
        value: "khac",
      },
    ],
    [formValue.city]
  );

  const handleCityChange = (value: string) =>
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      city: value,
    }));

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      keyword: keyword,
    }));
  };

  console.log("A");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Tìm kiếm</CardTitle>
        <CardDescription>Bắt đầu tìm kiếm công việc</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form className="w-full space-y-6" onSubmit={onSubmit}>
            <XSelect
              placeholder="Thành phố"
              option={city}
              defaultValue={formValue.city}
              onValueChange={handleCityChange}
            />
            <XInput
              placeholder="Nhập từ khóa theo kỹ năng, chức vụ, công ty...."
              onChange={handleKeywordChange}
            />
            <Button type="submit">
              Tìm kiếm <ArrowRightIcon className="text-white h-5 w-5 ml-2" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
