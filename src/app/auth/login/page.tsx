"use client";

import XCard from "@/components/core/XCard";
import XInput from "@/components/core/XInput";
import { LOGIN_IMAGE } from "@/theme/imageLink";
import theme from "@/theme/themeConfig";
import { Button, Card, ConfigProvider, Form, Image, Input } from "antd";
import "./style.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { loginApi } from "@/api/auth";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const onFinish = (value: any) => {
    console.log("Success", value);
    setLoading(true);
    setFormValue({
      username: value.email,
      password: value.password,
    });
    setSubmit(true);
  };

  useEffect(() => {
    if (!submit) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    const fetchData = async () => {
      try {
        const responseLogin = await loginApi(formValue);
        setSubmit(false);
        localStorage.setItem("response", responseLogin.id);
        router.push("/");
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [formValue, router, submit]);

  return (
    <>
      <ConfigProvider theme={theme}>
        <XCard title="" className="max-w-[60vw] w-[50vw]">
          <div className="flex justify-between">
            <Image
              width={450}
              src={LOGIN_IMAGE}
              preview={false}
              className="rounded-md"
            />
            <Card
              bordered={false}
              style={{ width: "25vw" }}
              className="login__card"
            >
              <p className="font-bold text-xl mb-5">Đăng nhập</p>
              <Form
                id="login_form"
                onFinish={onFinish}
                form={form}
                onSubmitCapture={(e) => e.preventDefault}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Tên đăng nhập"
                    placeholder="Nhập tên đăng nhập"
                    useLabel={true}
                    required={true}
                  ></XInput>
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Mật khẩu"
                    placeholder="Nhập tên mật khẩu"
                    useLabel={true}
                    required={true}
                    type="password"
                  ></XInput>
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    style={{ background: "#000", color: "#fff" }}
                    className="w-full"
                    loading={loading}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ background: "#fff", color: "#000" }}
                    className="w-full"
                    href="register"
                    disabled={loading}
                  >
                    Đăng ký
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </XCard>
      </ConfigProvider>
    </>
  );
};

export default LoginPage;
