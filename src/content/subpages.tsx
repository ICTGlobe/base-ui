import { CircleGaugeIcon } from "lucide-react";
import ExampleContent from "./ExampleContent";

interface PageContentProps {
  [key: string]: {
    label: string;
    content?: JSX.Element;
    icon?: JSX.Element;
    href?: string;
  };
}

export const pageContent: PageContentProps = {
  "page-two": {
    label: "Page Two",
    href: "/dashboard/page-two",
    content: <ExampleContent />,
  },
  "page-three": {
    label: "Page Three",
    href: "/dashboard/page-three",
    content: <ExampleContent />,
  },
  "page-four": {
    label: "Page Four",
    href: "/dashboard/page-four",
    content: <ExampleContent />,
  },
  "page-five": {
    label: "Page Five",
    href: "/dashboard/page-five",
  },
};

// export type SubPageProps = {
//   id: string;
//   icon?: React.ReactNode;
//   label: string;
//   href: string;
//   content?: React.ReactNode;
// };

// export const SubPages: SubPageProps[] = [
//   {
//     id: "page-two",
//     label: "Page Two",
//     href: "/dashboard/page-two",
//     content: <ExampleContent />,
//   },
//   {
//     id: "page-three",
//     label: "Page Three",
//     href: "/dashboard/page-three",
//     content: <ExampleContent />,
//   },
//   {
//     id: "page-four",
//     label: "Page Four",
//     href: "/dashboard/page-four",
//     content: <ExampleContent />,
//   },
//   {
//     id: "page-five",
//     label: "Page Five",
//     href: "/dashboard/page-five",
//   },
// ];
