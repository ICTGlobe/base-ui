import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header
        className="w-full fixed top-0 px-10 py-5"
        style={{ boxShadow: "0px 2px 6px 0px rgba(0,0,0,0.2)" }}
      >
        <NavBar />
      </header>
      <main className="pt-24 px-10 pb-5 h-full">{children}</main>
      <Footer />
    </div>
  );
}
