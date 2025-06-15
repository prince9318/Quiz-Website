import type { QuizCategory, CategoryInfo } from "../types/quiz";
import { getTopScore, getCategoryStats } from "../utils/localStorage";
import * as Icons from "lucide-react";

interface CategoryCardProps {
  category: QuizCategory;
  info: CategoryInfo;
  onSelect: (category: QuizCategory) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  info,
  onSelect,
}) => {
  const topScore = getTopScore(category);
  const stats = getCategoryStats(category);
  const IconComponent = Icons[
    info.icon as keyof typeof Icons
  ] as React.ComponentType<any>;

  return (
    <div
      onClick={() => onSelect(category)}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-lg`}
          >
            <IconComponent size={24} />
          </div>
          {topScore > 0 && (
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{topScore}</div>
              <div className="text-xs text-gray-500">Best Score</div>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
          {info.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {info.description}
        </p>

        {stats && (
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800">
                {stats.totalAttempts}
              </div>
              <div className="text-xs text-gray-500">Attempts</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800">
                {stats.averageScore}
              </div>
              <div className="text-xs text-gray-500">Avg Score</div>
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-center">
          <div
            className={`px-4 py-2 rounded-lg bg-gradient-to-r ${info.gradient} text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
          >
            Start Quiz →
          </div>
        </div>
      </div>
    </div>
  );
};
