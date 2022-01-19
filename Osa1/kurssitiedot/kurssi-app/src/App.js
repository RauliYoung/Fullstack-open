import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.part[0].name} excercises={props.part[0].excercises1}/>
      <Part part={props.part[1].name} excercises={props.part[1].excercises2}/>
      <Part part={props.part[2].name} excercises={props.part[2].excercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.part[0].excercises1 + props.part[1].excercises2 + props.part[2].excercises3}</p>
    </div>
  )
}

const Part = (props) => {
  //console.log(props);
  return (
    <div>
      <p>{props.part} {props.excercises}</p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half stack application development',

    parts: [
    {
      name: 'Fundamentals of React',
      excercises1: 10,
    },
    {
      name: 'Using props to passa data',
      excercises2: 7,
    },
    {
      name:'State of a component',
      excercises3: 14,
    }


  ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts}/>
      <Total part={course.parts}/>
      

    </div>
  )
 }

export default App;
