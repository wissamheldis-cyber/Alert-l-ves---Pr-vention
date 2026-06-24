import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
}

export function Button({ children, href, variant = "primary", className: customClass = "", ...props }: ButtonProps) {
  const className = `btn btn-${variant} ${customClass}`.trim();

  if (href) {
    return (
      <Link className={className} to={href}>
        {children}
        <ArrowRight size={18} />
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
      <ArrowRight size={18} />
    </button>
  );
}
