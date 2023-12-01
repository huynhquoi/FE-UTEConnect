import {
  Avatar,
  Button,
  Card,
  CardProps,
  Col,
  ConfigProvider,
  DatePicker,
  DatePickerProps,
  Form,
  Modal,
  Row,
  Select,
} from "antd";
import { useState } from "react";
import XInput from "../core/XInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { User } from "@/graphql/controller-types";
import { format } from "date-fns";
import dayjs from "dayjs";

const { Option } = Select;

const AccountCardHeader = ({ ...props }: CardProps) => {
  const [form] = Form.useForm();
  const [submit, setSubmit] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [formValue, setFormValue] = useState({
    username: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    phone: "",
    address: "",
  });

  const profileUser = useSelector(
    (state: RootState) => state.sliceReducer.profileUser
  ) as User;

  console.log(profileUser);

  const onGenderChange = (value: string) => {
    form.setFieldValue("gender", value);
  };
  const onBirthdayChange: DatePickerProps["onChange"] = (date, dateString) => {
    form.setFieldValue("birthday", dateString);
  };

  const onFinish = () => {
    console.log(formValue);
  };

  return (
    <>
      <ConfigProvider>
        <Card {...props}>
          <Row>
            <Col span={4}>
              <div className="ml-5">
                <Avatar
                  size={172}
                  src="https://i.pinimg.com/originals/9d/c0/27/9dc02710eb05461cea04864d2c64daa1.jpg"
                />
              </div>
            </Col>
            <Col span={20}>
              <div
                className="flex items-center justify-between"
                style={{ height: "100%" }}
              >
                <div className="flex flex-col items-start">
                  <div className="font-bold text-4xl ml-4">Kinse Tom</div>
                  <div className=" text-lg ml-4 mt-2">Bạn đã có 4 bài viết</div>
                </div>
                <div className="flex items-start">
                  <Button>Đăng bài</Button>
                  <Button className="ml-2" onClick={() => setEditVisible(true)}>
                    Chỉnh sửa tài khoản
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <Modal
          open={editVisible}
          title="Chỉnh sửa thông tin cá nhân"
          onOk={() => setEditVisible(false)}
          onCancel={() => setEditVisible(false)}
          maskClosable={false}
          width={800}
          centered
          okButtonProps={{
            style: {
              backgroundColor: "#000000",
              color: "#ffffff",
              boxShadow: "none",
            },
          }}
          {...props}
        >
          <Form id="account_form" onFinish={onFinish} form={form}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <XInput
                label="Tên đăng nhập"
                placeholder="Nhập tên đăng nhập hoặc email"
                useLabel={true}
                defaultValue={profileUser?.username as string}
              ></XInput>
            </Form.Item>
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <XInput
                label="Tên của bạn"
                placeholder="Nhập tên của bạn"
                useLabel={true}
                defaultValue={profileUser?.fullname as string}
              ></XInput>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <XInput
                label="Email"
                placeholder="Nhập email của bạn"
                useLabel={true}
                defaultValue={profileUser?.email as string}
              ></XInput>
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <div>
                <div className="font-bold flex mb-1">Giới tính</div>
                <Select
                  placeholder={"Chọn giới tính "}
                  allowClear
                  onChange={onGenderChange}
                  defaultValue={profileUser?.gender as string}
                >
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </div>
            </Form.Item>
            <Form.Item
              name="birthday"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <div>
                <div className="font-bold flex mb-1">Ngày sinh</div>
                <DatePicker
                  defaultValue={dayjs(profileUser?.birthday, "YYYY-MM-DD")}
                  onChange={onBirthdayChange}
                  placeholder="Chọn ngày sinh của bạn"
                  style={{ width: "100%" }}
                />
              </div>
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <XInput
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
                useLabel={true}
                defaultValue={profileUser?.phone as string}
              ></XInput>
            </Form.Item>
            <Form.Item
              name="address"
              rules={[{ required: true, message: "Không được bỏ trống ô này" }]}
            >
              <XInput
                label="Địa chỉ"
                placeholder="Nhập địa chỉ"
                useLabel={true}
                defaultValue={profileUser?.address as string}
              ></XInput>
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default AccountCardHeader;
