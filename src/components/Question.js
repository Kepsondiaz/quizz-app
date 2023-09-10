import React from "react"
import { quiz } from "../helpers/Questions"

export function Question()
{
    const questionQuiz = quiz.map( (q) => (
        <p id={q.id}>
            {q.question}
        </p>
    ))
    return(
        <>
            <h1>Question component</h1>
            {questionQuiz}
        </>
    )
}
