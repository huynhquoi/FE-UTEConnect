"use client";

import { Avatar, Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss";
import XImage from "../core/XImage";

type JobCardProps = {
  title: string;
  src?: string;
};

const JobCard = ({ title, src }: JobCardProps) => {
  return (
    <>
      <Card style={{ width: "90%", marginTop: 20 }} className="job_card">
        <Meta
          avatar={
            <Avatar
              size={52}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            />
          }
          title="Card title"
          description="This is the description"
        />
        <div
          style={{ borderBottom: "1px solid #f4f4f4" }}
          className="my-2 mx-[-16px]"
        ></div>
        <div v-html="true">
          <p className="font-bold text-xl mb-2">{title}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
            vestibulum sapien. Donec iaculis pellentesque ullamcorper. Aliquam
            viverra ultricies dolor, sit amet ullamcorper neque faucibus ac.
            Maecenas volutpat velit ut maximus malesuada. Maecenas sit amet
            augue sagittis, vestibulum purus at, malesuada sapien. Ut
            scelerisque magna at magna bibendum aliquam. Quisque feugiat lorem a
            risus porttitor mattis non mattis neque. Donec eu augue ligula.
            Nullam nisl dolor, faucibus eget interdum id, laoreet sed lectus.
            Morbi vitae lorem sed odio ullamcorper sodales ut eget lacus. Etiam
            nec viverra mauris. Quisque eget tincidunt augue, vel volutpat dui.
            Aliquam in magna eget erat sollicitudin pulvinar consequat sed
            metus.
          </p>
        </div>
        {!!src && <XImage className="mt-2" preview={false} src={src} />}
        <div
          style={{ borderBottom: "1px solid #f4f4f4" }}
          className="my-2 mx-[-16px]"
        ></div>
        <div className="flex items-center justify-between">
          <Button>Xem chi tiết</Button>
          <Button>Ứng tuyển ngay</Button>
        </div>
      </Card>
    </>
  );
};

export default JobCard;
