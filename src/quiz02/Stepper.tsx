import React from 'react'
import MyContext from '../context/MyContext'

const Stepper = () => {

  let context = React.useContext(MyContext);

  return (
    <div className='stepper flex'>
      <h2 className={context.step == 1 ? 'active' : ''}>1</h2>
      <h2 className={context.step == 2 ? 'active' : ''}>2</h2>
      <h2 className={context.step == 3 ? 'active' : ''}>3</h2>
    </div>
  )
}

export default Stepper