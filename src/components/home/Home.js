import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import axios from "axios";
import Card from "../card/Card";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import CategorySlider from "../categorySlider/CategorySlider";
import useOnScreen from "../../hooks";

import loading from "../../images/loading.jpg";

const Home = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [stopApi, setStopApi] = useState(false);

  const visibleRef = useRef(null);
  const isVisible = useOnScreen(visibleRef);

  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/");
    axios({
      method: "GET",
      url: "https://devapi.dhakai.com/api/v2/manufacturers?limit=8&skip=0",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setManufacturers(res?.data?.result?.manufacturers);
    });
  }, [token]);

  useEffect(() => {
    if (isVisible) {
      setSkip(skip + 1);
    }
  }, [isVisible]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://devapi.dhakai.com/api/v2/manufacturers?limit=8&skip=${skip}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res?.data?.result?.manufacturers?.length) {
        setManufacturers([
          ...manufacturers,
          ...res?.data?.result?.manufacturers,
        ]);
      } else {
        setStopApi(true);
      }
    });
  }, [skip]);

  return (
    <>
      <SideBar />
      <Header />
      <CategorySlider />

      <div className="grid-system">
        {manufacturers?.map((e, i) => (
          <>
            <Card data={e} />
          </>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!stopApi && (
          <div ref={visibleRef} style={{ margin: "30px auto" }}>
            <img src={loading} alt="" style={{ width: "50px" }} />
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
