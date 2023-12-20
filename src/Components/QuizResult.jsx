import Header from './Header';
import data from'/data.json';


export default function QuizResult({currentQuiz, score}) {
    return (
        <>
            <div className="container-qr">
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
                                <span className='details-top'>
                                    <img src={currentQuiz.icon} alt={currentQuiz.title}/>
                                    <p className='topic'>{currentQuiz.title}</p>
                                </span>
                                <span className='details-bot'>
                                    <p>10 üzerinden</p>
                                    <span>{score}</span>
                                </span>
                            </div>
                            <div className="play-again">
                                <button><a href="Welcomepage.jsx">Tekrar Oyna</a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}