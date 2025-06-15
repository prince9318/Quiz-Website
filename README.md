# QuizMaster

QuizMaster is a modern, interactive quiz web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It allows users to test their knowledge across a variety of technical domains, including DSA, HTML, CSS, JavaScript, React, TypeScript, Node.js, MongoDB, Git, and Linux.

## Features

- **Category Selection:** Choose from multiple technical domains.
- **Timed Quizzes:** 30 seconds per question, 5 questions per quiz.
- **Instant Feedback:** See correct answers and explanations after each question.
- **Progress Tracking:** Visual progress bar and score tracking.
- **High Scores:** Local storage of best scores and stats per category.
- **Responsive Design:** Works great on desktop and mobile.
- **Beautiful UI:** Built with Tailwind CSS and Lucide icons.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/Quiz-Website.git
   cd Quiz-Website
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── types/
│   └── utils/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

- **Add Questions:** Edit [`src/data/questions.ts`](src/data/questions.ts) to add or modify quiz questions.
- **Add Categories:** Update [`src/constants/categories.ts`](src/constants/categories.ts) and [`src/types/quiz.ts`](src/types/quiz.ts) to add new quiz categories.
- **Styling:** Customize styles in [`src/App.css`](src/App.css) and [`src/index.css`](src/index.css).

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and new features.

## License

[MIT](LICENSE)

---

Made with ❤️ using React, TypeScript, and Tailwind CSS.

> Designed and developed with ❤️ by prince9318
