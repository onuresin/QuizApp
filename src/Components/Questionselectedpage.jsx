import Header from "./Header"
import React, { useState,useEffect } from "react"
import data from '/data.json';
import QuizResult from "./QuizResult";


// []  ()

export default function QuestionSelectedPage({currentQuiz, setCurrentQuiz, currentQuestion, setCurrentQuestion}) {
    const [userAnswer, setUserAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [mixQuestions, setMixQuestions] = useState([]);
    const [isSelectedAnswer, setIsSelectedAnswer] = useState(true);
    const [options, setOptions] = useState("A");
    
    useEffect(() => {
      if (data.questions) {
        const shuffledQuestions = data.questions.sort(() => Math.random() - 0.5).slice(0, 10);
        setMixQuestions(shuffledQuestions);
      }
    }, []);

    const handleAnswer = (answer) => {
        setUserAnswer(answer);
    };
    
    const handleSubmit = () => {
        if(userAnswer === null) return setIsSelectedAnswer(false);
        if(userAnswer === currentQuiz.questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setIsSelectedAnswer(true);
        setSubmitted(true);
    };
    const nextQuestion = () => {
        if (currentQuestion < currentQuiz.questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        }
        setUserAnswer(null);
        setSubmitted(false);
      };
      return (
        <>
          {currentQuestion <= 9 ? (
            <>
              <div className="container">
                <div className="questionHeader">
                  <div className="questionTitle">
                    <img src={currentQuiz.icon} alt="Accessibility Icon" />
                    <p>{currentQuiz.title}</p>
                  </div>
                  <div className="div">
                    <Header />
                  </div>
                </div>
                <div className="questionSection">
                  <div className="questions">
                    <div className="questionsText">
                      <p>Soru {currentQuestion + 1} 10</p>
                      <h2>{currentQuiz.questions[currentQuestion].question}</h2>
                    </div>
                    <div className="progressbarContainer">
                      <div className="progressbar" style={{ width: `${(currentQuestion + 1) / 10 * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="answers">
                    {currentQuiz.questions[currentQuestion].choices.map((answer, index) => (
                      <div className="answer" key={index}>
                        <button onClick={() => handleAnswer(answer)}>
                          {index === 0 && ("A") || index === 1 && ("B") || index === 2 && ("C") || index === 3 && ("D")}
                          {' '}
                          <p>{answer}</p>
                        </button>
                      </div>
                    ))}
                    {!submitted ? (
                      <button onClick={handleSubmit} className="submitAnswer">
                        <p className="answerBtn">Cevabı Onayla</p>
                      </button>
                    ) : (
                      <button onClick={nextQuestion} className="submitAnswer">
                        <p className="answerBtn">Sırada ki soru</p>
                      </button>
                    )}
                    {!isSelectedAnswer && <p className="errorText">Lütfen bir cevap seçiniz</p>}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <QuizResult score={score} currentQuiz={currentQuiz} />
          )}
        </>
      );
    
}