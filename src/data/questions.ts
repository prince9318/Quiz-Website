import type { Question, QuizCategory } from "../types/quiz";

export const questionBank: Record<QuizCategory, Question[]> = {
  dsa: [
    {
      id: "dsa-1",
      category: "dsa",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correctAnswer: 1,
      explanation:
        "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.",
      difficulty: "easy",
    },
    {
      id: "dsa-2",
      category: "dsa",
      question:
        "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: 1,
      explanation:
        "Stack follows LIFO principle where the last element added is the first one to be removed.",
      difficulty: "easy",
    },
    {
      id: "dsa-3",
      category: "dsa",
      question: "What is the worst-case time complexity of QuickSort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctAnswer: 1,
      explanation:
        "QuickSort has O(n²) worst-case time complexity when the pivot is always the smallest or largest element.",
      difficulty: "medium",
    },
    {
      id: "dsa-4",
      category: "dsa",
      question:
        "Which traversal method is used to get elements in sorted order from a BST?",
      options: ["Preorder", "Inorder", "Postorder", "Level order"],
      correctAnswer: 1,
      explanation:
        "Inorder traversal of a Binary Search Tree visits nodes in ascending sorted order.",
      difficulty: "medium",
    },
    {
      id: "dsa-5",
      category: "dsa",
      question: "What is the space complexity of merge sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 2,
      explanation:
        "Merge sort requires O(n) extra space for the temporary arrays used during merging.",
      difficulty: "hard",
    },
    {
      id: "dsa-6",
      category: "dsa",
      question: "Which algorithm uses divide and conquer approach?",
      options: [
        "Bubble Sort",
        "Merge Sort",
        "Insertion Sort",
        "Selection Sort",
      ],
      correctAnswer: 1,
      explanation:
        "Merge Sort divides the array into halves, sorts them, and then merges them back together.",
      difficulty: "medium",
    },
    {
      id: "dsa-7",
      category: "dsa",
      question:
        "What is the time complexity of accessing an element in an array by index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Array access by index is constant time O(1) operation.",
      difficulty: "easy",
    },
  ],
  html: [
    {
      id: "html-1",
      category: "html",
      question: "Which HTML5 element is used for navigation links?",
      options: ["<nav>", "<menu>", "<navigation>", "<links>"],
      correctAnswer: 0,
      explanation:
        "The <nav> element represents a section of navigation links.",
      difficulty: "easy",
    },
    {
      id: "html-2",
      category: "html",
      question: 'What does the "defer" attribute do in a script tag?',
      options: [
        "Loads script asynchronously",
        "Delays script execution until DOM is parsed",
        "Prevents script from loading",
        "Makes script load faster",
      ],
      correctAnswer: 1,
      explanation:
        "The defer attribute delays script execution until the HTML document has been completely parsed.",
      difficulty: "medium",
    },
    {
      id: "html-3",
      category: "html",
      question: "Which attribute makes an input field required?",
      options: ["mandatory", "required", "validate", "needed"],
      correctAnswer: 1,
      explanation:
        "The required attribute specifies that an input field must be filled out before submitting the form.",
      difficulty: "easy",
    },
    {
      id: "html-4",
      category: "html",
      question: "What is the correct way to create a comment in HTML?",
      options: ["// Comment", "/* Comment */", "<!-- Comment -->", "# Comment"],
      correctAnswer: 2,
      explanation:
        "HTML comments are created using <!-- comment text --> syntax.",
      difficulty: "easy",
    },
    {
      id: "html-5",
      category: "html",
      question: "Which HTML5 input type is used for email validation?",
      options: ["text", "email", "mail", "validate"],
      correctAnswer: 1,
      explanation:
        "The email input type provides built-in email validation in HTML5.",
      difficulty: "easy",
    },
    {
      id: "html-6",
      category: "html",
      question: "Which attribute specifies an alternate text for an image?",
      options: ["src", "href", "alt", "title"],
      correctAnswer: 2,
      explanation:
        "The alt attribute provides alternative text for screen readers and when images can't be displayed.",
      difficulty: "easy",
    },
    {
      id: "html-7",
      category: "html",
      question: "What does the <canvas> element do?",
      options: [
        "Creates a container for graphics",
        "Draws borders around elements",
        "Displays tabular data",
        "Embeds video content",
      ],
      correctAnswer: 0,
      explanation:
        "The <canvas> element is used to draw graphics via JavaScript.",
      difficulty: "medium",
    },
  ],
  css: [
    {
      id: "css-1",
      category: "css",
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "font-color", "color", "foreground-color"],
      correctAnswer: 2,
      explanation: "The color property sets the color of text content.",
      difficulty: "easy",
    },
    {
      id: "css-2",
      category: "css",
      question: 'What does "flex: 1" mean in CSS Flexbox?',
      options: [
        "Set width to 1px",
        "Take 1 unit of available space",
        "First flex item",
        "Set flex-basis to 1",
      ],
      correctAnswer: 1,
      explanation:
        "flex: 1 is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0, making the item take available space.",
      difficulty: "medium",
    },
    {
      id: "css-3",
      category: "css",
      question: "Which CSS unit is relative to the viewport width?",
      options: ["em", "rem", "vw", "px"],
      correctAnswer: 2,
      explanation:
        "vw (viewport width) is a relative unit where 1vw equals 1% of the viewport width.",
      difficulty: "medium",
    },
    {
      id: "css-4",
      category: "css",
      question: "What is the default position value in CSS?",
      options: ["relative", "absolute", "static", "fixed"],
      correctAnswer: 2,
      explanation:
        "The default position value is static, which positions elements in normal document flow.",
      difficulty: "easy",
    },
    {
      id: "css-5",
      category: "css",
      question: "Which CSS property controls the stacking order of elements?",
      options: ["z-index", "stack-order", "layer", "depth"],
      correctAnswer: 0,
      explanation:
        "z-index controls the stacking order of positioned elements along the z-axis.",
      difficulty: "medium",
    },
    {
      id: "css-6",
      category: "css",
      question:
        "Which property creates space between element border and content?",
      options: ["margin", "border", "spacing", "padding"],
      correctAnswer: 3,
      explanation:
        "Padding creates space between an element's border and its content.",
      difficulty: "easy",
    },
    {
      id: "css-7",
      category: "css",
      question: "What does CSS Grid layout use to define columns and rows?",
      options: [
        "grid-template",
        "grid-areas",
        "grid-cells",
        "grid-template-columns/rows",
      ],
      correctAnswer: 3,
      explanation:
        "grid-template-columns and grid-template-rows define the tracks in a grid.",
      difficulty: "medium",
    },
  ],
  javascript: [
    {
      id: "js-1",
      category: "javascript",
      question: 'What is the difference between "==" and "===" in JavaScript?',
      options: [
        "No difference",
        "== checks type, === checks value",
        "== checks value, === checks type and value",
        "=== is faster",
      ],
      correctAnswer: 2,
      explanation:
        "== performs type coercion while === checks both type and value without coercion.",
      difficulty: "easy",
    },
    {
      id: "js-2",
      category: "javascript",
      question: 'What does "hoisting" mean in JavaScript?',
      options: [
        "Moving code to top of file",
        "Variable declarations are moved to top of scope",
        "Functions are cached",
        "Code optimization",
      ],
      correctAnswer: 1,
      explanation:
        "Hoisting moves variable and function declarations to the top of their containing scope during compilation.",
      difficulty: "medium",
    },
    {
      id: "js-3",
      category: "javascript",
      question:
        "Which method is used to add an element to the end of an array?",
      options: ["append()", "push()", "add()", "insert()"],
      correctAnswer: 1,
      explanation:
        "The push() method adds one or more elements to the end of an array.",
      difficulty: "easy",
    },
    {
      id: "js-4",
      category: "javascript",
      question: "What is a closure in JavaScript?",
      options: [
        "A way to close functions",
        "Function with access to outer scope variables",
        "End of code block",
        "Function termination",
      ],
      correctAnswer: 1,
      explanation:
        "A closure is a function that has access to variables in its outer (enclosing) lexical scope.",
      difficulty: "hard",
    },
    {
      id: "js-5",
      category: "javascript",
      question: "Which operator is used for strict equality comparison?",
      options: ["==", "===", "!=", "!=="],
      correctAnswer: 1,
      explanation:
        "The === operator performs strict equality comparison without type coercion.",
      difficulty: "easy",
    },
    {
      id: "js-6",
      category: "javascript",
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The function itself",
        "The global object",
        "The object the function belongs to",
        "Always refers to window",
      ],
      correctAnswer: 2,
      explanation:
        "'this' refers to the object that the function is a property of.",
      difficulty: "medium",
    },
    {
      id: "js-7",
      category: "javascript",
      question:
        "Which method creates a new array with all elements that pass a test?",
      options: ["map()", "filter()", "reduce()", "forEach()"],
      correctAnswer: 1,
      explanation:
        "filter() creates a new array with elements that pass the provided function's test.",
      difficulty: "easy",
    },
  ],
  // Adding new categories
  reactjs: [
    {
      id: "react-1",
      category: "reactjs",
      question: "What is JSX?",
      options: [
        "A templating language",
        "JavaScript XML syntax extension",
        "A state management library",
        "A build tool",
      ],
      correctAnswer: 1,
      explanation:
        "JSX is a syntax extension that allows writing HTML-like code in JavaScript.",
      difficulty: "easy",
    },
    {
      id: "react-2",
      category: "reactjs",
      question: "Which hook is used for side effects?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: 1,
      explanation: "useEffect handles side effects in function components.",
      difficulty: "medium",
    },
  ],

  typescript: [
    {
      id: "ts-1",
      category: "typescript",
      question: "What is TypeScript?",
      options: [
        "A superset of JavaScript",
        "A completely different language",
        "A JavaScript framework",
        "A testing library",
      ],
      correctAnswer: 0,
      explanation:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      difficulty: "easy",
    },
    {
      id: "ts-2",
      category: "typescript",
      question: "Which keyword defines a custom type?",
      options: ["var", "interface", "class", "function"],
      correctAnswer: 1,
      explanation:
        "The interface keyword is used to define custom types in TypeScript.",
      difficulty: "medium",
    },
  ],
  nodejs: [
    {
      id: "node-1",
      category: "nodejs",
      question: "What is the purpose of package.json in Node.js?",
      options: [
        "Store application data",
        "Define project metadata and dependencies",
        "Configure server settings",
        "Store user preferences",
      ],
      correctAnswer: 1,
      explanation:
        "package.json contains project metadata, dependencies, scripts, and configuration information.",
      difficulty: "easy",
    },
    {
      id: "node-2",
      category: "nodejs",
      question: "Which module is used to create HTTP servers in Node.js?",
      options: ["fs", "http", "path", "url"],
      correctAnswer: 1,
      explanation:
        "The http module provides functionality to create HTTP servers and clients.",
      difficulty: "easy",
    },
    {
      id: "node-3",
      category: "nodejs",
      question: "What is middleware in Express.js?",
      options: [
        "Database connection",
        "Functions that execute during request-response cycle",
        "Template engine",
        "Static file server",
      ],
      correctAnswer: 1,
      explanation:
        "Middleware functions execute during the request-response cycle and can modify req/res objects.",
      difficulty: "medium",
    },
    {
      id: "node-4",
      category: "nodejs",
      question: "Which command installs a package locally in Node.js?",
      options: [
        "npm install -g package",
        "npm install package",
        "npm global package",
        "npm add package",
      ],
      correctAnswer: 1,
      explanation:
        "npm install package installs a package locally in the node_modules directory.",
      difficulty: "easy",
    },
    {
      id: "node-5",
      category: "nodejs",
      question: "What is the event loop in Node.js?",
      options: [
        "A for loop",
        "Mechanism for handling asynchronous operations",
        "Database connection pool",
        "Error handling system",
      ],
      correctAnswer: 1,
      explanation:
        "The event loop is the mechanism that handles asynchronous callbacks and enables non-blocking I/O.",
      difficulty: "hard",
    },
    {
      id: "node-6",
      category: "nodejs",
      question: "What is the purpose of the __dirname variable?",
      options: [
        "Current working directory",
        "Directory of the current module",
        "Root directory",
        "Temporary directory",
      ],
      correctAnswer: 1,
      explanation: "__dirname gives the directory name of the current module.",
      difficulty: "medium",
    },
    {
      id: "node-7",
      category: "nodejs",
      question: "Which core module provides file system operations?",
      options: ["http", "fs", "path", "os"],
      correctAnswer: 1,
      explanation: "The fs module provides file I/O operations.",
      difficulty: "easy",
    },
  ],
  mongodb: [
    {
      id: "mongo-1",
      category: "mongodb",
      question: "What type of database is MongoDB?",
      options: ["Relational", "Document-oriented NoSQL", "Graph", "Key-value"],
      correctAnswer: 1,
      explanation:
        "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents.",
      difficulty: "easy",
    },
    {
      id: "mongo-2",
      category: "mongodb",
      question: "Which method is used to find documents in MongoDB?",
      options: ["search()", "find()", "query()", "select()"],
      correctAnswer: 1,
      explanation:
        "The find() method is used to query and retrieve documents from a MongoDB collection.",
      difficulty: "easy",
    },
    {
      id: "mongo-3",
      category: "mongodb",
      question: "What is a collection in MongoDB?",
      options: [
        "A single document",
        "Group of related documents",
        "Database schema",
        "Index structure",
      ],
      correctAnswer: 1,
      explanation:
        "A collection is a group of related documents in MongoDB, similar to a table in relational databases.",
      difficulty: "easy",
    },
    {
      id: "mongo-4",
      category: "mongodb",
      question: "Which operator is used for text search in MongoDB?",
      options: ["$search", "$text", "$find", "$match"],
      correctAnswer: 1,
      explanation:
        "The $text operator performs text search on string content with text indexes.",
      difficulty: "medium",
    },
    {
      id: "mongo-5",
      category: "mongodb",
      question: "What is sharding in MongoDB?",
      options: [
        "Data backup",
        "Horizontal partitioning of data",
        "Query optimization",
        "Index creation",
      ],
      correctAnswer: 1,
      explanation:
        "Sharding is a method for distributing data across multiple machines horizontally.",
      difficulty: "hard",
    },
    {
      id: "mongo-6",
      category: "mongodb",
      question:
        "Which operator updates a document if it exists or inserts if it doesn't?",
      options: ["$set", "$upsert", "updateOne()", "update() with upsert:true"],
      correctAnswer: 3,
      explanation:
        "The update() method with upsert:true option performs this operation.",
      difficulty: "hard",
    },
    {
      id: "mongo-7",
      category: "mongodb",
      question: "What is the purpose of MongoDB aggregation?",
      options: [
        "To combine data from multiple collections",
        "To perform batch processing of data",
        "To transform and analyze data in pipelines",
        "To create backups",
      ],
      correctAnswer: 2,
      explanation:
        "Aggregation processes data records and returns computed results through a pipeline.",
      difficulty: "medium",
    },
  ],
  git: [
    {
      id: "git-1",
      category: "git",
      question: "Which command creates a new Git repository?",
      options: ["git create", "git init", "git new", "git start"],
      correctAnswer: 1,
      explanation:
        "git init initializes a new Git repository in the current directory.",
      difficulty: "easy",
    },
    {
      id: "git-2",
      category: "git",
      question: 'What does "git add ." do?',
      options: [
        "Add one file",
        "Add all changes to staging area",
        "Create new branch",
        "Commit changes",
      ],
      correctAnswer: 1,
      explanation:
        "git add . stages all modified and new files in the current directory for commit.",
      difficulty: "easy",
    },
    {
      id: "git-3",
      category: "git",
      question: "Which command is used to create a new branch?",
      options: [
        "git branch new-branch",
        "git create-branch new-branch",
        "git new new-branch",
        "git checkout new-branch",
      ],
      correctAnswer: 0,
      explanation:
        "git branch new-branch creates a new branch with the specified name.",
      difficulty: "easy",
    },
    {
      id: "git-4",
      category: "git",
      question: 'What is the difference between "git merge" and "git rebase"?',
      options: [
        "No difference",
        "Merge creates merge commit, rebase rewrites history",
        "Rebase is faster",
        "Merge is safer",
      ],
      correctAnswer: 1,
      explanation:
        "Merge creates a merge commit preserving branch history, while rebase rewrites commit history linearly.",
      difficulty: "hard",
    },
    {
      id: "git-5",
      category: "git",
      question: "Which command shows the current status of the repository?",
      options: ["git info", "git status", "git state", "git current"],
      correctAnswer: 1,
      explanation:
        "git status displays the state of the working directory and staging area.",
      difficulty: "easy",
    },
    {
      id: "git-6",
      category: "git",
      question: "Which command shows the commit history?",
      options: ["git history", "git log", "git commits", "git show"],
      correctAnswer: 1,
      explanation: "git log displays the commit history.",
      difficulty: "easy",
    },
    {
      id: "git-7",
      category: "git",
      question: "What does 'git fetch' do?",
      options: [
        "Downloads changes but doesn't merge",
        "Downloads and merges changes",
        "Uploads local changes",
        "Creates a new branch",
      ],
      correctAnswer: 0,
      explanation:
        "git fetch downloads objects and refs from another repository without merging.",
      difficulty: "medium",
    },
  ],
  linux: [
    {
      id: "linux-1",
      category: "linux",
      question: "Which command lists files and directories?",
      options: ["list", "ls", "dir", "show"],
      correctAnswer: 1,
      explanation:
        "ls command lists the contents of directories in Linux/Unix systems.",
      difficulty: "easy",
    },
    {
      id: "linux-2",
      category: "linux",
      question: 'What does "chmod 755" do?',
      options: [
        "Change file owner",
        "Set file permissions (rwxr-xr-x)",
        "Delete file",
        "Move file",
      ],
      correctAnswer: 1,
      explanation:
        "chmod 755 sets permissions to read/write/execute for owner and read/execute for group and others.",
      difficulty: "medium",
    },
    {
      id: "linux-3",
      category: "linux",
      question: "Which command displays running processes?",
      options: ["processes", "ps", "proc", "list-proc"],
      correctAnswer: 1,
      explanation:
        "ps command displays information about currently running processes.",
      difficulty: "easy",
    },
    {
      id: "linux-4",
      category: "linux",
      question: 'What does the "grep" command do?',
      options: [
        "Copy files",
        "Search text patterns",
        "Remove files",
        "Change permissions",
      ],
      correctAnswer: 1,
      explanation:
        "grep searches for text patterns within files using regular expressions.",
      difficulty: "easy",
    },
    {
      id: "linux-5",
      category: "linux",
      question: "Which command shows disk usage?",
      options: ["disk", "du", "space", "usage"],
      correctAnswer: 1,
      explanation:
        "du (disk usage) command displays the disk space used by files and directories.",
      difficulty: "easy",
    },
    {
      id: "linux-6",
      category: "linux",
      question: "Which command changes file ownership?",
      options: ["chmod", "chown", "chuser", "own"],
      correctAnswer: 1,
      explanation: "chown changes file owner and group.",
      difficulty: "medium",
    },
    {
      id: "linux-7",
      category: "linux",
      question: "What does 'sudo' stand for?",
      options: [
        "Super User Do",
        "Switch User Do",
        "Super User Directory Operation",
        "Substitute User Do",
      ],
      correctAnswer: 3,
      explanation: "sudo stands for 'substitute user do' or 'superuser do'.",
      difficulty: "easy",
    },
  ],
};

export const getRandomQuestions = (
  category: QuizCategory,
  count: number = 5
): Question[] => {
  const categoryQuestions = questionBank[category];
  const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, categoryQuestions.length));
};
