import Menu from "./component/Menu";
import {createContext, useState} from "react"
import Quiz from "./component/Quiz";
import Score from "./component/Score";
import "./App.css"

export const DataContext = createContext()

function App() {
  const [appstate,setAppstate] = useState("menu")
  const [score,setScore] =useState(0)
  return (
    <DataContext.Provider value={{appstate,setAppstate,score , setScore}}>
      <div className="App">
          <h1>Web Development Quiz</h1>
          {appstate === "menu" && <Menu/>}
          {appstate === "quiz" && <Quiz/>}
          {appstate === "score" && <Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
