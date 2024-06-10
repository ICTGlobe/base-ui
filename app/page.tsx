import { TypographyH1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <TypographyH1>Base UI</TypographyH1>
      <Button variant="outline" className="border-zinc-600 rounded-sm" asChild>
        <Link href="/signin">Sign In</Link>
      </Button>
    </main>
  );
}
