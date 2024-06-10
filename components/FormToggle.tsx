import Link from "next/link";
import { usePathname } from "next/navigation";

const FormToggle = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full">
      {pathname === "/signup" && (
        <p className="text-sm">
          Already have an account?{" "}
          <Link
            className="font-semibold text-zinc-900 hover:underline"
            href="/signin"
          >
            Sign In
          </Link>
        </p>
      )}
      {pathname === "/signin" && (
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-zinc-900 hover:underline"
            href="/signup"
          >
            Sign Up
          </Link>
        </p>
      )}
    </div>
  );
};

export default FormToggle;
