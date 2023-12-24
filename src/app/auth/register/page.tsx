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
import { checkCodeApi, registerApi, senMailApi } from "@/api/auth";
import { useRouter } from "next/navigation";
import XImage from "@/components/core/XImage";

const { Option } = Select;

type RegisterForm = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  gender: string;
};

const RegisterPage = () => {
  const [form] = Form.useForm();
  const [formValidation] = Form.useForm();
  const [submit, setSubmit] = useState(false);
  const [code, setCode] = useState(0);
  const [submitCode, setSubmitCode] = useState(false);
  const [isValidation, setIsValidation] = useState(false);
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
  });
  const onFinish = (value: any) => {
    setFormValue({
      username: value.username,
      password: value.password,
      fullname: value.fullname,
      email: value.email,
      gender: value.gender,
    });
    console.log("Success", value);
    setIsValidation(true);
  };

  const onFinishValidate = (value: any) => {
    setCode(value.code);
    setSubmitCode(true);
    console.log(value);
  };

  useEffect(() => {
    if (!isValidation) {
      return;
    }
    const fetchData = async () => {
      const response = await senMailApi({
        email: formValue?.email,
      });
      console.log(response);
    };
    fetchData();
  }, [formValue?.email, isValidation]);

  useEffect(() => {
    if (!submitCode) {
      return;
    }
    const fetchData = async () => {
      const response = await checkCodeApi({
        email: formValue?.email,
        code: code,
      });
      if (response === "Verify Success") {
        setSubmit(true);
        setSubmitCode(false);
        setCode(0);
      }
    };
    fetchData();
  }, [code, formValue?.email, submitCode]);

  useEffect(() => {
    if (!submit) {
      return;
    }
    const fetchData = async () => {
      try {
        await registerApi(formValue);
        setSubmit(false);
        router.push("/auth/login");
      } catch (error: any) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [formValue, router, submit]);

  const onGenderChange = (value: string) => {
    form.setFieldValue("gender", value);
  };

  return (
    <>
      <ConfigProvider theme={theme}>
        <XCard title="" className="max-w-[60vw] w-[50vw]">
          <div className="flex justify-between">
            <XImage
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
              {!isValidation ? (
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
                      ({}) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            value.split(".").includes("hcmute", "edu")
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "Bạn phải nhập email nhà trường cung cấp "
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <XInput
                      label="Email"
                      placeholder="Nhập email viên của bạn"
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
                    <div>
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
                    </div>
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
              ) : (
                <Form
                  id="validate_form"
                  onFinish={onFinishValidate}
                  form={formValidation}
                >
                  <div className="text-base mb-3">
                    Vui lòng kiểm tra email của bạn và nhập mã xác nhận
                  </div>
                  <Form.Item
                    name="code"
                    rules={[
                      { required: true, message: "Không được bỏ trống ô này" },
                    ]}
                  >
                    <XInput
                      label="Nhập mã"
                      placeholder="Nhập mã bạn nhận được trong Email"
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
                      Xác nhận
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </Card>
          </div>
        </XCard>
      </ConfigProvider>
    </>
  );
};

export default RegisterPage;
