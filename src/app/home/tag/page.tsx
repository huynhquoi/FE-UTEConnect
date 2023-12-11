"use client";

import ActionMenu from "@/components/home/ActionMenu";
import { useGetAllTopicQuery } from "@/graphql/controller-types";
import { Card, Col, Flex, Row } from "antd";

const TagPage = () => {
  const { data, fetchMore } = useGetAllTopicQuery();
  return (
    <>
      <Row style={{ width: "full-width" }}>
        <Col span={6}>
          <ActionMenu className="w-full flex items-center justify-end" />
        </Col>
        <Col span={16}>
          <Flex wrap="wrap" gap="small" align="center" justify="center">
            {data?.topic?.map((t) => (
              <Card style={{ width: "280px" }} key={t?.topicid}>
                <Flex align="center" justify="center">
                  {t?.topicname}
                </Flex>
              </Card>
            ))}
          </Flex>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default TagPage;
