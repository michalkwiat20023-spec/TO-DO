import { useState } from "react";
import Result from "./result";

function Quiz(){
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin","London","Paris","Rome"],
            answer: "Paris",
        },
        {
            question: "Who is the tuffest?",
            options: ["Nihao","Jej","Michau","Moneymouth"],
            answer: "Moneymouth",
        },
        {
            question: "Best club in Poland?",
            options: ["Lech Poznań","Legia Warszawa","Lechia Kraków","Górnik Zabrze"],
            answer: "Lech Poznań",
        },
    ];

    const initialAnswears = [null,null,null];

    const [userAnswears, setUserAnswears] = useState(initialAnswears);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [quizFinished, setQuizFinished] = useState(false);

    const selectedAnswear = userAnswears[currentQuestion];

    function handleSelectOption(option){
        const newUserAnswears = [...userAnswears];

        newUserAnswears[currentQuestion] = option;

        setUserAnswears(newUserAnswears);
    }

    function changeQuestion(offset) {
        if(currentQuestion + offset > -1 && currentQuestion + offset < questionBank.length){
            setCurrentQuestion(currentQuestion + offset);
        }else if(questionBank.length - 1 === currentQuestion){
            setQuizFinished(true);
        };
    }

    function restartQuiz(){
        setUserAnswears(initialAnswears);
        setCurrentQuestion(0);
        setQuizFinished(false);
    }
    
    if(quizFinished){
        return <Result userAnswears={userAnswears} questionBank={questionBank} restartQuiz={restartQuiz}/>
    }else{
    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questionBank[currentQuestion].question}</p>

            {questionBank[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswear ===  option  ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
            ))}

            <p>Option Selected: {userAnswears[currentQuestion]}</p>

            <div className="nav-buttons">
                <button onClick={() => changeQuestion(-1)} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={() => changeQuestion(1)} disabled={!selectedAnswear}>{questionBank.length - 1 === currentQuestion ? "Finish Quiz" : "Next"}</button>
            </div>
        </div>
    );
};
};

export default Quiz;