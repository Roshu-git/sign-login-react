import './Components/Registration/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Registration/Login";
import Forgot from "./Components/Registration/Forgetpassword";
import Signup from './Components/Registration/Signup';
// import dashboardpages from './Components/Dasboard/Leftsidebar';
import Leftsidebar from './Components/Dasboard/Leftsidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leftsidebar" element={<Leftsidebar />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
