import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserDataTable.css';
import RamLogo from './images/ramlogo.png'

const UserDataTable = () => {
  const { userName } = useParams();
  console.log(userName);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/oldentries/${userName}`);
        if (response.data.success) {
          setUserData(response.data.data);
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error during fetchData:', error.message);
      }
    };

    fetchData();
  }, [userName]);

  console.log(userData)
  const handlePrint = () => {
    window.print();
  };

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const generateTableRows = () => {
      const startDate = new Date(2023, 9, 30); // October 30, 2023
      const endDate = new Date(2024, 2, 15);   // March 15, 2024
      const newTableData = [];

      for (let i = 1; startDate <= endDate; i++, startDate.setDate(startDate.getDate() + 1)) {
        const row = {
          id: i,
          lessonNo: i,
          proposedDate: startDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
          time: '',
          notTaken: '',
          reasons: '',
          actualDate: '',
          actualTime: '',
          remarks: '',
          initials: '',
        };

        newTableData.push(row);
      }

      setTableData(newTableData);
    };

    // Call the function to generate table rows
    generateTableRows();
  }, []);

  return (
    <div className="user-data-table-container">
      <div className='table_heading'>
        <div className='ramaiha_log'>
          <img src={RamLogo} alt='image' className='imagelogo'/>
        </div>
        <div className='tableHeading2'>
          <h1>TEACHING DIARY</h1>
          <h2>Master of Computer Applications</h2>
        </div>
        <div className='teacherInfoSectionOuter'>
          <div className='teacherInfoSections'>
            <div className='teacherInfoSection1'>
              <p className='dataLable'>Course Code and Name: </p>
              <p className='dataLable'>Name of the Faculty: {userName}</p>
              <p className='dataLable'>Semester: </p>
              <p className='dataLable'>Section: </p>
            </div>
            <div className='teacherInfoSection2'>
              <p className='dataLable'>Batch: </p>
              <p className='dataLable'>Term: </p>
              <p className='dataLable'>Credits: </p>
              <p className='dataLable'>Total no. of sessions required: </p>
            </div>
          </div>
        </div>
      </div>
      <table className='user-data-table'>
      <thead>
        <tr>
          <th colSpan="3">Proposed Coverage</th>
          <th rowSpan="2">If Not Taken, Reasons</th>
          <th colSpan="2">Actual Coverage</th>
          <th rowSpan="2">Remarks</th>
          <th rowSpan="2">Initials of Faculty</th>
        </tr>
        <tr>
          <th>Lesson No</th>
          <th>Date</th>
          <th>Time</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>{row.lessonNo}</td>
            <td>{row.proposedDate}</td>
            <td contentEditable className="editable"></td>
            <td contentEditable className="editable"></td>
            <td contentEditable className="editable"></td>
            <td contentEditable className="editable"></td>
            <td contentEditable className="editable"></td>
            <td contentEditable className="editable"></td>
          </tr>
        ))}
      </tbody>
    </table>
      <button className="print-button" onClick={handlePrint}>
        Print Table
      </button>
    </div>
  );
};

export default UserDataTable;
