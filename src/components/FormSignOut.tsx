import { signOut } from "@/lib/actions";

const FormSignOut = () => {
  return (
    <form action={signOut}>
      <button type="submit" className="rounded-sm border-zinc-600 px-4 py-2">
        Sign Out
      </button>
      
    </form>
  );
};

export default FormSignOut;
