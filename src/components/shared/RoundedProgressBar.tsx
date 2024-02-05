"use client";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const RoundedProgressBar = ({
  size = 16,
  fontSize = 16,
  maxValue,
  minValue,
  percent = 100,
  progressColor,
  showLabels = false,
}: {
  size?: number;
  fontSize?: number;
  maxValue?: string | number;
  minValue?: string | number;
  percent?: number;
  progressColor?: string;
  showLabels?: boolean;
}) => {
  const computePercentages =
    maxValue && minValue
      ? Math.ceil((Number(minValue) / Number(maxValue)) * 100)
      : percent;

  const computeColor = useMemo(() => {
    if (progressColor) {
      return `text-${progressColor}-500`;
    }
    if (computePercentages < 30) {
      return "text-red-500";
    } else if (computePercentages >= 30 && computePercentages < 50) {
      return "text-orange-500";
    } else if (computePercentages >= 50 && computePercentages < 70) {
      return "text-yellow-500";
    } else {
      return "text-green-500";
    }
  }, [computePercentages]);

  return (
    <div className={`relative w-${size} h-${size}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Inner Circle */}
        <circle
          className="text-gray-200 stroke-current"
          stroke-width="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* Outer Circle*/}
        <circle
          className={cn(`${computeColor} progress-ring__circle stroke-current`)}
          stroke-width="10"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dashoffset="calc(400 - (400 * 45) / 100)"
        ></circle>
        {/* INNER TEXT */}
        <text
          x="50"
          y="50"
          font-family="Verdana"
          font-size={fontSize}
          text-anchor="middle"
          alignment-baseline="middle"
          fontWeight={"bold"}
          fill="steelblue"
        >
          {computePercentages}%
        </text>

        {showLabels && (
          <text
            x="50"
            y="60"
            font-family="Verdana"
            font-size={6}
            text-anchor="middle"
            alignment-baseline="middle"
            fontWeight={"lighter"}
            fill="steelblue"
          >
            {minValue}/{maxValue}
          </text>
        )}
      </svg>
    </div>
  );
};

export default RoundedProgressBar;
