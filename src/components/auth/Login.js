import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    axios.get("https://devapi.dhakai.com/api/v2/deviceuid").then((res) => {
      const uuid = res.data?.result?.deviceUuid;
      axios({
        method: "post",
        url: "https://devapi.dhakai.com/api/v2/login-buyer",
        data: {
          auth: {
            email: email,
            deviceUuid: uuid,
          },
          password: password,
        },
      }).then((res) => {
        window.localStorage.setItem("token", res?.data?.result?.token);
        navigate("/home");
      });
    });
  };

  return (
    <div className="login">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>login</h1>
          <input ref={emailRef} type="text" placeholder="Enter your Email" />
          <input
            ref={passRef}
            type="password"
            placeholder="Enter your Password"
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
