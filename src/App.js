import './App.css';
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/doctors" exact element={<DoctorDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
