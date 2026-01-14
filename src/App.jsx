import Helloworld from "./components/Helloworld"
import Learnliftingstateup from "./components/Learnliftingstateup"
import Learn from "./components/Learn"
import LearnProps from "./components/LearnProps"
import Events from "./components/Events"
import LearnUsestate from "./components/LearnUsestate"
import ConterApp from "./components/ConterApp"
import Useeffect from "./components/Useeffect"
import LearnUsememo from "./components/LearnUsememo"
import ChildA from "./components/ChildA"
import { createContext } from "react"
import LearnuseRef from "./components/LearnuseRef"
import CreationofcustomHooks from "./components/CreationofcustomHooks"
import Learnconditioning from "./components/Learnconditioning"
import Map from "./components/Map"
import Loadingimages from "./components/Loadingimages"
import Forms from "./components/Forms"
const stockcontext=createContext()
function App() {
  const getstock=(data)=>{
    return console.log(data)
  }
  let stock='tesla';
  let price=440;
  return (
    <>
      <h1>Born Today </h1>
      <Helloworld/>
      
      <Learn/>
      <LearnProps stock='tesla'/>
      <Events/> 
      <Learnliftingstateup getstock ={getstock} /> 
      <LearnUsestate/>
      <ConterApp/>
      <Useeffect/>
      <LearnUsememo/>
      <stockcontext.Provider value={{stock,price}}>
           <ChildA />
      </stockcontext.Provider>
     <LearnuseRef/>
     <CreationofcustomHooks/>
     <Learnconditioning/>
     <Map/>
     <Loadingimages/>
     <Forms/>
    </>
  )
}

export default App
export {stockcontext}