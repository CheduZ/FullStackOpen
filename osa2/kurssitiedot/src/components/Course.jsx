const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props)=> {
  console.log(props)
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <strong>
      total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </strong>
  )
}

const Course = (props) => {
  console.log(props)
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course