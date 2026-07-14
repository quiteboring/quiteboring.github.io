import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  children: ReactNode;
}

export default function Button({ href, variant = "primary", icon, children }: ButtonProps) {
  const base = "flex items-center gap-2 rounded-xl px-6 py-3 text-sm tracking-wider transition-all duration-300";

  const styles = {
    primary:
      "bg-(--accent-primary) text-(--text) hover:shadow-[0_0_20px_var(--accent-primary)]",
    outline:
      "border border-(--text-secondary)/30 text-(--text-secondary) hover:border-(--text-secondary) hover:text-(--text) hover:shadow-[0_0_20px_var(--text-secondary)]",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {icon && icon}
      {children}
    </a>
  );
}
