import { useMemo, useState, useTransition } from 'react'
import data from './exemple/data/phone.json'
function App() {
  const [value, setvalue] = useState('')
  const [FilterValue, setFilterValue] = useState('')

  const [items, setdata] = useState(data)
  const [isPending, startTransition] = useTransition()

  const filteredItems = useMemo(() => {
    return items.filter((it) => it.phone.toLowerCase().includes(FilterValue))
  }, [FilterValue])

  const onChangeValue = (e) => {
    setvalue(e.target.value)
    startTransition(() => {
      setFilterValue(e.target.value)
    })
  }

  console.log('render')
  return (
    <div style={{ textAlign: 'center' }}>
      {isPending && <h1>Loading...</h1>}
      <h1>
        <input type='text' value={value} onChange={onChangeValue} />
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
