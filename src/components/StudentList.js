// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/students')
      .then(response => {
        setStudents(response.data);
        setError(null); // Clear any previous errors
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setError('Error fetching students. Please try again.'); // Set an error message
      });
  };

  const handleDeleteStudent = (studentId) => {
    axios.delete(`/students/${studentId}`)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error('Error deleting student:', error);
        setError('Error deleting student. Please try again.'); // Set an error message
      });
  };

  return (
    <div>
      <h2>Student List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {students.map(student => (
          <li key={student.student_id}>
            {student.student_name} - Class: {student.class_id}
            <button onClick={() => handleDeleteStudent(student.student_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
