import React from "react";
import { Brain, Github, Star } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg">
              <Brain size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">QuizMaster</h1>
              <p className="text-xs text-gray-500">Test Your Knowledge</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Star size={16} className="text-yellow-500" />
              <span>DSA • Web Dev • Systems</span>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
