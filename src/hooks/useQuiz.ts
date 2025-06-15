import { useState, useEffect, useCallback } from "react";
import type { QuizState, QuizCategory, HighScore } from "../types/quiz";
import { getRandomQuestions } from "../data/questions";
import { saveHighScore } from "../utils/localStorage";

const INITIAL_TIME = 30; // seconds per question
const QUESTIONS_PER_QUIZ = 5;

const initialState: QuizState = {
  currentQuestion: 0,
  score: 0,
  timeLeft: INITIAL_TIME,
  answers: [],
  isActive: false,
  isCompleted: false,
  selectedCategory: null,
  questions: [],
};

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>(initialState);
  const [startTime, setStartTime] = useState<number>(0);

  const startQuiz = useCallback((category: QuizCategory) => {
    const questions = getRandomQuestions(category, QUESTIONS_PER_QUIZ);
    setState({
      ...initialState,
      selectedCategory: category,
      questions,
      isActive: true,
      timeLeft: INITIAL_TIME,
    });
    setStartTime(Date.now());
  }, []);

  const answerQuestion = useCallback(
    (answerIndex: number) => {
      setState((prev) => {
        const isCorrect =
          prev.questions[prev.currentQuestion]?.correctAnswer === answerIndex;
        const newAnswers = [...prev.answers, answerIndex];
        const newScore = isCorrect ? prev.score + 1 : prev.score;
        const nextQuestion = prev.currentQuestion + 1;

        if (nextQuestion >= prev.questions.length) {
          // Quiz completed
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          const highScore: HighScore = {
            category: prev.selectedCategory!,
            score: newScore,
            totalQuestions: prev.questions.length,
            date: new Date().toISOString(),
            timeSpent,
          };
          saveHighScore(highScore);

          return {
            ...prev,
            answers: newAnswers,
            score: newScore,
            isActive: false,
            isCompleted: true,
          };
        }

        return {
          ...prev,
          currentQuestion: nextQuestion,
          answers: newAnswers,
          score: newScore,
          timeLeft: INITIAL_TIME,
        };
      });
    },
    [startTime]
  );

  const resetQuiz = useCallback(() => {
    setState(initialState);
    setStartTime(0);
  }, []);

  const skipQuestion = useCallback(() => {
    answerQuestion(-1); // -1 indicates skipped question
  }, [answerQuestion]);

  // Timer effect
  useEffect(() => {
    if (!state.isActive || state.timeLeft <= 0) return;

    const timer = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 1) {
          // Time's up, skip question
          setTimeout(() => skipQuestion(), 0);
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.isActive, state.timeLeft, skipQuestion]);

  return {
    state,
    startQuiz,
    answerQuestion,
    resetQuiz,
    skipQuestion,
  };
};
