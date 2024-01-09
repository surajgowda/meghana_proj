
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Badge from './Badge';
import HoverCards from './HoverCards';
import Timetable from './timetable';
import LoginForm from './login';
import DocumentViewer from './documentViewer';
import Registerform from './teachersignup';
import Dashboard from './components/dashboard';
// import Dashboard1 from './dashboard';


const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Badge} />
      <Route path="/hover-cards" Component={HoverCards} />
      <Route path="/timetable" Component={Timetable} />
      <Route path="/login" Component={LoginForm}/>
      <Route path="/documentViewer" Component={DocumentViewer}/>
      <Route path="/register" Component={Registerform}/>
      <Route path="/dashboard/:id" Component={Dashboard}/>
      {/* <Route path="/dashboard" Component={Dashboard1}/> */}
      
      </Routes>
    </BrowserRouter>
    
    </div>
  );
};

export default App;
