import { signOut } from "@/lib/actions";
import { LogOutIcon } from "lucide-react";

type FormSignOutProps = {
  children: React.ReactNode | string;
};

const FormSignOut = ({ children }: FormSignOutProps) => {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="flex justify-around gap-2 rounded-sm border-zinc-600 px-4 py-2"
      >
        <LogOutIcon size={16} />
        {children}
      </button>
    </form>
  );
};

export default FormSignOut;
