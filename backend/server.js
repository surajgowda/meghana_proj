const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());

const port = 3001;

app.use(cookieParser());

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




app.use(bodyParser.json());

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
  
    // Consider using a secure password hashing function before storing the password
  
    db.query('INSERT INTO teachinfo (name, username, password) VALUES (?, ?, ?)', [name, username, password], (err, results) => {
      if (err) {
        console.error('Error registering teacher:', err);
        res.status(500).send('Internal Server Error');
      } else {
        // Assuming you want to send the ID of the newly inserted teacher back to the client
        res.json({ success: true, teacherId: results.insertId });
      }
    });
  });

  app.post('/login', (req, res) => {
    console.log("req")
    const { username, password } = req.body;
      db.query('SELECT * FROM teachinfo WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      } else if (results.length > 0) {
        
        res.cookie('userId', results[0].username, { httpOnly: true });
        
        res.json({ success: true, userId: results[0].username });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });
  });
  
  app.get('/userinfo', (req, res) => {

    const userId = req.cookies.userId;
  
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  
    db.query('SELECT * FROM teachinfo WHERE username = ?', [userId], (err, result) => {
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
    // Clear a specific cookie by setting its value to an empty string and setting an expiry date in the past
    res.cookie('userId', '', { expires: new Date(0) });
    res.send('Cookies cleared!');
  });

  
  
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
