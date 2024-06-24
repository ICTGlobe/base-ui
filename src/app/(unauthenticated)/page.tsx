import Link from "next/link";

const LandingPage = () => {
  return (
    <Link
      className="text-md font-semibold text-primary hover:underline"
      href="/signin"
    >
      Get Started
    </Link>
  );
};
export default LandingPage;
