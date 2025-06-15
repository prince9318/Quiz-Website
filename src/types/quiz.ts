export interface Question {
  id: string;
  category: QuizCategory;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  answers: number[];
  isActive: boolean;
  isCompleted: boolean;
  selectedCategory: QuizCategory | null;
  questions: Question[];
}

export interface HighScore {
  category: QuizCategory;
  score: number;
  totalQuestions: number;
  date: string;
  timeSpent: number;
}

export type QuizCategory =
  | "dsa"
  | "html"
  | "css"
  | "javascript"
  | "reactjs"
  | "typescript"
  | "nodejs"
  | "mongodb"
  | "git"
  | "linux";

export interface CategoryInfo {
  name: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
}
