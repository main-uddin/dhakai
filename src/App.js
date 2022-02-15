import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import { useState } from "react/cjs/react.development";

function App() {
  const [isAuth, setAuth] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
