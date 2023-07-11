import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/image/expenses.png";

const HomePage = () => {
  let arr = JSON.parse(localStorage.getItem("income")) || [];

  return (
    <div className="transactions">
      <nav className="flex justify-between items-center px-3">
        <h3 className="font-medium text-xl">Overview</h3>
        <div className="flex items-center gap-3 text-xl text-blue-700">
          <div className="card">
            <i className="fa-solid fa-credit-card cursor-pointer"></i>
          </div>
          <div className="calendar">
            <i className="fa-solid fa-calendar-days cursor-pointer"></i>
          </div>
        </div>
      </nav>

      <div className="flex rounded-full   bg-gray-300 p-1 mx-2 mt-2 justify-between gap-1">
        <div className="expenses w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink to="/" className="flex items-center justify-around ">
            <i className="fa-solid fa-arrow-up px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>EXPENSES</p>
          </NavLink>
        </div>
        <div className="income w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink to="/income" className=" flex items-center  justify-around">
            <i className="fa-solid fa-arrow-down px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>INCOME</p>
          </NavLink>
        </div>
      </div>

      <div>
        {arr.length === 0 ? (
          <div className="flex pt-6 items-center text-center text-gray-600 flex-col">
            <img className="w-48" src={image} alt="" />
            <p>No Any data for the selected period</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HomePage;
