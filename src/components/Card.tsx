import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isHoverable?: boolean;
}

export function Card({
  className,
  children,
  isHoverable = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300",
        isHoverable &&
          "hover:shadow-lg hover:-translate-y-1 hover:border-brand/30 dark:hover:shadow-white/5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
