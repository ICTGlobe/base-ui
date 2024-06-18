import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { APP_TITLE, APP_DESCRIPTION } from "@/config";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex items-center gap-2">
        <RocketIcon size={50} className="text-primary" />
        {APP_TITLE}
      </h1>
      <p>{APP_DESCRIPTION}</p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/signin">Sign In</Link>
        </Button>
        <small>or</small>
        <Button variant="outline">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
