import { APP_TITLE } from "../../config";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <span>
        &copy;&nbsp;{new Date().getFullYear()}
        {` ${APP_TITLE}`}
      </span>
    </footer>
  );
};

export default Footer;
