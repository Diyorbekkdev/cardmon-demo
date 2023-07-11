import React, { useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Layout = () => {
  const [addDebt, setAddDebt] = useState([]);

  const setLocalStorage = (key, info) => {
    let arr = JSON.parse(localStorage.getItem(key)) || [];
    arr.push({ ...info, id: uuidv4() });
    localStorage.setItem(key, JSON.stringify(arr));
    setAddDebt({ arr });
    window.location.reload();
  };

  return (
    <div
      className="container phone bg_border bg-blue-950 p-2 rounded-2xl"
      style={{
        height: "609px",
      }}
    >
      <div
        style={{ background: "#f4f8fb" }}
        className="style relative bg-slate-400 w-full h-full rounded-xl pt-5"
      >
        <div
          className=" flex items-center p-3 justify-center camera bg-black absolute top-0 left-28 w-40 h-4 -translate-x-1"
          style={{ borderRadius: "0px 0px 15px 15px" }}
        >
        <div className=" bg-slate-400 absolute w-16 h-3 top-0 " style={{ borderRadius: "0px 0px 15px 15px" }}>
        </div>
        </div>
        <main className="w-full">
          <Outlet />
        </main>
        <footer
          style={{ boxShadow: "0px -3px 6px -3px gray" }}
          className="absolute bottom-0 right-0 h-16 w-full bg-white px-5 rounded-t-lg rounded-b-xl"
        >
          <Footer setLocalStorage={setLocalStorage} />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
