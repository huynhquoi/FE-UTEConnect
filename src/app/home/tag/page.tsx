"use client";

import ActionMenu from "@/components/home/ActionMenu";
import { useGetAllTopicQuery } from "@/graphql/controller-types";
import { Card, Col, Flex, Row } from "antd";
import { useRouter } from "next/navigation";

const TagPage = () => {
  const router = useRouter();
  const { data } = useGetAllTopicQuery();
  return (
    <>
      <Row style={{ width: "full-width" }}>
        <Col span={6}>
          <ActionMenu className="w-full ml-4" />
        </Col>
        <Col span={12}>
          <Flex wrap="wrap" gap="small" align="center" justify="center">
            {data?.topic?.map((t) => (
              <Card
                onClick={() => router.push(`/home/post/topic/${t?.topicid}`)}
                style={{ width: "280px", cursor: "pointer" }}
                key={t?.topicid}
              >
                <Flex align="center" justify="center">
                  {t?.topicname}
                </Flex>
              </Card>
            ))}
          </Flex>
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default TagPage;
