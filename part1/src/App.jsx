const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = ({courses}) => {
  return (
    <div>
      {courses.map((course, i) => <Part key={i} part={course.name} exercises={course.exercises}/> )}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.map((exercise) => exercise).reduce((a,b) => a+b)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content courses={parts}/>
     <Total exercises={parts.map((part) => part.exercises)}/>
    </div>
  )
}


export default App