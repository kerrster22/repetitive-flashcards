import React from "react";

const LineChart = () => {
  // Define data points for both curves
  const spacedRepetitionData = [
    { x: 0, y: 80 },
    { x: 10, y: 75 },
    { x: 20, y: 85 },
    { x: 30, y: 80 },
    { x: 40, y: 90 },
    { x: 50, y: 85 },
  ];

  const normalLearningData = [
    { x: 0, y: 20 },
    { x: 10, y: 30 },
    { x: 20, y: 50 },
    { x: 30, y: 65 },
    { x: 40, y: 75 },
    { x: 50, y: 80 },
  ];

  // Create the line path for spaced repetition
  const spacedRepetitionLine = spacedRepetitionData
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`)
    .join(" ");

  // Create the line path for normal learning
  const normalLearningLine = normalLearningData
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`)
    .join(" ");

  return (
    <div className="mt-6 w-full h-[200px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 100"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full"
      >
        {/* Background grid */}
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100"
          stroke="lightgray"
          strokeDasharray="2"
        />
        <line
          x1="0"
          y1="20"
          x2="50"
          y2="20"
          stroke="lightgray"
          strokeDasharray="2"
        />
        <line
          x1="0"
          y1="40"
          x2="50"
          y2="40"
          stroke="lightgray"
          strokeDasharray="2"
        />
        <line
          x1="0"
          y1="60"
          x2="50"
          y2="60"
          stroke="lightgray"
          strokeDasharray="2"
        />
        <line
          x1="0"
          y1="80"
          x2="50"
          y2="80"
          stroke="lightgray"
          strokeDasharray="2"
        />

        {/* Line for normal learning */}
        <path
          d={normalLearningLine}
          fill="transparent"
          stroke="red"
          strokeWidth="2"
        />

        {/* Line for spaced repetition */}
        <path
          d={spacedRepetitionLine}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
        />

        {/* X and Y axis */}
        <line x1="0" y1="100" x2="50" y2="100" stroke="black" />
        <line x1="0" y1="0" x2="0" y2="100" stroke="black" />
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 rounded-lg bg-background/80 p-2 text-xs backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-red-500/50"></div>
          <span>Without Spaced Repetition</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-green-500/50"></div>
          <span>With MemoryMaster</span>
        </div>
      </div>
    </div>
  );
};

export default LineChart;