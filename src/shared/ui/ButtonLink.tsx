import type { ComponentType, ReactNode, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: IconComponent;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className,
  external = false,
  ariaLabel
}: ButtonLinkProps) {
  return (
    <a
      className={`button button--${variant} ${className ?? ""}`}
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" focusable="false" /> : null}
    </a>
  );
}
