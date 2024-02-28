import React, { useState } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

const App = () => {
  const [isStudentAdded, setStudentAdded] = useState(false);

  const handleStudentAdded = () => {
    setStudentAdded(!isStudentAdded);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentList key={isStudentAdded} />
      <AddStudent onStudentAdded={handleStudentAdded} />
    </div>
  );
};

export default App;
