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
    <table>
    <tbody>
      <StatisticLine text='good' value={props.value.good} />
      <StatisticLine text='neutral' value={props.value.netural} />
      <StatisticLine text='bad' value={props.value.bad} />
      <StatisticLine text='average' value={props.value.sum/props.average.length} />
      <StatisticLine text='positive' value={props.value.good/props.value.all*100 + ' %'} />
    </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
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
      <Statistics average={average} value={{good, netural, bad, sum, all,}} />
    </div>

  )
}


export default App;
