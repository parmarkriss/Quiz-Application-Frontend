import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuizData } from './QuizData';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60); 
  const [isTimerActive, setIsTimerActive] = useState(false); 

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setUserAnswers([...userAnswers, selectedAnswer]);
      setShowScore(true);
      setIsTimerActive(true);
      setTimer(60);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === QuizData[index].ans ? 1 : 0);
    }, 0);
  };

  return (
    <div className="min-h-96 flex items-center justify-center p-6">
      {showScore ? (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl mb-4">Your answers have been submitted.</p>
          {timer > 0 ? (
            <>
              <div className="text-lg mb-4">Time remaining: {timer} seconds</div>
              <p className="text-md mb-4">Your results will be shown after 1 minute Please wait.</p> 
            </>
          ) : (
            <Link to="/score-summary" state={{ score: calculateScore(), userAnswers }}>
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                View Score
              </button>
            </Link>
          )}
        </div>

      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">{QuizData[currentQuestion].q}</h2>
          <div className="space-y-4">
            {['a', 'b', 'c', 'd'].map((option) => (
              <button
                key={option}
                className={`w-full text-left p-3 rounded transition duration-200 ${selectedAnswer === QuizData[currentQuestion][option]
                    ? 'bg-blue-300 text-blue-800'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                onClick={() => {
                  handleAnswerSelect(QuizData[currentQuestion][option]);
                }}
              >
                {QuizData[currentQuestion][option]}
              </button>
            ))}
          </div>

          <button
            className="mt-6 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
