import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import QuestionSelectedPage from './Components/Questionselectedpage';
import TopicSelection from './Components/Topicselection';
import QuizResult from './Components/QuizResult';

function App() {
  const [currentQuiz, setCurrentQuiz] = useState([]);;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function handleQuestionPage(quiz) {
    setCurrentQuiz(quiz);
  }
  
  return (
    <>
    {currentQuiz.length === 0 ? 
    <div className='container'>
        <div className="welcome-sec">
            <Header />
            <div className="inner">
              <div className="welcome">
                <h2 className="wel">Hoşgeldiniz!</h2>
                <h2 className="quizz">FrontEnd Sınavı</h2>
                <p>Başlamak için bir kategori seçiniz.</p>
              </div>
              <div className="topicSelection">
                  {data.quizzes.map((quiz,index) => 
                  <label><button onClick={e => handleQuestionPage(quiz)} key={index}><img src={quiz.icon}/><p>{quiz.title}</p></button></label>)}
              </div>
            </div>
        </div>
    </div>
    :
    <QuestionSelectedPage currentQuiz={currentQuiz} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
  }
    </>
  )

}

export default App
