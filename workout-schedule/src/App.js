import { useState } from "react";

const classes = [
  { id: 1242342, name: "React", hours: 68 },
  { id: 2246345, name: "HTML/CSS", hours: 8 },
  { id: 3344234, name: "Next.js", hours: 20 },
  { id: 4242342, name: "Gitlab", hours: 3 },
];

function Button({ children }) {
  return <button>{children}</button>;
}

export default function App() {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [courses, setCourses] = useState(classes);

  function addCourse({ course }) {
    setCourses([...courses, { id: Date.now(), name: name, hours: hours }]);
    setName("");
    setHours("");
  }

  return (
    <>
      <Form
        onAddCourse={addCourse}
        name={name}
        onChangeName={(e) => setName(e.target.value)}
        hours={hours}
        onChangeHours={(e) => setHours(e.target.value)}
      />
      <Courses courses={courses} />
      <Stats courses={courses} />
    </>
  );
}

function Form({ name, hours, onChangeName, onChangeHours, onAddCourse }) {
  function handleSubmit(e) {
    const newCourse = { id: Date.now(), name, hours };

    e.preventDefault();
    if (!name || !hours) return;

    onAddCourse(newCourse);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course Name
        <input placeholder="course name" value={name} onChange={onChangeName} />
      </label>
      <label>
        Hours
        <input placeholder="hours" value={hours} onChange={onChangeHours} />
      </label>
      <Button>Add Course</Button>
    </form>
  );
}

function Courses({ courses }) {
  return (
    <ul>
      {courses.map((course) => (
        <li>
          <h3>{course.name}</h3>
          <p>{course.hours} hours</p>
        </li>
      ))}
    </ul>
  );
}

// function Course({ course }) {
//   return (
//     <>
//       <h3>{course.name}</h3>
//       <p>{course.hours}</p>
//     </>
//   );
// }

function Stats({ courses }) {
  return (
    <footer>You have completed X courses. {courses.length} remain.</footer>
  );
}
