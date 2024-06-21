import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ChartCardProps = {
  children: ReactNode;
  [key: string]: any;
};

const ChartCard: React.FC<ChartCardProps> = ({ children, ...props }) => {
  return (
    <Card>
      {!!props.title && (
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="pl-0 pt-4">{children}</CardContent>
      {!!props.footer && <CardFooter>{props.footer}</CardFooter>}
    </Card>
  );
};

export default ChartCard;
