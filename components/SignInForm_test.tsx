"use client";

import { useFormState } from "react-dom";
import { signIn } from "@/libs/actions_test";

const SingInForm = () => {
  const [state, formAction] = useFormState<any, FormData>(signIn, undefined);

  return (
    <form className="block w-full max-w-xs" action={formAction}>
      <div className="group relative mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="order-2 block w-full rounded-md border border-zinc-400 bg-white px-4 py-2 shadow-sm placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        />
        {state?.email && (
          <p className="bottom-(-10px) absolute left-0 text-sm text-red-400">
            {state.email}
          </p>
        )}
      </div>
      <div className="group relative mb-5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="order-2 block w-full rounded-md border border-zinc-400 bg-white px-4 py-2 shadow-sm placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        />
        {state?.password && (
          <p className="bottom-(-10px) absolute left-0 text-sm text-red-400">
            {state.password}
          </p>
        )}
      </div>
      <div className="group relative mb-5 mt-6">
        <button
          type="submit"
          className="rounded-md border border-zinc-600 px-4 py-2"
        >
          Sign In
        </button>
        {state?.error && (
          <p className="bottom-(-10px) absolute left-0 text-sm text-red-400">
            {JSON.stringify(state.error)}
          </p>
        )}
      </div>
    </form>
  );
};

export default SingInForm;
