import MyContext from "../context/MyContext";
import React from "react"

const Pager = () => {
    let {step, setStep} = React.useContext(MyContext);
    
    return (
        <div className='flex'>
          <button type="button" onClick={() => setStep(step - 1)}>Prev</button>
          <button type="button" onClick={() => setStep(step + 1)}>Next</button>
        </div>
    )
}

export default Pager;