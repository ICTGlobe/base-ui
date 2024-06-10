import Link from "next/link";

const PasswordLink = () => {
  return (
    <div className="flex w-full">
      <p className="text-sm">
        Forgot your password?{" "}
        <Link
          className="font-semibold text-zinc-900 hover:underline"
          href="/password/forgot"
        >
          Reset Password
        </Link>
      </p>
    </div>
  );
};

export default PasswordLink;
