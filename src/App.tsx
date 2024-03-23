import { MyProvider } from './context/MyContextProvider'
import './App.css'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import Pager from './quiz02/Pager'

function App() { 
  return (
      <MyProvider>
        <Stepper/>
        <Content/>
        <Pager/>
      </MyProvider>
  )
}

export default App
