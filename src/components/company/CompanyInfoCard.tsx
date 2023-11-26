import { Avatar, Badge, Card, CardProps, ConfigProvider, Tag } from "antd";
import XSeprator from "../core/XSeperator";
import Link from "next/link";
import XChip from "../core/XChip";

type SkillType = {
  id: string;
  name: string;
};

type WebsiteType = {
  id: string;
  link: string;
  name: string;
};

type XCardProps = {
  title: string;
  useGeneral?: boolean;
  website?: Array<WebsiteType>;
  skill?: Array<SkillType>;
};

const gridStyle: React.CSSProperties = {
  width: "calc(100/3)",
  textAlign: "start",
  boxShadow: "none",
  padding: "12px 0px 12px 24px",
};

const CompanyInfoCard = ({
  title,
  useGeneral,
  className,
  children,
  website,
  skill,
  ...props
}: CardProps & XCardProps) => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tag: {
              defaultBg: "#ffffff",
            },
          },
        }}
      >
        {useGeneral ? (
          <Card
            {...props}
            className={className}
            title={<div className="text-2xl font-bold">{title}</div>}
          >
            <Card.Grid hoverable={false} style={gridStyle}>
              <div className="font-bold text-gray-500" style={{ fontSize: 16 }}>
                Loại hình công ty
              </div>
              <div className="text-black mt-1">Product</div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              <div className="font-bold text-gray-500" style={{ fontSize: 16 }}>
                Quy mô công ty
              </div>
              <div className="text-black mt-1">0-50 Nhân viên</div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              <div className="font-bold text-gray-500" style={{ fontSize: 16 }}>
                Vị trí công ty
              </div>
              <div className="text-black mt-1 flex items-center">
                <Avatar
                  size={24}
                  src="https://i.pinimg.com/originals/c8/e2/b5/c8e2b5c9e2bcb3bfaf2781a8f1880e74.jpg"
                />
                <div className="ml-1">Việt Nam</div>
              </div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              <div className="font-bold text-gray-500" style={{ fontSize: 16 }}>
                Thời gian làm việc
              </div>
              <div className="text-black mt-1">Thứ 2 - Thứ 6</div>
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              <div className="font-bold text-gray-500" style={{ fontSize: 16 }}>
                Tăng ca
              </div>
              <div className="text-black mt-1">Không tăng ca</div>
            </Card.Grid>
          </Card>
        ) : (
          <Card {...props} className={className}>
            <div className="text-2xl font-bold">{title}</div>
            <XSeprator />
            {skill?.length ? (
              <>
                <div className="text-lg font-bold">
                  Công nghệ được chúng tôi sử dụng
                </div>
                <div className="">
                  {skill.map((s) => (
                    <Tag
                      key={s.id}
                      className="my-2"
                      style={{
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontSize: "14px",
                      }}
                    >
                      {s.name}
                    </Tag>
                  ))}
                </div>
                <div v-html="true">
                  <p>
                    Praesent ut dignissim nunc. Nulla id elit sodales, interdum
                    elit et, imperdiet risus.
                  </p>
                  <p>
                    Nam a rhoncus libero. Praesent in nisl sed felis ullamcorper
                    fermentum et posuere erat. Sed ut scelerisque lacus.
                  </p>
                  <p>
                    In hendrerit nec sem ac tincidunt. Praesent lacinia nec
                    mauris quis ultrices. Sed in feugiat libero.
                  </p>
                </div>
              </>
            ) : null}
            <div v-html="true">
              Praesent ut dignissim nunc. Nulla id elit sodales, interdum elit
              et, imperdiet risus. Nam a rhoncus libero. Praesent in nisl sed
              felis ullamcorper fermentum et posuere erat. Sed ut scelerisque
              lacus. In hendrerit nec sem ac tincidunt. Praesent lacinia nec
              mauris quis ultrices. Sed in feugiat libero. Donec varius rhoncus
              augue, eget aliquam libero cursus ac. Fusce fermentum massa
              pulvinar leo mattis, nec gravida nisi aliquet.
            </div>
            {website?.length ? (
              <>
                <XSeprator />
                <div className="flex items-center justify-start">
                  {website.map((w) => (
                    <Link key={w.id} className="text-lg" href={w.link}>
                      {w.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </Card>
        )}
      </ConfigProvider>
    </>
  );
};

export default CompanyInfoCard;
