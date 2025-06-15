import { Clock } from "lucide-react";

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isLowTime = timeLeft <= 10;

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        <Clock
          size={20}
          className={`${
            isLowTime ? "text-red-500" : "text-gray-600"
          } transition-colors`}
        />
        <span
          className={`font-mono text-lg font-bold ${
            isLowTime ? "text-red-500" : "text-gray-700"
          } transition-colors`}
        >
          {timeLeft}s
        </span>
      </div>

      <div className="flex-1 max-w-32">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ease-linear rounded-full ${
              isLowTime
                ? "bg-gradient-to-r from-red-500 to-red-600"
                : "bg-gradient-to-r from-blue-500 to-blue-600"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
