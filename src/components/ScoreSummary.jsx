import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { QuizData } from './QuizData';

const ScoreSummary = () => {
  const location = useLocation();
  const { score, userAnswers } = location.state || { score: 0, userAnswers: [] };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of questions per page
  const totalPages = Math.ceil(QuizData.length / itemsPerPage);

  // Calculate the index range for the current page
  const indexOfLastQuestion = currentPage * itemsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - itemsPerPage;
  const currentQuestions = QuizData.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="p-4 max-w-full w-full ">
        <h1 className="text-4xl font-bold text-red-900 mb-4 text-center">Your Score: {score} / {QuizData.length}</h1>

        {/* Responsive table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b border-gray-300 text-left">Question</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Your Answer</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              {currentQuestions.map((question, index) => (
                <tr key={index + indexOfFirstQuestion} className={userAnswers[index + indexOfFirstQuestion] === question.ans ? 'bg-green-100' : 'bg-red-100'}>
                  <td className="py-2 px-4 border-b border-gray-300">{question.q}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{userAnswers[index + indexOfFirstQuestion] || 'Not answered'}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{question.ans}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-200"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg">Page {currentPage} of {totalPages}</span>
          <button
            className="ml-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-200"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className='text-center'>
          <Link to="/">
            <button
              className="mt-6 px-6 py-3 bg-indigo-950 text-white rounded-lg hover:bg-indigo-800 transition duration-200"
            >
              Go Back to Quiz List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
