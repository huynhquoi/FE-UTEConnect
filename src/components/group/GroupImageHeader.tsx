import { Card } from "antd";
import XImage from "../core/XImage";

type GroupCardHeaderProps = {
  image: string;
};

const GroupImageHeader = ({ image }: GroupCardHeaderProps) => {
  return (
    <>
      <div className="">
        <Card
          className="card_image_header"
          style={{
            width: "100%",
            height: "400px",
            marginTop: "-24px",
            borderRadius: 0,

            backgroundImage: `url("${image}")`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "50%",
            backgroundSize: "cover",
          }}
          bordered={false}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "75%",
              zIndex: 10,
            }}
          >
            {/* Đặt ảnh vào đây */}
            <XImage
              src={image || ""}
              style={{ width: "100%", height: "400px", objectFit: "cover", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px" }}
            />
          </div>
          <div
            className=""
            style={{
              width: "100%",
              height: "300px",
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1))",
            }}
          ></div>
          <div
            className=""
            style={{
              width: "100%",
              height: "100px",
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))",
            }}
          ></div>
        </Card>
      </div>
    </>
  );
};

export default GroupImageHeader;
