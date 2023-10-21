import { useState } from "react";
import { questionsList } from "./questionList";
import QuizResult from "./QuizResult";
import './Quiz.scss'
function Quiz(){
    const [activeQues,setActiveQues] = useState(0);
    const [showResult,setShowResult] = useState(false);
    const [showNextQues,setShowNextQues] = useState(false);
    const [Answer,setAnswer] = useState(false);
    const [showhighlight,setShowhightlight] = useState(null); 

    const [endResult,setendResult] = useState({
        correctAnswer: 0,
        wrongAnswer: 0
    });

    const handleNextQuestion =()=>{
        setShowhightlight(null);
        if(activeQues !== Object.keys(questionsList).length - 1) {
        setActiveQues((val)=> val + 1);
        setShowNextQues(false)
        setendResult((value)=> Answer ? {
            ...value,
            correctAnswer: value.correctAnswer + 1,
        }: {
            ...value,
            wrongAnswer: value.wrongAnswer + 1,
        })
        } else {
            setActiveQues(0);
            console.log('i am mmmmmmm');
            setShowResult(true)
        }
    }

    const handleSelectedAnswer=(elem,index)=>{
        setShowhightlight(index);
        if(elem === questionsList[activeQues].correctAnswer) {
            setAnswer(true);
            setShowNextQues(true)
        } else {
            console.log('false');
            setAnswer(false);
            setShowNextQues(true);
        }

    }
    return (
        <>
        {!showResult ? <><p>Quiz</p>
        <p>{questionsList[activeQues].question}</p>
        <ul>{questionsList[activeQues].choices.map((elem, index)=><li key={elem}
        onClick={()=>handleSelectedAnswer(elem,index)}
        className={showhighlight === index ? 'highlight': '' }
        >{elem}</li>)}</ul>
        <button disabled={!showNextQues ? true : false } onClick={()=>handleNextQuestion()}>Next Question</button> </> 
        : <> <QuizResult  result = {endResult} /> </>}
        </>
    )
}

export default Quiz;