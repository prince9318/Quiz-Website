import type { HighScore, QuizCategory } from "../types/quiz";

const HIGH_SCORES_KEY = "quiz-app-high-scores";

export const getHighScores = (): HighScore[] => {
  try {
    const stored = localStorage.getItem(HIGH_SCORES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error loading high scores:", error);
    return [];
  }
};

export const saveHighScore = (score: HighScore): void => {
  try {
    const scores = getHighScores();
    scores.push(score);

    // Keep only top 10 scores per category
    const categoryScores = scores.filter((s) => s.category === score.category);
    const sortedCategoryScores = categoryScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    const otherScores = scores.filter((s) => s.category !== score.category);
    const updatedScores = [...otherScores, ...sortedCategoryScores];

    localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(updatedScores));
  } catch (error) {
    console.error("Error saving high score:", error);
  }
};

export const getTopScore = (category: QuizCategory): number => {
  const scores = getHighScores().filter((s) => s.category === category);
  return scores.length > 0 ? Math.max(...scores.map((s) => s.score)) : 0;
};

export const getCategoryStats = (category: QuizCategory) => {
  const scores = getHighScores().filter((s) => s.category === category);
  if (scores.length === 0) return null;

  const totalAttempts = scores.length;
  const averageScore =
    scores.reduce((sum, s) => sum + s.score, 0) / totalAttempts;
  const bestScore = Math.max(...scores.map((s) => s.score));
  const averageTime =
    scores.reduce((sum, s) => sum + s.timeSpent, 0) / totalAttempts;

  return {
    totalAttempts,
    averageScore: Math.round(averageScore),
    bestScore,
    averageTime: Math.round(averageTime),
  };
};
