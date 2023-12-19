import React, { useState } from "react";
import '.data.json'
// () []
export default function Quiz() {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);

    const handleAnswer = (answer) => {
        setUserAnswer(answer);
        if (answer === data.quizzes[currentQuiz].questions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < data.quizzes[currentQuiz].questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
         } else {
                setCurrentQuestion(currentQuiz - 1);
                setCurrentQuestion(0);
            }
            setUserAnswer(null);
        };
    
    if (currentQuiz >= data.quizzes.length) {
        return <div>Quiz Bitti! Skorunuz: {score}</div>
    }
    
    return (
        <div>
            <h1>{data.quizzes[currentQuiz].questions[currentQuestion].question}</h1>
            {data.quizzes[currentQuiz].question[currentQuestion].choices.map((correctAnswer, index) =>(
                <button onClick={() => handleAnswer(answer)}>{answer}</button>
            )) }
             {userAnswer !== null && (
        <button onClick={nextQuestion}>Sonraki Soru</button>)}
        <p>Skor: {score}</p>
        </div>
    )
}