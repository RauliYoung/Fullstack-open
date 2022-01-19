import React, { useState } from 'react';

const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return (
      <button onClick={handleClick}>
        {text}
      </button>
  )
}

const Statistics = (props) => { 
  if(props.average.length === 0) {
    return (
      <div>
        <p>no feedback given</p>
      </div>
    )
    
  }
  return (
    <div>{props.text} {props.value}</div>
  )
}



const App = () => {
  
  const [good, setGood] = useState(0)
  const [netural, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])
  const [sum, setSum] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodtClick = () => {
    setAverage(average.concat(+1))
    setGood(good +1)
    setSum(sum +1)
    setAll(all +1)
  }


  const handleNeutralClick = () => {
    setAverage(average.concat(0))
    setNeutral(netural +1)
    setSum(sum +0)
    setAll(all +1)
  }

  const handleBadClick = () => {
    setAverage(average.concat(-1))
    setBad(bad +1)
    setSum(sum -1)
    setAll(all +1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodtClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      <Statistics average={average} text='good' value={good} />
      <Statistics average={average} text='neutral' value={netural} />
      <Statistics average={average} text='bad' value={bad} />
      <Statistics average={average} text='all' value={all} />
      <Statistics average={average} text='average' value={sum/average.length} />
      <Statistics average={average} text='positive' value={good/{all}*100} />
      

    </div>

  )
}


export default App;
