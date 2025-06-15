import React from "react";
import type { QuizCategory } from "../types/quiz";
import { categoryInfo } from "../constants/categories";
import { CategoryCard } from "./CategoryCard";

interface CategoryGridProps {
  onSelectCategory: (category: QuizCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
}) => {
  const categories = Object.keys(categoryInfo) as QuizCategory[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Test your knowledge across various domains of computer science and
            web development. Each quiz contains 5 carefully crafted questions
            with explanations to help you learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              info={categoryInfo[category]}
              onSelect={onSelectCategory}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Choose Category
              </h4>
              <p className="text-gray-600 text-sm">
                Select from 8 different technical domains
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Answer Questions
              </h4>
              <p className="text-gray-600 text-sm">
                30 seconds per question with instant feedback
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Track Progress
              </h4>
              <p className="text-gray-600 text-sm">
                View scores and improve your knowledge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
