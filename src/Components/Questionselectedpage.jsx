import Header from "./Header";
import React, { useState } from "react";
import data from '/data.json';
import QuizResult from "./QuizResult";

export default function QuestionSelectedPage({ currentQuiz, setCurrentQuiz, currentQuestion, setCurrentQuestion }) {
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSelectedAnswer, setIsSelectedAnswer] = useState(true);
  const correctAnswer = currentQuiz.questions[currentQuestion].correctAnswer;
  const [activeBorderIndex, setActiveBorderIndex] = useState(-1) // border işaretlediğimizde kenarları renklensin diye eklediğimiz değişken

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setActiveBorderIndex(-1);
  };

  const handleSubmit = () => {
    if (userAnswer === null) return setIsSelectedAnswer(false);
    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setIsSelectedAnswer(true);
    setSubmitted(true);
    setActiveBorderIndex(-1);
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
    setUserAnswer(null);
    setSubmitted(false);
    setActiveBorderIndex(-1);
  };

  const disableOptions = submitted ? { pointerEvents: 'none' } : {};

  return (
    <>
      {currentQuestion <= 9 ? (
        <>
          <div className="container-qsp">
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
                  <p>Soru {currentQuestion + 1} /10</p>
                  <h2>{currentQuiz.questions[currentQuestion].question}</h2>
                </div>
                <div className="progressbarContainer">
                  <div className="progressbar" style={{ width: `${(currentQuestion + 1) / 10 * 100}%` }}></div>
                </div>
              </div>
              <div className="answers">
                {currentQuiz.questions[currentQuestion].choices.map((answer, index) => (
                <div className="answer" key={index}>
                  <button
                     onClick={() => {
                      handleAnswer(answer);
                      setActiveBorderIndex(index);          }}
                    style={{
                      ...disableOptions,
                      border: index === activeBorderIndex ? '2px solid #A729F5' : 'none',
                    }}
                  >
                    <span className="spanSlice">
                      <span className={`answerOptions ${index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'} ${submitted && userAnswer === answer ? 
                        (userAnswer === correctAnswer ? 'correct' : 'incorrect') : ''} ${index === activeBorderIndex ? 'activeBorder' : ''}`}>
                        {index === 0 && ('A') || index === 1 && ('B') || index === 2 && ('C') || index === 3 && ('D')}
                      </span>
                      {' '}
                      <span className="spanAnswer"><p>{answer}</p></span>
                    </span>
                    {submitted && userAnswer === answer && (
                      <>
                        {userAnswer === correctAnswer ? (
                          <img src="/images/true-check.svg" alt="True Check" className="trueIcon" />
                        ) : (
                          <img src="/images/error-cross.svg" alt="Error Cross" className="crossIcon" />
                        )}
                      </>
                    )}
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
                {!isSelectedAnswer && <p className="errorText"><img src="images/error-cross.svg" alt="" />Lütfen bir cevap seçiniz</p>}
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
