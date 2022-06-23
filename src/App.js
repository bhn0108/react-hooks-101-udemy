import React, { useEffect, useState } from 'react'

const App = (props) => {
  const [state, setState] = useState(props)
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  const {name, price} = state

  useEffect(() => {
    console.log('useEffect is invoked')
  })

  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])
  
  // const reset = () => {
  //   // setName(props.name)
  //   // setPrice(props.price)
  //   setState(props)
  // }

  return (
    <>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={() => setState({ ...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
