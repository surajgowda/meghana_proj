// import './scheduleform.css';
// import { navigate } from Navigator; // Replace with the actual navigation library you're using

// export default function MidForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Replace 'yourVariable' with the actual logic or variable you want to include in the path
//     navigate(`/oldata/`);
//   }

//   return (
//     <>
//       <div className="container">
//         <h2>Class Schedule Form</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="semester">Semester:</label>
//           <select id="semester" name="semester">
//             <option value={1}>1st Semester</option>
//             <option value={2}>2nd Semester</option>
//             <option value={3}>3rd Semester</option>
//             <option value={4}>4th Semester</option>
//             {/* Add more options as needed */}
//           </select>
//           <label htmlFor="subject">Subject:</label>
//           <select id="subject" name="subject">
//             <option value={'subject 1'}>1st Subject</option>
//             <option value={'subject 2'}>2nd Subject</option>
//             <option value={'subject 3'}>3rd Subject</option>
//             <option value={'subject 4'}>4th Subject</option>
//           </select>
//           <label htmlFor="section">Section:</label>
//           <select id="section" name="A">
//             <option>A</option>
//             <option>B</option>
//             {/* Add section options */}
//           </select>
//           <label htmlFor="credits">Credits:</label>
//           <select id="credits" name="credits">
//             {/* Add credit options */}
//           </select>
//           <label htmlFor="tutorial">Tutorial:</label>
//           <input type="text" id="tutorial" name="tutorial" />
//           <label htmlFor="facultyName">Faculty Name:</label>
//           <input type="text" id="facultyName" name="facultyName" />
//           <label htmlFor="facultyInitials">Faculty Initials:</label>
//           <input type="text" id="facultyInitials" name="facultyInitials" />
//           <label>Timings:</label>
//           <div>
//             {/* ... rest of your timings code ... */}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }
