import React from "react";
import type { QuizState } from "../types/quiz";
import { categoryInfo } from "../constants/categories";
import { Trophy, Target, Clock, RotateCcw, Home } from "lucide-react";

interface ResultsProps {
  state: QuizState;
  onRestart: () => void;
  onHome: () => void;
  timeSpent: number;
}

export const Results: React.FC<ResultsProps> = ({
  state,
  onRestart,
  onHome,
  timeSpent,
}) => {
  const { score, questions, selectedCategory } = state;
  const percentage = Math.round((score / questions.length) * 100);
  const category = categoryInfo[selectedCategory!];

  const getPerformanceLevel = () => {
    if (percentage >= 90)
      return {
        level: "Excellent!",
        color: "text-green-600",
        bg: "bg-green-100",
      };
    if (percentage >= 70)
      return { level: "Good Job!", color: "text-blue-600", bg: "bg-blue-100" };
    if (percentage >= 50)
      return {
        level: "Not Bad!",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      };
    return {
      level: "Keep Practicing!",
      color: "text-red-600",
      bg: "bg-red-100",
    };
  };

  const performance = getPerformanceLevel();
  const correctAnswers = state.answers.filter(
    (answer, index) => answer === questions[index]?.correctAnswer
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${category.gradient} text-white shadow-lg mb-4`}
          >
            <Trophy size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Quiz Complete!
          </h1>
          <p className="text-gray-600">{category.name}</p>
        </div>

        <div className={`${performance.bg} rounded-2xl p-6 mb-8 text-center`}>
          <h2 className={`text-2xl font-bold ${performance.color} mb-2`}>
            {performance.level}
          </h2>
          <div className="text-4xl font-bold text-gray-800 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-lg text-gray-600">{percentage}% Correct</div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 text-center">
            <Target size={24} className="mx-auto mb-2" />
            <div className="text-2xl font-bold">{correctAnswers}</div>
            <div className="text-sm opacity-90">Correct Answers</div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-4 text-center">
            <Clock size={24} className="mx-auto mb-2" />
            <div className="text-2xl font-bold">
              {Math.floor(timeSpent / 60)}:
              {(timeSpent % 60).toString().padStart(2, "0")}
            </div>
            <div className="text-sm opacity-90">Time Spent</div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Question Review:</h3>
          {questions.map((question, index) => {
            const userAnswer = state.answers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            const wasSkipped = userAnswer === -1;

            return (
              <div
                key={question.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
              >
                <span className="text-sm text-gray-700 truncate flex-1 mr-4">
                  {index + 1}. {question.question}
                </span>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isCorrect
                      ? "bg-green-100 text-green-800"
                      : wasSkipped
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {isCorrect ? "Correct" : wasSkipped ? "Skipped" : "Wrong"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onRestart}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <RotateCcw size={20} />
            <span>Try Again</span>
          </button>

          <button
            onClick={onHome}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home size={20} />
            <span>Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
