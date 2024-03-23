import MyContext from "../context/MyContext"
import React from 'react'

const Content = () => {
    
  const {step} = React.useContext(MyContext);

  const products = [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ]

 return (
    <div className='card'>
      <ul>
       {
        (
          step >= 1 && step <= 3 ?
          products.filter((item) => item.step == step) : 
          products
        )
        .map((item) => (
          <li key={item.id}>{item.name}: ${item.price}</li>
        ))  
        }
       </ul>
    </div>
  )
}

export default Content