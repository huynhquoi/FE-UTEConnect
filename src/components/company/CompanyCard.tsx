"use client";

import { Avatar, Button, Card, CardProps, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import XImage from "../core/XImage";

type CompanyCardProps = {
  title?: string;
  src?: string;
};

const CompanyCard = ({
  title,
  src,
  className,
  ...props
}: CompanyCardProps & CardProps) => {
  return (
    <>
      <Card
        className={`company_card ${className}`}
        {...props}
      >
        <div className="flex items-start">
          <Col>
            <XImage
              className="rounded-lg"
              preview={false}
              src="https://i.pinimg.com/originals/5c/af/0e/5caf0e96302ba07a3fcb86fcdf0f5129.jpg"
              width={160}
            />
          </Col>
          <Col className="ml-5">
            <div className="flex flex-col justify-between h-[160px]">
              <Row>
                <div className="flex flex-col items-start justify-between">
                  <div className="company_name font-bold text-2xl">
                    The Pinterest
                  </div>
                  <div v-html="true">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ornare purus in interdum tincidunt. Donec venenatis
                    facilisis blandit. Phasellus tempor augue eget enim finibus
                    tincidunt.
                  </div>
                </div>
              </Row>
              <div className=" flex justify-end">
                <Button>Xem công ty</Button>
              </div>
            </div>
          </Col>
        </div>
      </Card>
    </>
  );
};

export default CompanyCard;
