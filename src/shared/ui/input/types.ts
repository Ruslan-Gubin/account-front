import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  searchClick?: () => void;
  passwordEyeClick?: () => void;
  downEnterCallback?: () => void;
  reset?: () => void;
  placeholder?: string;
  name?: string;
  label?: string;
  error?: boolean;
  type?: string;
  variant?: "search" | "email" | 'password';
  value: string | number;
  errorText?: string | null;
  width?: string | number;
}

export type { InputProps };
