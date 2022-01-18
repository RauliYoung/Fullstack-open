import React, { useState } from 'react';

const App = () => {
  
  const[good, setGood] = useState(0)
  const[netural, setNeutral] = useState(0)
  const[bad, setBad] = useState(0)

  const increaseGood = () => setGood(good +1)
  const increaseNeutral = () => setNeutral(netural +1)
  const increaseBad = () => setBad(bad +1)

  const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
          {props.text}
        </button>
    )
  }

  const Display = (props) => {
    const average = ({handleClick}) => {
        var values = []
      if (handleClick === increaseGood) {
        values.push(1)
      }
      else if (handleClick === increaseNeutral) {
        values.push(0)
      } else {
        values.push(-1)
      }
    }
    return (
      <div>{props.text} {props.value}</div>
    )
  }



  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
        <h1>Statistics</h1>
      <Display text='good' value={good} />
      <Display text='neutral' value={netural} />
      <Display text='bad' value={bad} />
      <Display text='all' value={bad + good + netural} />
      <Display text='average' value={bad} />
      <Display text='positive' value={good} />
      

    </div>

  )
}


export default App;
