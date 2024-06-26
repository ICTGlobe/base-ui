import Link from "next/link";
import { APP_TITLE, APP_PUBLIC_URL } from "../../config";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <span>
        &copy;&nbsp;{new Date().getFullYear()}{" "}
        <Link href={APP_PUBLIC_URL} className="link">{`${APP_TITLE}`}</Link>
      </span>
    </footer>
  );
};

export default Footer;
