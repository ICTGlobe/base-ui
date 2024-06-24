import { APP_TITLE, APP_LOGO } from "../../config";
import Image from "next/image";

const AppTitle = () => {
  return APP_LOGO ? (
    <Image src={APP_LOGO} alt={APP_TITLE} />
  ) : (
    <div>{APP_TITLE}</div>
  );
};
export default AppTitle;
