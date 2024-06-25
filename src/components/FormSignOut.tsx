import { signOut } from "@/lib/actions";

type FormSignOutProps = {
  children: React.ReactNode | string;
};

const FormSignOut = ({ children }: FormSignOutProps) => {
  return (
    <form action={signOut}>
      <button type="submit" className="rounded-sm border-zinc-600 px-4 py-2">
        {children}
      </button>
    </form>
  );
};

export default FormSignOut;
