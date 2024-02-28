import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all students on component mount
    axios.get('/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error.message);
        setError('Failed to fetch students. Please try again later.');
      });
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.student_id}> {student.student_name} - Class: {student.class_id}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
