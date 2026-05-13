import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
}

export const Button = ({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: ButtonProps) => {
  const styles = cn(
    variant === "primary" ? "btn-primary" : "btn-outline",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
