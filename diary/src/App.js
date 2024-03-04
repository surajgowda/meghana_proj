import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Badge from './Badge';
import HoverCards from './HoverCards';
import Timetable from './timetable';
import XForm from './form';
import LoginForm from './login';
import DocumentViewer from './documentViewer';
import Registerform from './teachersignup';
import Dashboard from './components/dashboard';
import Newform from './form';
import Olddata from './olddata';
import FirstSemtb from './firstsemtb';
import Generate from './genformat';
import MidForm from './midForm.js';
import Check from './components/check';  // Import the Check component here

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Badge />} />
          <Route path="/hover-cards" element={<HoverCards />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/documentViewer" element={<DocumentViewer />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/newform/:userName" element={<Newform />} />
          <Route path="/oldentries/:userName" element={<Olddata />} />
          <Route path="/first-semester" element={<FirstSemtb />} />
          <Route path="/genform" element={<Generate />} />
          <Route path="/schedule-form" element={<MidForm />} />
          <Route path="/check" element={<Check />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
