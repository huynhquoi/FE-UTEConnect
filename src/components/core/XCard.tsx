import { Card, CardProps } from "antd";

type XCardProps = {
  title: string;
};

const XCard = ({ title, children, ...props }: XCardProps & CardProps) => {
  return (
    <>
      <Card {...props}>{children}</Card>
    </>
  );
};

export default XCard;
