import { useState } from 'react'

function App() {
  const [state, setState] = useState(1)
  const [value, setValue] = useState(1)

  const update = () => {
    setState((prev) => prev + 1)
    setValue((prev) => prev + 1)
  }
  console.log('render')

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        {value} -{state}
      </h1>
      <button type='button' onClick={update}>
        change
      </button>
    </div>
  )
}

export default App

