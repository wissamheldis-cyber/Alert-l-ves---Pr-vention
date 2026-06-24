import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  type?: "button" | "submit";
};

export function Button({ children, href, variant = "primary", type = "button" }: ButtonProps) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <Link className={className} to={href}>
        {children}
        <ArrowRight size={18} />
      </Link>
    );
  }

  return (
    <button className={className} type={type}>
      {children}
      <ArrowRight size={18} />
    </button>
  );
}
