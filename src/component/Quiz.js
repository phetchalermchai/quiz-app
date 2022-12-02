import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Quiz = ()=>{
    const [current,setCurrent] = useState(0)
    const [selectChoise,setSelectchoise] = useState("")
    const {score,setScore,setAppstate} = useContext(DataContext)

    useEffect(()=>{
        CheckAnswer()
        // eslint-disable-next-line
    },[selectChoise])

    const CheckAnswer =()=>{
        if(selectChoise!== ""){
            if(selectChoise === QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }
    

    const nextQuestion =()=>{
        setSelectchoise("")
        if(current === QuestionsData.length-1){
            setAppstate("score")
        }else{
            setCurrent(current+1)
        } 
    }

    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectchoise("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectchoise("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectchoise("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectchoise("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{current+1+" / "+QuestionsData.length}</p>
        </div>
    )
}

export default Quiz