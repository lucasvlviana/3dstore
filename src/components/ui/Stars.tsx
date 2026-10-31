import { stars } from "@/lib/utils";

interface StarsProps {
  rating: number;
  count?: number;
  size?: "sm" | "md" | "lg";
}

export default function Stars({ rating, count, size = "md" }: StarsProps) {
  const arr = stars(rating);
  const sz = { sm: "text-sm", md: "text-base", lg: "text-lg" }[size];
  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex ${sz}`}>
        {arr.map((filled, i) => (
          <span key={i} className={filled ? "text-yellow-400" : "text-gray-200"}>★</span>
        ))}
      </div>
      <span className="text-gray-500 text-sm font-body">
        {rating.toFixed(1)}{count !== undefined && <span className="text-gray-400 ml-0.5">({count})</span>}
      </span>
    </div>
  );
}
