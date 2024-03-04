import React, { useState } from 'react';
import generateDocxFile from './generateDocxFile';


export default function Check(){

  const [selectedSemester, setSelectedSemester] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleSemesterChange = (event) => {
    const semesterValue = event.target.value;
    setSelectedSemester(semesterValue);

    // Example: Static subjects based on semester
    if (semesterValue === '1') {
      setSubjects(['DAA', 'C', 'D']);
    } else if (semesterValue === '2') {
      setSubjects(['Math', 'Physics', 'Chemistry']);
    } else {
      setSubjects([]);
    }
  };


  const [showTutDiv, setShowTutDiv] = useState(false);

  const [formData, setFormData] = useState({});


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setShowTutDiv(selectedValue === 'yes');
  };

  const handleSubjectChange = (event) => {
    const subjectValue = event.target.value;
    setSelectedSubject(subjectValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();



    setFormData({
      semester: selectedSemester,
      subject: selectedSubject,
      section: document.form1.section.value,
      credits: document.form1.credits.value,
      tutorialRequired: document.form1.tutreq.value,
      facultyName: document.form1.nm.value,
      initials: document.form1.in.value,
    });
  
    // If tutorial is required, collect data from tutorial section
    if (formData.tutorialRequired === 'yes') {
      formData.tutorialCredits = document.form1.tcredits.value;
  
      const tutTimeCheckboxes = document.querySelectorAll('input[name="tuttime[]"]:checked');
      const tutTimeValues = Array.from(tutTimeCheckboxes).map((checkbox) => checkbox.defaultValue);
  
      formData.tutorialTimetable = tutTimeValues;
    }
  
    const timetableCheckboxes = document.querySelectorAll('input[name="timetable[]"]:checked');
    const timetableValues = Array.from(timetableCheckboxes).map((checkbox) => checkbox.defaultValue);
  
    formData.timetable = timetableValues;
    
    generateDocxFile(formData);
  };
  



return(
<>
  <link rel="stylesheet" href="images/BluePigment.css" type="text/css" />
  <title>MSRIT Teaching Diary</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      text-align: center;\n    }\n\n    #content-wrap {\n      display: inline-block;\n      text-align: left;\n    }\n\n    body {\n  text-align: center;\n  background-image: url('t2.jpg'); /* Adjust the path as needed */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#content-wrap {\n  display: inline-block;\n  text-align: left;\n}\n\n  "
    }}
  />
  {/* header starts here */}
  <div id="header">
    <div id="header-content">
      <img
        src="C:\Users\megha\Downloads\logo.png"
        alt="msrit"
        width={200}
        height={100}
      />
      <h2>
        <div className="msrit">M S RAMAIAH INSTITUTE OF TECHNOLOGY</div>
        <br />
      </h2>
    </div>
  </div>
  <br />
  <marquee behavior="alternate" scrollamount={4}>
    <div className="dept">Department of Masters of Computer Application</div>
  </marquee>
  {/* content-wrap starts here */}
  <div className="mybox">
    <div align="right">
      {" "}
      <a className="clear" href="facultyevents.html">
        HOME |
      </a>
      <a className="clear" href="login1.html">
        LOGOUT
      </a>
    </div>
    <form name="form1" method="get" action="" id="form1" onSubmit={handleSubmit}>
      <h3 align="center">
        <div
          style={{
            fontFamily: "Cooperlate Gothic Light",
            letterSpacing: 8,
            color: "#090a0a"
          }}
        >
          GENERATE TEACHING DIARY
        </div>
      </h3>
      &nbsp; Semester{' '}
      <select
        className="f"
        name="semester"
        required
        onChange={handleSemesterChange}
        value={selectedSemester}
      >
        <option value="0"> </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      &nbsp; Subjects{' '}
      <select
        name="subject"
        id="subject"
        required
        onChange={handleSubjectChange}
        value={selectedSubject}
      >
        <option value="0"> </option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>
            {subject}
          </option>
        ))}
      </select>
      &nbsp; Section{" "}
      <select name="section" required="required">
        <option value={0}> </option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
      </select>
      &nbsp; Credits{" "}
      <select name="credits" id="credits" required="required">
        <option />
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      &nbsp; Tutorial{" "}
      <select
        name="tutreq"
        id="tutreq"
        required="required"
        onChange={handleSelectChange}
      >
        <option />
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      &nbsp;
      <br />
      <br />
      Name Of the Faculty{" "}
      <input type="textbox" name="nm" required="required" size={8} />
      &nbsp;&nbsp;&nbsp;&nbsp;Initials{" "}
      <input type="textbox" name="in" required="required" size={5} />
      <br />
      <br />
      <table cellSpacing={10} cellPadding={8}>
        <tbody>
          <tr align="center">
            <td> </td>
            <td>9:00-9:55</td>
            <td>9:55-10:50</td>
            <td>11:05-12:00</td>
            <td>12:55-1:45</td>
            <td>1:45-2:40</td>
            <td>2:40-3:35</td>
            <td>3:35-4:30</td>
          </tr>
          <tr align="center">
            <td>Monday</td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box1"
                defaultValue={1}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box2"
                defaultValue={2}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box3"
                defaultValue={3}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box4"
                defaultValue={4}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box5"
                defaultValue={5}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box6"
                defaultValue={6}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box7"
                defaultValue={7}
              />
            </td>
          </tr>
          <tr align="center">
            <td>Tuesday</td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box8"
                defaultValue={8}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box9"
                defaultValue={9}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box10"
                defaultValue={10}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box11"
                defaultValue={11}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box12"
                defaultValue={12}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box13"
                defaultValue={13}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box14"
                defaultValue={14}
              />
            </td>
          </tr>
          <tr align="center">
            <td>Wednesday</td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box15"
                defaultValue={15}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box16"
                defaultValue={16}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box17"
                defaultValue={17}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box18"
                defaultValue={18}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box19"
                defaultValue={19}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box20"
                defaultValue={20}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box21"
                defaultValue={21}
              />
            </td>
          </tr>
          <tr align="center">
            <td>Thursday</td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box22"
                defaultValue={22}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box23"
                defaultValue={23}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box24"
                defaultValue={24}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box25"
                defaultValue={25}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box26"
                defaultValue={26}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box27"
                defaultValue={27}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box28"
                defaultValue={28}
              />
            </td>
          </tr>
          <tr align="center">
            <td>Friday</td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box29"
                defaultValue={29}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box30"
                defaultValue={30}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box31"
                defaultValue={31}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box32"
                defaultValue={32}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box33"
                defaultValue={33}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box34"
                defaultValue={34}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box35"
                defaultValue={35}
              />
            </td>
          </tr>
          <tr align="center">
            <td>Saturday</td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box36"
                defaultValue={36}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box37"
                defaultValue={37}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box38"
                defaultValue={38}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box39"
                defaultValue={39}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box40"
                defaultValue={40}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box41"
                defaultValue={41}
              />
            </td>
            <td>
              <input
                className="regular-checkbox"
                name="timetable[]"
                type="checkbox"
                id="box42"
                defaultValue={42}
              />
            </td>
          </tr>
        </tbody>
      </table>
      

&nbsp;
{showTutDiv && (
    <div className="tutDiv">
      <div id="t" className="hiddenTD" style={{ textAlign: "center" }}>
        <h1>Tutorial</h1>
      </div>
      <center className="hiddenTD" id="tcrd">
        {" "}
        Credits for tutorial{" "}
        <select name="tcredits" id="tcredits">
          <option />
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <center>
          <table
            className="hiddenTD"
            cellSpacing={10}
            cellPadding={8}
            id="tuttable"
          >
            <tbody>
              <tr align="center">
                <td> </td>
                <td>9:00-9:55</td>
                <td>9:55-10:50</td>
                <td>11:05-12:00</td>
                <td>12:55-1:45</td>
                <td>1:45-2:40</td>
                <td>2:40-3:35</td>
                <td>3:35-4:30</td>
              </tr>
              <tr align="center">
                <td>Monday</td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox1"
                    defaultValue={11}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox2"
                    defaultValue={12}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox3"
                    defaultValue={13}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox4"
                    defaultValue={14}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox5"
                    defaultValue={15}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox6"
                    defaultValue={16}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox7"
                    defaultValue={17}
                  />
                </td>
              </tr>
              <tr align="center">
                <td>Tuesday</td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox8"
                    defaultValue={21}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox9"
                    defaultValue={22}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox10"
                    defaultValue={23}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox11"
                    defaultValue={24}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox12"
                    defaultValue={25}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox13"
                    defaultValue={26}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox14"
                    defaultValue={27}
                  />
                </td>
              </tr>
              <tr align="center">
                <td>Wednesday</td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox15"
                    defaultValue={31}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox16"
                    defaultValue={32}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox17"
                    defaultValue={33}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox18"
                    defaultValue={34}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox19"
                    defaultValue={35}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox20"
                    defaultValue={36}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox21"
                    defaultValue={37}
                  />
                </td>
              </tr>
              <tr align="center">
                <td>Thursday</td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox22"
                    defaultValue={41}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox23"
                    defaultValue={42}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox24"
                    defaultValue={43}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox25"
                    defaultValue={44}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox26"
                    defaultValue={45}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox27"
                    defaultValue={46}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox28"
                    defaultValue={47}
                  />
                </td>
              </tr>
              <tr align="center">
                <td>Friday</td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox29"
                    defaultValue={51}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox30"
                    defaultValue={52}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox31"
                    defaultValue={53}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox32"
                    defaultValue={54}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox33"
                    defaultValue={55}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox34"
                    defaultValue={56}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox35"
                    defaultValue={57}
                  />
                </td>
              </tr>
              <tr align="center">
                <td>Saturday</td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox36"
                    defaultValue={61}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox37"
                    defaultValue={62}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox38"
                    defaultValue={63}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox39"
                    defaultValue={64}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox40"
                    defaultValue={65}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox41"
                    defaultValue={66}
                  />
                </td>
                <td>
                  <input
                    className="regular-checkbox"
                    name="tuttime[]"
                    type="checkbox"
                    id="tbox42"
                    defaultValue={67}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </center>
    </div>
    )}

      <center>
      <div style={{ textAlign: "center", padding: "30px" }} id="b1" className="visibleTD">
        <input
          className="button"
          type="submit"
          name="b1"
          id="b1"
          value=" Generate"
          onClick={handleSubmit}
        />
      </div>
      </center>
    </form>
  </div>
</>
)}