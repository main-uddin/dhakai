import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
