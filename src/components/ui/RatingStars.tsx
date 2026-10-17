import React from "react";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  max?: number;
  showScore?: boolean;
  scoreSuffix?: string;
  size?: number;
}

export function RatingStars({
  rating,
  max = 5,
  showScore = true,
  scoreSuffix = "/5",
  size = 18,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, i) => {
          const filled = i + 1 <= Math.floor(rating);
          const half = !filled && i < rating;
          return (
            <div key={i} className="relative inline-block">
              {/* background empty star */}
              <Star
                size={size}
                className="text-gray-300 fill-gray-200"
              />
              {/* filled portion */}
              {(filled || half) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
                >
                  <Star
                    size={size}
                    className="text-[#FFC633] fill-[#FFC633]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showScore && (
        <span className="text-sm text-black font-medium">
          {rating.toFixed(1)}
          <span className="text-gray-500 font-normal">{scoreSuffix}</span>
        </span>
      )}
    </div>
  );
}
