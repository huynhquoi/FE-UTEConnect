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
import { getProfileUser } from "@/store/slice";
import { useDispatch } from "react-redux";
import { ApiResponse } from "@/api/type";
import { profileUserApi } from "@/api/user";

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const onFinish = (value: any) => {
    console.log("Success", value);
    setFormValue({
      email: value.email,
      password: value.password,
    });
    setSubmit(true);
  };

  useEffect(() => {
    if (!submit) {
      return;
    }
    const fetchData = async () => {
      try {
        await loginApi(formValue);
        const response: ApiResponse = await profileUserApi();
        dispatch(getProfileUser(response?.data));
        setSubmit(false);
        router.push("/");
      } catch (error: any) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [formValue]);

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
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ background: "#fff", color: "#000" }}
                    className="w-full"
                    href="register"
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
