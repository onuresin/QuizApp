import Header from './Header';
import '/data.json';

export default function QuizResult() {
    return (
        <>
            <div className="container">
                <div className="header-topic">
                    <div className="topic-title">
                        <img src={currentQuiz.icon} alt={currentQuiz.title} />
                        <p>{currentQuiz.title}</p>
                    </div>
                    <div className="topic-right">
                        <Header />
                    </div>
                    
                </div>
            </div>
        </>
    )
}