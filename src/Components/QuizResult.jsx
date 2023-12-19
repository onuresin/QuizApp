import Header from './Header';
import data from'/data.json';

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
                <div className="quiz-end-container">
                    <div className="quiz-complete">
                        <h4 className='quiz-result-word'>Sınav bitti</h4>
                        <h4 className='quiz-score'><b>Sınav sonucu...</b></h4>
                    </div>
                    <div className="score-section">
                        <div className="section-inner">
                            <div className="inner-details">
                                <img src={currentQuiz.icon} alt={currentQuiz.title}/>
                                <p className='topic'>{currentQuiz.title}</p>
                                <p>10 üzerinden</p>
                                <span>{score}</span>
                            </div>
                            <div className='play-again'>
                                <button><p>Tekrar Oyna</p></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}