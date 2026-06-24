import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type IconCardProps = {
  title: string;
  text: string;
  href?: string;
  icon: LucideIcon;
  dark?: boolean;
};

export function IconCard({ title, text, href, icon: Icon, dark = false }: IconCardProps) {
  const content = (
    <>
      <div>
        <div className={`icon-badge ${dark ? "" : "red"}`}>
          <Icon size={22} />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="muted">{text}</p>
      </div>
      <span className="arrow" aria-hidden>
        <ArrowRight size={20} />
      </span>
    </>
  );

  const className = `card card-link${dark ? " dark" : ""}`;

  return href ? (
    <Link to={href} className={className}>
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
}
