import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: boolean;
  className?: string;
}

export function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
        {children}
      </h2>
      {subtitle && (
        <div className="w-20 h-1 bg-blue-600 rounded-full mb-4" />
      )}
    </div>
  );
}
