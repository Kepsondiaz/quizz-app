export const quiz = [
    {
      id: 1,
      question: "What is TypeScript?",
      answers: [
        "a. A database management system.",
        "b. A statically typed superset of JavaScript.",
        "c. A low-level programming language.",
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "How do you declare a variable with a specific type in TypeScript?",
      answers: [
        "a. let x = 42;",
        "b. let x: number = 42;",
        "c. const x = 42;",
      ],
      correctAnswer: "b",
    },
    {
      id: 3,
      question: "What is the primary purpose of an interface in TypeScript?",
      answers: [
        "a. To define default values for variables.",
        "b. To describe the shape of objects.",
        "c. To restrict access to class properties.",
      ],
      correctAnswer: "b",
    },
    {
      id: 4,
      question: "How are type aliases different from interfaces in TypeScript?",
      answers: [
        "a. Type aliases can extend other types, while interfaces cannot.",
        "b. Type aliases can represent unions and intersections, while interfaces cannot.",
        "c. Type aliases are used for defining classes, while interfaces are used for functions.",
      ],
      correctAnswer: "b",
    },
    // Add more questions as needed
  ];
  
  // Example usage to access a question and its answers:
//   const firstQuestion = quiz[0];
//   console.log(`Question: ${firstQuestion.question}`);
//   console.log(`Answers:`);
//   firstQuestion.answers.forEach((answer) => {
//     console.log(answer);
//   });
//   console.log(`Correct Answer: ${firstQuestion.correctAnswer}`);
  