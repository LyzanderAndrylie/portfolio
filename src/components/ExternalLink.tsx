import { cn } from "@/lib/utils";
import React from "react";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  className,
  children,
  showIcon = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-blue-600 decoration-blue-400/50 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-800",
        className,
      )}
      {...props}
    >
      {children}
      {showIcon && <span className="inline-block text-xs">↗</span>}
    </a>
  );
}
