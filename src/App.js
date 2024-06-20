// import './Components/Registration/login.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/Common.css';
import './Assets/Css/login.css';
import './Assets/Css/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Registration/Login";
import Forgot from "./Components/Registration/Forgetpassword";
import Signup from './Components/Registration/Signup';
import Dashboard from './Components/Dasboard/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboard" element={ <Dashboard />} />
      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
