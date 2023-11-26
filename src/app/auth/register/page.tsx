"use client";

import XCard from "@/components/core/XCard";
import XInput from "@/components/core/XInput";
import { LOGIN_IMAGE } from "@/theme/imageLink";
import theme from "@/theme/themeConfig";
import { Button, Card, ConfigProvider, Form, Image, Input } from "antd";
import "./style.scss";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    console.log("Success", value);
  };

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
              <p className="font-bold text-3xl mb-5">Đăng ký</p>
              <Form id="login_form" onFinish={onFinish} form={form}>
                <Form.Item
                  name="fullName"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Tên của bạn"
                    placeholder="Nhập tên của bạn"
                    useLabel={true}
                    required={true}
                  ></XInput>
                </Form.Item>
                <Form.Item
                  name="username"
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
                    Đăng ký
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ background: "#fff", color: "#000" }}
                    className="w-full"
                    href="login"
                  >
                    Đăng nhập
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

export default RegisterPage;
