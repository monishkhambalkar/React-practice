import Home from "./home";
import AddUser from "./addUser";
import UpdateUser from "./updateUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/updateUser" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
