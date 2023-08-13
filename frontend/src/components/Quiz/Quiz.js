import React, { useState } from "react";
import { useSelector } from "react-redux";
const questions = [
  {
    question: "What does ROI stand for?",
    options: [
      "Return on Investment",
      "Rate of Inflation",
      "Risk of Income",
      "Revenue over Interest",
    ],
    correctAnswer: "Return on Investment",
  },
  {
    question: "Which of the following is a type of retirement account?",
    options: [
      "Savings Account",
      "Checking Account",
      "IRA",
      "Certificate of Deposit",
    ],
    correctAnswer: "IRA",
  },
  {
    question: "What is the purpose of diversification in investing?",
    options: [
      "Maximizing potential returns",
      "Minimizing risk by spreading investments",
      "Minimizing taxes",
      "Increasing leverage",
    ],
    correctAnswer: "Minimizing risk by spreading investments",
  },
  // Add more questions here
];

function FinanceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      updateLeaderboard();
    }
  };

  const updateLeaderboard = () => {
    const newEntry = {
      name: playerName,
      score: score,
      totalQuestions: questions.length,
    };

    setLeaderboard([...leaderboard, newEntry]);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setPlayerName("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        {!showResult ? (
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Question {currentQuestion + 1}
            </h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">Quiz Results</h2>
            <p className="mb-4">
              Your Score: {score} / {questions.length}
            </p>

            <button
              onClick={restartQuiz}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
      {leaderboard.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
          <table className="border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Score</th>
                <th className="border p-2">Total Questions</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{entry.score}</td>
                  <td className="border p-2">{entry.totalQuestions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FinanceQuiz;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const questions = [
//   {
//     question: "What does ROI stand for?",
//     options: [
//       "Return on Investment",
//       "Rate of Inflation",
//       "Risk of Income",
//       "Revenue over Interest",
//     ],
//     correctAnswer: "Return on Investment",
//   },
//   {
//     question: "Which of the following is a type of retirement account?",
//     options: [
//       "Savings Account",
//       "Checking Account",
//       "IRA",
//       "Certificate of Deposit",
//     ],
//     correctAnswer: "IRA",
//   },
//   {
//     question: "What is the purpose of diversification in investing?",
//     options: [
//       "Maximizing potential returns",
//       "Minimizing risk by spreading investments",
//       "Minimizing taxes",
//       "Increasing leverage",
//     ],
//     correctAnswer: "Minimizing risk by spreading investments",
//   },
//   {
//     question: "What is the Rule of 72?",
//     options: [
//       "A mathematical formula for calculating compound interest",
//       "A retirement savings account",
//       "A rule for budgeting expenses",
//       "A tax deduction for investments",
//     ],
//     correctAnswer: "A mathematical formula for calculating compound interest",
//   },
//   {
//     question: "What is a bear market?",
//     options: [
//       "A market with rising stock prices",
//       "A market with declining stock prices",
//       "A market with stable stock prices",
//       "A market with no trading activity",
//     ],
//     correctAnswer: "A market with declining stock prices",
//   },
// ];

// function FinanceQuiz() {
//   // const [questions, setQuestions] = useState(questions);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [playerName, setPlayerName] = useState("");
//   const [leaderboard, setLeaderboard] = useState([]);
//   const { user, loading, isAuthenticated } = useSelector((state) => state.user);

//   const handleAnswerClick = (selectedAnswer) => {
//     if (selectedAnswer === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//       updateLeaderboard();
//     }
//   };

//   const updateLeaderboard = () => {
//     const newEntry = {
//       name: playerName,
//       score: score,
//       totalQuestions: questions.length,
//     };

//     setLeaderboard([...leaderboard, newEntry]);
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowResult(false);
//     setPlayerName("");
//   };

//   // useEffect(() => {
//   //   // Shuffle the questions array when the component mounts
//   //   shuffleQuestions();
//   // }, []);

//   // const shuffleQuestions = () => {
//   //   const shuffledQuestions = [...questions];
//   //   for (let i = shuffledQuestions.length - 1; i > 0; i--) {
//   //     const j = Math.floor(Math.random() * (i + 1));
//   //     [shuffledQuestions[i], shuffledQuestions[j]] = [
//   //       shuffledQuestions[j],
//   //       shuffledQuestions[i],
//   //     ];
//   //   }
//   //   setQuestions(shuffledQuestions);
//   // };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full md:max-w-xl">
//         {!showResult ? (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">
//               Question {currentQuestion + 1}
//             </h2>
//             <p className="mb-4">{questions[currentQuestion].question}</p>
//             <div className="space-y-2">
//               {questions[currentQuestion].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswerClick(option)}
//                   className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600 w-full"
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="text-center">
//             <h2 className="text-lg font-semibold mb-2">Quiz Results</h2>
//             <p className="mb-4">
//               Your Score: {score} / {questions.length}
//             </p>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="border p-2 rounded mb-2 w-full"
//               value={playerName}
//               onChange={(e) => setPlayerName(e.target.value)}
//             />
//             <button
//               onClick={restartQuiz}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Restart Quiz
//             </button>
//           </div>
//         )}
//       </div>
//       {leaderboard.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
//           <table className="border-collapse border w-full">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Score</th>
//                 <th className="border p-2">Total Questions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaderboard.map((entry, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
//                 >
//                   <td className="border p-2">{entry.name}</td>
//                   <td className="border p-2">{entry.score}</td>
//                   <td className="border p-2">{entry.totalQuestions}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FinanceQuiz;
