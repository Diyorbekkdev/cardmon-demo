import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/image/lend_default.png";
import DebtsCard from "./DebtsCard";

const DebtsLend = () => {
  const [debtsArr, setDebtsArr] = useState("");

  let arr = JSON.parse(localStorage.getItem("lend")) || [];
  let total = 0;
  const totalResult = () => {
    arr.map((el) => (total += +el.cost));
  };

  const deleteDebt = (id) => {
    let newArr = arr.filter((debt) => debt.id !== id);
    localStorage.setItem("lend", JSON.stringify(newArr));
    setDebtsArr({});
  };

  return (
    <div className="debts">
      <nav className="flex justify-between items-center  px-3">
        <h3 className="font-medium text-xl">Debts</h3>
      </nav>

      <div className="flex rounded-full mx-2   bg-gray-300 p-1 mt-2 justify-between gap-1">
        <div className="lend w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink
            to="/debts/lend"
            className="active flex items-center justify-around "
          >
            <i className="fa-solid fa-arrow-up px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>LEND</p>
          </NavLink>
        </div>
        <div className=" borrow w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink
            to="/debts/borrow"
            className=" flex items-center  justify-around"
          >
            <i className="fa-solid fa-arrow-down px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>BORROW</p>
          </NavLink>
        </div>
      </div>

      {totalResult()}
      {arr.length === 0 ? (
        ""
      ) : (
        <div className="flex justify-center my-4 items-center bg-white w-11/12 mx-auto rounded-2xl py-3" >
          <img
             style={{borderRadius:'50%', boxShadow: 'box-shadow: 0px 5px 30px -16px rgba(34, 60, 80, 0.6)'}}
            className="w-16 h-16 rounded object-cover object-left mr-3"
            src="https://gildedwallpapers.com/wp-content/uploads/2020/01/uzbekista-flag-uhd-4k-wallpapern.jpg"
            alt=""
          />
          <h2 className="text-xl font-bold">TOTAL: {total}</h2>
          <p className="text-sm pl-1">UZS</p>
        </div>
      )}
      <div className="cards h-80 overflow-auto">
        {arr.length === 0 ? (
          <div className="flex pt-6 items-center text-center text-gray-600 flex-col">
            <img className="w-48" src={image} alt="" />
            <p>Hooray! You have no debt.</p>
          </div>
        ) : (
          arr.map((debt, index) => <DebtsCard key={index} deleteDebt={deleteDebt}  {...debt} />)
        )}
      </div>
    </div>
  );
};

export default DebtsLend;
