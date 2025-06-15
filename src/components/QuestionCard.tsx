import React, { useState } from "react";
import type { Question } from "../types/quiz";
import { CheckCircle, XCircle, Clock, SkipForward } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  onSkip: () => void;
  timeLeft: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onSkip,
  timeLeft,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return;

    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    setTimeout(() => {
      onAnswer(answerIndex);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 1500);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getOptionStyle = (index: number) => {
    if (!showFeedback) {
      return "bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-300 hover:shadow-md transform hover:-translate-y-1";
    }

    if (index === question.correctAnswer) {
      return "bg-green-50 border-green-300 text-green-800";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-red-50 border-red-300 text-red-800";
    }

    return "bg-gray-50 border-gray-200 text-gray-500";
  };

  const getOptionIcon = (index: number) => {
    if (!showFeedback) return null;

    if (index === question.correctAnswer) {
      return <CheckCircle size={20} className="text-green-600" />;
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return <XCircle size={20} className="text-red-600" />;
    }

    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
              question.difficulty
            )}`}
          >
            {question.difficulty.charAt(0).toUpperCase() +
              question.difficulty.slice(1)}
          </span>
          <span className="text-gray-500 text-sm">
            {question.category.toUpperCase()}
          </span>
        </div>

        <button
          onClick={onSkip}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          disabled={showFeedback}
        >
          <SkipForward size={16} />
          <span>Skip</span>
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            disabled={showFeedback}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${getOptionStyle(
              index
            )} ${showFeedback ? "cursor-default" : "cursor-pointer"}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-800 font-medium">{option}</span>
              </div>
              {getOptionIcon(index)}
            </div>
          </button>
        ))}
      </div>

      {showFeedback && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}

      {timeLeft <= 10 && !showFeedback && (
        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-800 rounded-lg animate-pulse">
            <Clock size={16} />
            <span className="font-medium">Time running out!</span>
          </div>
        </div>
      )}
    </div>
  );
};
