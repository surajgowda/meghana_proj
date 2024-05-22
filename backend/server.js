const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());

const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'meghana',
  database: 'diary',
  authPlugin: 'mysql_native_password',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/get_link_timetable1', (req, res) => {
  db.query('SELECT * FROM teachinfo ', (err, results) => {
    if (err) {
      console.error('Error fetching document paths:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const paths = results.map((result) => result.link);
      res.json({ paths });
    }
  });
});

app.post('/registerteachers', (req, res) => {
  const { name, username, password } = req.body;

  db.query('INSERT INTO teachinfo (name, username, password) VALUES (?, ?, ?)', [name, username, password], (err, results) => {
    if (err) {
      console.error('Error registering teacher:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ success: true, teacherId: results.insertId });
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM teachinfo WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else if (results.length > 0) {
      const userIdValue = results[0].username;

      res.cookie('userId', userIdValue, {
        httpOnly: true,
        secure: true, 
        sameSite: 'strict' 
      });
      const cookieValue = req.cookies.userId;
      console.log('Cookie set successfully. Value:', cookieValue);
      res.json({ success: true, userId: userIdValue });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

app.get('/username', (req,res)=>{
  const userId = req.cookies.userId;
  res.send(userId)
})

app.get('/userinfo', (req, res) => {
  const userId = req.cookies.userId;
  console.log("loging userid", userId);
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  db.query('SELECT * FROM teachinfo WHERE username = ?', userId, (err, result) => {
    if (err) {
      console.error('Error fetching teacher information:', err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

    if (result.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, data: result });
  });
});

app.get('/logout', (req, res) => {
  res.cookie('userId', '', { expires: new Date(0) });
  res.send('Cookies cleared!');
});

//get old entries
app.get('/oldentries/:username', (req, res) => {
  const username = req.params.username;
  console.log(username)

  // Replace this query with your actual query to fetch data based on the username
  const query = `SELECT * FROM teachersentries WHERE teacher = ?`;
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error fetching data from database:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      res.status(200).json({ success: true, data: results });
    }
  });
});


//update form
app.post('/updateform', (req, res) => {

  const {
    teacher,
    semester,
    subject,
    section,
    credits,
    tutorial,
    date,
    period,
    remarks,
  } = req.body;

  // Insert the form data into the database
  db.query(
    'INSERT INTO teachersentries (teacher, semester, subject, section, credits, tutorial, date, period, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [teacher, semester, subject, section, credits, tutorial, date, period, remarks],
    (error, results) => {
      if (error) {
        console.error('Error inserting form data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
      } else {
        res.status(200).json({ success: true, message: `Form data added successfully', subject: ${subject}` });
      }
    }
  );
});




process.on('SIGINT', () => {
  db.end((err) => {
    console.log('Database connection closed');
    process.exit(err ? 1 : 0);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
