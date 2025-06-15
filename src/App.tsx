import { useState } from "react";
import type { QuizCategory } from "./types/quiz";
import { useQuiz } from "./hooks/useQuiz";
import { Header } from "./components/Header";
import { CategoryGrid } from "./components/CategoryGrid";
import { QuestionCard } from "./components/QuestionCard";
import { ProgressBar } from "./components/ProgressBar";
import { Timer } from "./components/Timer";
import { Results } from "./components/Results";
import { categoryInfo } from "./constants/categories";

type AppState = "category-selection" | "quiz-active" | "quiz-results";

function App() {
  const [appState, setAppState] = useState<AppState>("category-selection");
  const [startTime, setStartTime] = useState<number>(0);
  const { state, startQuiz, answerQuestion, resetQuiz, skipQuestion } =
    useQuiz();

  const handleSelectCategory = (category: QuizCategory) => {
    startQuiz(category);
    setAppState("quiz-active");
    setStartTime(Date.now());
  };

  const handleAnswer = (answerIndex: number) => {
    answerQuestion(answerIndex);
    if (state.currentQuestion + 1 >= state.questions.length) {
      setAppState("quiz-results");
    }
  };

  const handleRestart = () => {
    if (state.selectedCategory) {
      startQuiz(state.selectedCategory);
      setAppState("quiz-active");
      setStartTime(Date.now());
    }
  };

  const handleHome = () => {
    resetQuiz();
    setAppState("category-selection");
  };

  const getTimeSpent = () => {
    return Math.round((Date.now() - startTime) / 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {appState === "category-selection" && (
        <CategoryGrid onSelectCategory={handleSelectCategory} />
      )}

      {appState === "quiz-active" && state.questions.length > 0 && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <div className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {categoryInfo[state.selectedCategory!].name}
                  </h2>
                </div>
                <Timer timeLeft={state.timeLeft} totalTime={30} />
              </div>
              <ProgressBar
                current={state.currentQuestion}
                total={state.questions.length}
                score={state.score}
              />
            </div>

            <QuestionCard
              question={state.questions[state.currentQuestion]}
              onAnswer={handleAnswer}
              onSkip={skipQuestion}
              timeLeft={state.timeLeft}
            />
          </div>
        </div>
      )}

      {appState === "quiz-results" && (
        <Results
          state={state}
          onRestart={handleRestart}
          onHome={handleHome}
          timeSpent={getTimeSpent()}
        />
      )}
    </div>
  );
}

export default App;
