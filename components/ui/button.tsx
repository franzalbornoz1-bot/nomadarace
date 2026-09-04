import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "dark";
}

const styles = {
  default: "border border-brand-neon bg-brand-neon text-brand-carbon shadow-[0_10px_24px_rgba(254,92,19,.24)] hover:bg-[#ff6c2b] hover:shadow-[0_14px_30px_rgba(254,92,19,.32)]",
  outline: "border border-zinc-200 bg-white/70 text-brand-carbon shadow-[0_5px_18px_rgba(53,58,62,.06)] hover:border-brand-neon hover:bg-white",
  ghost: "text-zinc-600 hover:bg-white/80 hover:text-zinc-950",
  dark: "border border-white/10 bg-brand-carbon text-brand-pure shadow-[0_10px_24px_rgba(20,25,28,.2)] hover:bg-zinc-800",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <button ref={ref} className={cn("inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-bold tracking-[-.01em] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-px active:translate-y-0 active:scale-[.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0", styles[variant], className)} {...props} />
  ),
);
Button.displayName = "Button";
