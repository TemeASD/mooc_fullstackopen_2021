import React, { useState } from 'react'

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Stats = ({value, text}) => {
  return <p>{text} {value}</p>
}

const Button = (props) => {
  return (<button onClick={props.handleClick}>
    {props.text}
  </button>)
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={"give feedback"} />
      <div>
        <p>buttons here</p>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      </div>
      <Header text={"statistics"} />
      <div>
        <Stats value={good} text={"good:"}/>
        <Stats value={neutral} text={"neutral:"}/>
        <Stats value={bad} text={"bad:"}/>
      </div>

    </div>
  )
}

export default App