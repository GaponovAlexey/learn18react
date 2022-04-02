import { useMemo, useState, } from 'react'
import data from './exemple/data/phone.json'
function App() {
  const [value, setvalue] = useState('')
  const [items, setdata] = useState(data)
  // const [] = useTransition()

  const filteredItems = useMemo(() => {
    return items.filter((it) => it.phone.toLowerCase().includes(value))
  }, [value])

  console.log('render')
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        <input
          type='text'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </h1>
      <div>
        {filteredItems.map((el, i) => (
          <h4 key={i}>{el.phone}</h4>
        ))}
      </div>
    </div>
  )
}

export default App
