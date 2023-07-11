import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "./add.scss";
import ModalDebts from "./ModalDebts";
import ModalTransactions from './ModalTransactions';
import menu from '../assets/image/menu.png'

const Footer = ({setLocalStorage}) => {
  const [showAdd, setShowAdd] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [transactionsModalShow, setTransactionsModalShow] = useState(false);

  const show = () => {
    setShowAdd(!showAdd);
  };
  
  const openModalDebts = () => {
    setModalShow(!modalShow);
    if(showAdd){
      show();
    }
  };

  const openModalTransactions = () => {
    setTransactionsModalShow(!transactionsModalShow);
    if (showAdd) {
      show();
    }
  };

  return (
    <div className="flex justify-between items-center h-full text-gray-700">
      <div className="flex gap-5 items-center transition-all   ">
        <NavLink to="/" className="flex flex-col items-center">
          <i style={{ fontSize: "22px" }} className="fa-solid fa-house"></i>
          <p className="text-sm ">Overview</p>
        </NavLink>
        <NavLink
          className="flex flex-col items-center"
          to="/transactions/expenses"
        >
          <i
            style={{ fontSize: "22px" }}
            className="fa-solid fa-money-bill-transfer"
          ></i>
          <p className="text-sm">Transac...</p>
        </NavLink>
      </div>
      <div className="flex gap-10 items-center ">
        <NavLink
          className="flex flex-col items-center"
          to="/debts/lend"
        >
          <i style={{ fontSize: "22px" }} class="fa-solid fa-file-invoice-dollar"></i>
          <p className="text-sm">Debts</p>
        </NavLink>
        <NavLink
          className="flex flex-col items-center "
          to="/menu"
        >
          <i style={{ fontSize: "22px" }} className=""></i>
          <img className="w-8 filter" src={menu} alt="" />
          <p className="text-sm">Menu</p>
        </NavLink>
      </div>
      <div
        style={{ background: "#f4f8fb" }}
        className=" absolute p-2 -top-1/2 left-1/2 -translate-y-1 rounded-full -translate-x-6 "
      >
        <div className=" relative  text-3xl   text-white cursor-pointer">
          <p
            onClick={() => show()}
            className="showIcons px-4 pt-1 pb-3 bg-blue-700 rounded-full"
          >
            +
          </p>
          <div className={`add text-white  text-xl ${showAdd ? "show" : ""}`}>
            <Link
              onClick={openModalTransactions}
              to="/transactions/expenses"
              className="trExpenses py-2 px-3.5 absolute -top-8 -left-16  bg-red-700 rounded-full"
            >
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </Link>
            <Link
              onClick={openModalTransactions}
              to="/transactions/income"
              style={{ top: "-75px", left: "-25px" }}
              className="trIncome py-2 px-3 absolute  bg-cyan-700 rounded-full"
            >
              <i className="fa-solid fa-circle-dollar-to-slot"></i>
            </Link>
            <Link
              to="/debts/lend"
              onClick={openModalDebts}
              style={{ top: "-75px", right: "-25px" }}
              className="dbLend py-2 px-3 absolute bg-red-600 rounded-full"
            >
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </Link>
            <NavLink
              to="/debts/borrow"
              onClick={openModalDebts}
              style={{ top: "-30px", right: "-60px" }}
              className="dbBorrow py-2 px-3 absolute  bg-green-500 rounded-full"
            >
              <i className="fa-solid fa-hand-holding-dollar fa-flip-horizontal"></i>
            </NavLink>
          </div>
        </div>
      </div>
      {modalShow ? (
        <ModalDebts
          display={modalShow}
          setLocalStorage={setLocalStorage}
          openModalDebts={openModalDebts}
        />
      ) : (
        ""
      )}

      {transactionsModalShow ? (
        <ModalTransactions
          display={transactionsModalShow}
          setLocalStorage={setLocalStorage}
          openModalTransactions={openModalTransactions}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;
