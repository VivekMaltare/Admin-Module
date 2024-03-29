import './App.css';
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Moderator from './Pages/Moderator/Moderator';
import Responder from './Pages/Responder/Responder';
import Requests from './Pages/Requests/Requests';
import Profile from './Pages/Profile/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/doctors" exact element={<DoctorDetails />} />
        <Route path="/responders" exact element={<Responder />} />
        <Route path="/moderators" exact element={<Moderator />} />
        <Route path="/requests" exact element={<Requests />} />
        <Route path="/logout" exact element={<DoctorDetails />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
