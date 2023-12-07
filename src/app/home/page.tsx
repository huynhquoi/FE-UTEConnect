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
import {
  Post,
  useGetPostByKeyWordsQuery,
  useGetPostQuery,
} from "@/graphql/controller-types";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [form] = Form.useForm();
  const [keywords, setKeywords] = useState("");
  const { data, loading, fetchMore } = useGetPostByKeyWordsQuery({
    variables: { keyword: keywords },
  });
  useEffect(() => {
    fetchMore({ variables: { keyword: keywords } });
  }, [fetchMore, keywords]);
  const onFinish = (value: any) => {
    setKeywords(value.keyword);
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

              {data?.find_post_by_keyword?.map((p) => (
                <PostCard key={p?.postid} post={p as Post} />
              ))}
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default HomePage;
