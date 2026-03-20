interface PlaceholderImageProps {
  width?: number;
  height?: number;
  className?: string;
  label?: string;
  variant?: "neutral" | "warm" | "cool" | "dark";
}

const variants = {
  neutral: { bg: "from-[#E8E5E0] to-[#D8D4CF]", icon: "#B0AAA2", text: "#9A9490" },
  warm:    { bg: "from-[#EDE8E0] to-[#E0D8CC]", icon: "#C4B49A", text: "#A89880" },
  cool:    { bg: "from-[#E2E8F0] to-[#D4DCE8]", icon: "#9AABBC", text: "#849AAC" },
  dark:    { bg: "from-[#2A2A2A] to-[#1A1A1A]",  icon: "#555555", text: "#666666" },
};

export default function PlaceholderImage({
  className = "",
  label,
  variant = "neutral",
}: PlaceholderImageProps) {
  const v = variants[variant];

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${v.bg} ${className}`}
    >
      {/* Subtle texture pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${variant}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={v.icon} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: v.icon }}
        >
          <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.15" />
          <path
            d="M8 28l8-8 5 5 5-6 6 9H8zM27 15a2 2 0 110-4 2 2 0 010 4z"
            fill="currentColor"
          />
          <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
        {label && (
          <span className="text-xs font-medium tracking-wide uppercase" style={{ color: v.text }}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
