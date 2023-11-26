"use client";

import CompanyCard from "@/components/company/CompanyCard";
import ActionMenu from "@/components/home/ActionMenu";
import { Col, ConfigProvider, Row } from "antd";

const CompanyPage = () => {
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
          <Col
            span={6}
            style={{ display: "flex !important" }}
            className="justify-end"
          >
            <ActionMenu />
          </Col>
          <Col span={12}>
            <div
              style={{ width: "100%" }}
              className=" flex flex-col items-center justify-center"
            >
              <CompanyCard style={{width: "90%"}} />
              <CompanyCard style={{marginTop: "16px", width: "90%"}} />
              <CompanyCard style={{marginTop: "16px", width: "90%"}} />
              <CompanyCard style={{marginTop: "16px", width: "90%"}} />
              <CompanyCard style={{marginTop: "16px", width: "90%"}} />
              <CompanyCard style={{marginTop: "16px", width: "90%"}} />
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </ConfigProvider>
    </>
  );
};

export default CompanyPage;
