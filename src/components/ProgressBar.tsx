interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  score,
}) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Question {current + 1} of {total}
        </span>
        <span className="text-sm font-bold text-blue-600">
          Score: {score}/{current + 1}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between mt-1">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i < current
                ? "bg-blue-500"
                : i === current
                ? "bg-blue-300 animate-pulse"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
