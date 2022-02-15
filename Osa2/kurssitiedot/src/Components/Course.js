import React from "react";

const Header = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  );
};

const Content = ({ course }) => {
  return <Part parts={course.parts} />;
};

const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <b>Total of {total} exercices</b>
    </div>
  );
};

export default Course;
