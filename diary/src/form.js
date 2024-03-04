// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './form.css'; // Import the CSS file
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const ScheduleForm = () => {
//   const navigate = useNavigate();
//   const { userName } = useParams();
//   console.log(userName)
  
//   const [formData, setFormData] = useState({
//     teacher: userName,
//     semester: '',
//     subject: '',
//     section: '',
//     credits: '',
//     tutorial: '',
//     date: '',
//     period: '',
//     remarks: '',
//   });

//   const [subjectsBySemester, setSubjectsBySemester] = useState({
//     '1': ['Programming with Python', 'Computational Mathematics','Computer Organization','Operating Systems','Data Structures','Professional Communication and Ethics','Web Programming','Bridge Course'],
//     '2': ['Programming in Java ', 'Design and Analysis of Algorithms','Database Systems','Computer Networks'],
//     '3': ['Software Engineering and Agile Methodologies', 'Artificial Intelligence and Machine Learning','Information Security','Cloud Computing'],
//     '4': ['Project Work', 'Seminar','Industry Internship','Ability Enhancement Course'],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'semester') {
//       // Update the subjects based on the selected semester
//       setFormData({
//         ...formData,
//         [name]: value,
//         subject: '', // Reset subjects when changing semester
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Send form data to the backend
//       const response = await axios.post('http://localhost:3001/updateform', formData);
  

//       // Optionally, you can reset the form after successful submission
//       navigate(`/oldentries/${userName}`)
//       // setFormData({
//       //   semester: '',
//       //   subject: '',
//       //   section: '',
//       //   credits: '',
//       //   tutorial: '',
//       //   date: '',
//       //   period: '',
//       // });
      
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const { semester, subject, section, credits, tutorial, date, period,remarks } = formData;

//   return (
//     <div className="schedule-form-container">
//       <form className="schedule-form" onSubmit={handleSubmit}>
//         <label htmlFor="semester">Semester:</label>
//         <select
//           id="semester"
//           name="semester"
//           value={semester}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>
//             Select Semester
//           </option>
//           <option value="1">Semester 1</option>
//           <option value="2">Semester 2</option>
//           <option value="3">Semester 3</option>
//           <option value="4">Semester 4</option>
//           {/* Add more semesters as needed */}
//         </select>

//         <label htmlFor="subject">Subject:</label>
//         <select
//           id="subject"
//           name="subject"
//           value={subject}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>
//             Select a semester first
//           </option >
//           {subjectsBySemester[semester] &&
//             subjectsBySemester[semester].map((subject) => (
//               <option key={subject} value={subject}>
//                 {subject}
//               </option>
//             ))}
//         </select>

//         <label htmlFor="section">Section:</label>
//         <select
//           id="section"
//           name="section"
//           value={section}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>
//             Select
//           </option>
//           <option value="A">Section A</option>
//           <option value="B">Section B</option>
//         </select>

//         <label htmlFor="credits">Credits:</label>
//         <select
//           id="credits"
//           name="credits"
//           value={credits}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>
//             Select
//           </option>
//           <option value="3">3 Credits</option>
//           <option value="4">4 Credits</option>
//         </select>

//         <label htmlFor="tutorial">Tutorial:</label>
//         <select
//           id="tutorial"
//           name="tutorial"
//           value={tutorial}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>
//             Select
//           </option>
//           <option value="morning">Morning</option>
//           <option value="afternoon">Afternoon</option>
//         </select>

//         <label htmlFor="date">Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={date}
//           onChange={handleChange}
//           required
//         />

//         <label htmlFor="period">Period:</label>
//         <select
//           id="period"
//           name="period"
//           value={period}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>
//             Select
//           </option>
//           <option value="1">Period 1</option>
//           <option value="2">Period 2</option>
//           <option value="3">Period 3</option>
//           <option value="4">Period 4</option>
//           <option value="5">Period 5</option>
//           <option value="6">Period 6</option>
//           <option value="7">Period 7</option>
//         </select>

//         <label htmlFor="remarks">Remarks:</label>
//         <textarea style={{color:"black", padding:"10px"}}
//           id="remarks"
//           name="remarks"
//           value={remarks}
//           onChange={handleChange}  
//         />
//         <br/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ScheduleForm;




