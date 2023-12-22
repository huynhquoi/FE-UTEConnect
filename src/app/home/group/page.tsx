"use client";

import XInput from "@/components/core/XInput";
import ActionMenu from "@/components/home/ActionMenu";
import PostCard from "@/components/post/PostCard";
import {
  Avatar,
  Button,
  Card,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  Skeleton,
} from "antd";
import "./style.scss";
import {
  Group,
  Post,
  useGetAllFollowPostQuery,
  useGetGroupQuery,
  useGetPostByKeyWordsQuery,
} from "@/graphql/controller-types";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/hook/useUser";
import Meta from "antd/es/card/Meta";
import GroupCard from "@/components/group/GroupCard";

const GroupPage = () => {
  const user = useGlobalStore();
  const [form] = Form.useForm();
  const [keywords, setKeywords] = useState("");
  const { data, loading, fetchMore } = useGetGroupQuery({
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
            fontSize: 16,
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
          <Col span={7}>
            <ActionMenu className="w-full ml-4" />
          </Col>
          <Col span={10}>
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

              {!loading
                ? data?.find_group_by_keyword?.map((p) => (
                    <GroupCard key={p?.groupid} group={p as Group} />
                  ))
                : [1, 2, 3, 4].map((e, index) => (
                    <Card key={index} style={{ width: "94%", marginTop: 20 }}>
                      <Skeleton loading={loading} avatar active>
                        <Meta
                          avatar={
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                          }
                          title="Card title"
                          description="This is the description"
                        />
                      </Skeleton>
                    </Card>
                  ))}
            </div>
          </Col>
          <Col span={7}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default GroupPage;
