import React, { useEffect, useState } from 'react';
import './AC.css';

const AcademicCalendar = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
   
    const savedDates = [];
    for (let i = 0; i < 7; i++) {
      const savedDate = localStorage.getItem(`date${i}`);
      savedDates.push(savedDate || '');
    }
    setDates(savedDates);
  }, []);

  const handleDateChange = (index, value) => {
    
    const newDates = [...dates];
    newDates[index] = value;
    setDates(newDates);
    localStorage.setItem(`date${index}`, value);
  };

  return (
    <div>
      <h2>Academic Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 7 }, (_, index) => (
            <tr key={index}>
              <td>{events[index]}</td>
              <td>
                <EditableDateCell
                  value={dates[index]}
                  onChange={(value) => handleDateChange(index, value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EditableDateCell = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.innerText);
  };

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={handleInputChange}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

const events = [
  'Registration and Commencement of Classes',
  'IA Test 1',
  'IA Test 2',
  'Last Working Day of the Semester',
  'Commencement of the Theory Examination',
  'Commencement of the Practical Examination',
  'Announcement of Results',
];

export default AcademicCalendar;
