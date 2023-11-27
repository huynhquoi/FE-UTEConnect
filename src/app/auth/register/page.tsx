"use client";

import XCard from "@/components/core/XCard";
import XInput from "@/components/core/XInput";
import { LOGIN_IMAGE } from "@/theme/imageLink";
import theme from "@/theme/themeConfig";
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  DatePickerProps,
  Form,
  Image,
  Input,
  Select,
} from "antd";
import "./style.scss";
import { useEffect, useState } from "react";
import { registerApi } from "@/api/auth";
import { useRouter } from "next/navigation";

const { Option } = Select;

type RegisterForm = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  gender: string;
  birthday: string;
  phone: string;
  address: string;
};

const RegisterPage = () => {
  const [form] = Form.useForm();
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  const onFinish = (value: any) => {
    setFormValue({
      username: value.username,
      password: value.password,
      fullname: value.fullname,
      email: value.email,
      gender: value.gender,
      birthday: value.birthday,
      phone: value.phone,
      address: value.address,
    });
    console.log("Success", value);
    setSubmit(true);
  };

  useEffect(() => {
    if (!submit) {
      return;
    }
    const fetchData = async () => {
      try {
        await registerApi(formValue);
        setSubmit(false);
        // router.push("/");
      } catch (error: any) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [submit]);

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    phone: "",
    address: "",
  });

  const onGenderChange = (value: string) => {
    form.setFieldValue("gender", value);
  };
  const onBirthdayChange: DatePickerProps["onChange"] = (date, dateString) => {
    form.setFieldValue("birthday", dateString);
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
              <Form id="register_form" onFinish={onFinish} form={form}>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Tên đăng nhập"
                    placeholder="Nhập tên đăng nhập hoặc email"
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
                <Form.Item
                  name="fullname"
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
                  name="email"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Email"
                    placeholder="Nhập email của bạn"
                    useLabel={true}
                    required={true}
                  ></XInput>
                </Form.Item>
                <Form.Item
                  name="gender"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <div className="font-bold flex mb-1">
                    Giới tính
                    <p className="text-red-600"> *</p>
                  </div>
                  <Select
                    placeholder={"Chọn giới tính "}
                    allowClear
                    onChange={onGenderChange}
                  >
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                    <Option value="other">Khác</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="birthday"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <div className="font-bold flex mb-1">
                    Ngày sinh
                    <p className="text-red-600"> *</p>
                  </div>
                  <DatePicker
                    onChange={onBirthdayChange}
                    placeholder="Chọn ngày sinh của bạn"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại"
                    useLabel={true}
                    required={true}
                  ></XInput>
                </Form.Item>
                <Form.Item
                  name="address"
                  rules={[
                    { required: true, message: "Không được bỏ trống ô này" },
                  ]}
                >
                  <XInput
                    label="Địa chỉ"
                    placeholder="Nhập địa chỉ"
                    useLabel={true}
                    required={true}
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
