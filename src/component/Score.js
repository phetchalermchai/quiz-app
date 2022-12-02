import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score = ()=>{
    const {score,setAppstate,setScore} = useContext(DataContext)

    const restartApp =()=>{
        setScore(0)
        setAppstate("menu")
    }
    return(
        <div className="score">
            <h1>สรุปผลคะแนนสอบ</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score