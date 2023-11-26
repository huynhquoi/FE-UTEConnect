"use client";

import CompanyCardHeader from "@/components/company/CompanyCardHeader";
import CompanyInfoCard from "@/components/company/CompanyInfoCard";
import JobCard from "@/components/job/JobCard";
import { Col, ConfigProvider, Row } from "antd";

const CompanyPageDetail = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
            colorPrimary: "#000000",
          },
        }}
      >
        <Row style={{ width: "full-width" }}>
          <Col
            span={4}
            style={{ display: "flex !important" }}
            className="justify-end"
          >
          </Col>
          <Col span={16}>
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              <CompanyCardHeader style={{ width: "100%" }} />
            </div>
            <Row>
              <Col span={16}>
                <CompanyInfoCard
                  title={"Thông tin chung"}
                  useGeneral={true}
                  style={{ marginTop: 20 }}
                ></CompanyInfoCard>
                <CompanyInfoCard
                  title={"Thông tin tổng quan"}
                  website={[
                    {
                      id: "pinterest",
                      link: "https://www.pinterest.com/",
                      name: "The Pinterest",
                    },
                  ]}
                  style={{ marginTop: 20 }}
                ></CompanyInfoCard>
                <CompanyInfoCard
                  title={"Công nghệ cốt lõi"}
                  skill={[
                    { name: "Java", id: "java" },
                    { name: "C#", id: "c#" },
                  ]}
                  style={{ marginTop: 20 }}
                />
                <CompanyInfoCard
                  title={"Giới thiệu"}
                  style={{ marginTop: 20 }}
                />
              </Col>
              <Col span={8}>
                <div className="flex flex-col items-end justify-end">
                  <JobCard title="" src="" />
                  <JobCard title="" src="" />
                  <JobCard title="" src="" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={4}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default CompanyPageDetail;
