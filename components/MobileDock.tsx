'use client';

interface MobileDockProps {
  items: Array<{
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    className?: string;
  }>;
  className?: string;
}

export default function MobileDock({ items, className = '' }: MobileDockProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-3 px-4 py-3 bg-background/90 backdrop-blur-md border border-border rounded-2xl shadow-xl ${className}`}
        role="toolbar"
        aria-label="Mobile navigation dock"
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl hover:bg-primary/10 transition-colors ${item.className || ''}`}
            aria-label={item.label}
          >
            <div className="text-foreground">
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
