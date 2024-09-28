import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, title: 'Front End Developer', description: 'Test your React.js skills with this fun quiz!' },
];

const QuizList = () => {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center ">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold text-white">Welcome to the Quiz Application!</h1>
        <p className="text-lg text-white mt-2">Choose a quiz to test your knowledge</p>
      </header>

      {/* Quiz List Section */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
            <p className="text-gray-700 mb-4">{quiz.description}</p>
            <Link to={'/quiz'}>
              <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                Start
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
