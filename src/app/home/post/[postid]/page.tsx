"use client";

import ActionMenu from "@/components/home/ActionMenu";
import PostComment from "@/components/post/PostComment";
import {
  Post,
  useGetAccountByPkQuery,
  useGetPostByPkQuery,
} from "@/graphql/controller-types";
import {
  Avatar,
  Card,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Row,
  Tag,
} from "antd";
import Meta from "antd/es/card/Meta";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import "./style.scss";
import PostAction from "@/components/post/PostAction";
import ReportButton from "@/components/shared/ReportButton";
import XDescription from "@/components/core/XDescription";
import { useAllBookmark, useGlobalStore } from "@/hook/useUser";
import PostForm from "@/components/post/PostForm";

const PostDetailPage = () => {
  const params = useParams();
  const user = useGlobalStore();
  const bookmark = useAllBookmark();
  const { data, loading } = useGetPostByPkQuery({
    variables: { postid: parseInt(params.postid as string) },
  });
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
          <Col span={6}>
            <ActionMenu className="w-full ml-4" />
          </Col>
          <Col span={12}>
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              <Card style={{ width: "94%" }} loading={loading}>
                <Meta
                  avatar={
                    <Avatar
                      size={52}
                      src={data?.find_post_by_id?.user_post?.image}
                    />
                  }
                  title={
                    <>
                      <Flex align="center" justify="space-between">
                        <div className="text-base">
                          {data?.find_post_by_id?.user_post?.fullname}
                        </div>
                        {data?.find_post_by_id?.user_post?.userid ===
                        user?.userid ? (
                          <PostForm post={data?.find_post_by_id} />
                        ) : (
                          <ReportButton
                            postReportId={data?.find_post_by_id?.postid}
                          />
                        )}
                      </Flex>
                    </>
                  }
                  description={
                    <>
                      {dayjs(data?.find_post_by_id?.createday).format(
                        "DD/MM/YYYY, HH:mm"
                      )}
                    </>
                  }
                />
                <div
                  style={{ borderBottom: "1px solid #f4f4f4" }}
                  className="my-2 mx-[-16px]"
                ></div>
                <p className="font-bold text-xl mb-2">
                  {data?.find_post_by_id?.title}
                </p>
                {data?.find_post_by_id?.topic_post?.topicid ? (
                  <Tag color="#000000" className="mb-2">
                    {data?.find_post_by_id?.topic_post?.topicname}
                  </Tag>
                ) : null}
                <XDescription
                  value={data?.find_post_by_id?.content as string}
                />
                <Divider style={{ marginBottom: "4px" }} />
                <PostAction
                  isFollow={bookmark
                    ?.map((e) => e?.post_bookmark?.postid)
                    .some((e) => e === data?.find_post_by_id?.postid)}
                  postId={data?.find_post_by_id?.postid as number}
                  userId={data?.find_post_by_id?.user_post?.userid as string}
                  post={data?.find_post_by_id as Post}
                />
                <Divider style={{ marginTop: "4px" }} />
                <PostComment postId={parseInt(params.postid as string)} />
              </Card>
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default PostDetailPage;
