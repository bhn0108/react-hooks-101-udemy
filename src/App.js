import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const incriment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  const incriment2 = () => {
    setCount(previousCount => previousCount + 2)
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount - 2)
  }

  const reset = () => {
    setCount(0)
  }

  const multiply = () => {
    setCount(count * 2)
  }

  const divice3 = () => {
    setCount(previousCount => {
      return previousCount % 3 === 0 ? previousCount / 3 : previousCount
    }) 
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={incriment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={incriment2}>+2</button>
        <button onClick={decrement2}>-2</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={multiply}>×2</button>
      </div>
      <div>
        <button onClick={divice3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}

export default App
