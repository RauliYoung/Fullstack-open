import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({ parts, excercises}) => {
  return (
    <div>
        <Part part={parts[0]} excercises={excercises[0]}/>
        <Part part={parts[1]} excercises={excercises[1]}/>
        <Part part={parts[2]} excercises={excercises[2]}/>

    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.excercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.excercises}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half stack application development';
  const part1 = 'Fundamentals of React';
  const excercises1 = 10;
  const part2 = 'Using props to passa data';
  const excercises2 = 7;
  const part3 = 'State of a component';
  const excercises3 = 14;


  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2,part3]} excercises={[excercises1, excercises2, excercises3]}/>
      <Total excercises={excercises1 + excercises2 + excercises3} />
    </div>
  )
 }

export default App;
