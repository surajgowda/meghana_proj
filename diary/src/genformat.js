import React, { useState } from 'react';
import './genformat.css'

const ClassScheduleGenerator = () => {
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [section, setSection] = useState('');
  const [credits, setCredits] = useState('');
  const [tutorial, setTutorial] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [initials, setInitials] = useState('');
  const [generatedTable, setGeneratedTable] = useState([]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];


  // Function to handle the generation of the table
  const generateTable = () => {
    // Logic to generate the table based on the inputs
    // For this example, let's just create a simple 5x5 table with dummy data

    const newTable = days.map(day => ({
      day,
      timings: times.map(time => ({
        time,
        isChecked: Math.random() < 0.5, // For simplicity, random checkbox value
      })),
    }));

    setGeneratedTable(newTable);
  };

  return (

    <div className='full_genbody'>
        <h1>Hello</h1>
      <label className='datalabels'>Semester:</label>
      <select value={semester} onChange={(e) => setSemester(e.target.value)}>
        <option value="Semester 1">Semester 1</option>
        <option value="Semester 2">Semester 2</option>
        {/* Add other semester options */}
      </select>

      {/* ... (similar structure for other input fields) */}

      <table>
        <thead>
          <tr>
            <th>Day</th>
            {times.map((time, index) => (
              <th key={index}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map(day => (
            <tr key={day}>
              <td>{day}</td>
              {times.map((time, index) => (
                <td key={index}>
                  <input
                    type="checkbox"
                    checked={
                      generatedTable.length > 0 &&
                      generatedTable.find(d => d.day === day)?.timings[index].isChecked
                    }
                    disabled
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={generateTable}>Generate Schedule</button>

      {generatedTable.length > 0 && (
        <div>
          <h2>Generated Schedule</h2>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Is Checked</th>
              </tr>
            </thead>
            <tbody>
              {generatedTable.map(day => (
                day.timings.map((timing, index) => (
                  <tr key={`${day.day}-${index}`}>
                    <td>{day.day}</td>
                    <td>{timing.time}</td>
                    <td>{timing.isChecked.toString()}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClassScheduleGenerator;
