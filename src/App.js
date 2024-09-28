import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizList from './components/QuizList';
import QuizPage from './components/QuizPage';
import ScoreSummary from './components/ScoreSummary';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-300 to-blue-600">
        < Header/>
        <main className="flex-grow container mx-auto p-4 ">
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/score-summary" element={<ScoreSummary />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
