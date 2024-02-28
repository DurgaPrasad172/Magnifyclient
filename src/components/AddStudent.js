import React, { useState } from 'react';
import axios from '../services/api';

const AddStudent = ({ onStudentAdded }) => {
  const [studentName, setStudentName] = useState('');
  const [classId, setClassId] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleAddStudent = () => {
    const newStudent = {
      student_name: studentName,
      class_id: classId,
      student_id:studentId
    };

    axios.post('/students', newStudent)
      .then(response => {
        console.log(response.data);
        console.log("DP");
        onStudentAdded(); // Trigger parent component to update student list
      })
      .catch(error => {
        console.error('Error adding student:', error.message); // Log the specific error message
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <label>
        Student Id:
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
      </label>
      <br/>
      <label>
        Student Name:
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      </label>
      <br />
      <label>
        Class ID:
        <input type="text" value={classId} onChange={(e) => setClassId(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAddStudent}>Add Student</button>
      
    </div>
  );
};

export default AddStudent;
