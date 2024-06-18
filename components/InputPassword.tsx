"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...props}
          ref={ref}
          className={cn("pr-10", className)}
          autoComplete="off"
        />
        <span className="absolute right-1 top-[7px] cursor-pointer select-none">
          {showPassword ? (
            <EyeIcon
              size={20}
              className="mt-1"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOffIcon
              size={20}
              className="mt-1"
              onClick={() => setShowPassword(true)}
            />
          )}
        </span>
      </div>
    );
  },
);
InputPassword.displayName = "Input";

export default InputPassword;
