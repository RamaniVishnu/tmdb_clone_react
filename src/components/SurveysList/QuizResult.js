function QuizResult(result) {
    //const {correctAnswer,wrongAnswer} = result;
    console.log('total correct',result);
    return (
        <>
            <p>this is result page</p> 
            <p>correct answer:{result.result.correctAnswer} </p>
            <p>wrong Answer : {result.result.wrongAnswer}</p>
        </>
    )
}

export default QuizResult;