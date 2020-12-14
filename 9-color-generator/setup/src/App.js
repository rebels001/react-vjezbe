import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState("")
  const [list, setList] = useState(new Values("#f15025").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input className={`${error ? "error" : null}`} value={color} placeholder="#f15025" type="text" name="color" onChange={(e) => setColor(e.target.value)} />
          <button type="submit" className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    </>
  )
}

export default App
