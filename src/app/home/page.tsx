"use client";

import XInput from "@/components/core/XInput";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import "./style.scss";

const HomePage = () => {
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    console.log("search", value);
  };
  const onChange = (value: string) => {
    form.setFieldValue("city", value);
  };
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
            colorPrimary: "#000000",
          },
          components: {
            Select: {
              optionSelectedBg: "rgba(0, 0, 0, 0.04)",
            },
          },
        }}
      >
        <Row style={{ width: "full-width" }}>
          <Col span={6}>
            <ActionMenu className="w-full flex items-center justify-end" />
          </Col>
          <Col span={12}>
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              <Card
                className="search_card"
                title="Tìm kiếm"
                style={{ width: "94%" }}
              >
                <Form
                  form={form}
                  className="flex items-center justify-between"
                  onFinish={onFinish}
                >
                  <Form.Item name="keyword" className="w-[640px]">
                    <XInput placeholder="Nhập từ khóa tìm kiếm"></XInput>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit"> Tìm kiếm</Button>
                  </Form.Item>
                </Form>
              </Card>

              <PostCard
                title="Back-end Development"
                src="https://img.freepik.com/free-photo/group-of-people-working-out-business-plan-in-an-office_1303-15861.jpg?w=1380&t=st=1700810701~exp=1700811301~hmac=8c50b88f8722c19d4c1a6b21bf043b4d26f9c869be506a9067f57da54eaef25c"
              />
              <PostCard
                title="Back-end Development"
                src="https://img.freepik.com/free-photo/group-of-people-working-out-business-plan-in-an-office_1303-15861.jpg?w=1380&t=st=1700810701~exp=1700811301~hmac=8c50b88f8722c19d4c1a6b21bf043b4d26f9c869be506a9067f57da54eaef25c"
              />
              <PostCard
                title="Back-end Development"
                src="https://img.freepik.com/free-photo/group-of-people-working-out-business-plan-in-an-office_1303-15861.jpg?w=1380&t=st=1700810701~exp=1700811301~hmac=8c50b88f8722c19d4c1a6b21bf043b4d26f9c869be506a9067f57da54eaef25c"
              />
              <PostCard
                title="Back-end Development"
                src="https://img.freepik.com/free-photo/group-of-people-working-out-business-plan-in-an-office_1303-15861.jpg?w=1380&t=st=1700810701~exp=1700811301~hmac=8c50b88f8722c19d4c1a6b21bf043b4d26f9c869be506a9067f57da54eaef25c"
              />
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default HomePage;
