import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ModalDebts = ({ display, openModalDebts,setLocalStorage}) => {
  const location = useLocation();
  const selected = null;
  const dateNow = new Date();
  const todayDate = [
    dateNow.getDate() < 10 ? "0" + dateNow.getDate() : dateNow.getDate(),
    dateNow.getMonth() < 10 ? "0" + dateNow.getMonth() : dateNow.getMonth(),
    dateNow.getFullYear(),
  ];

  const [info, setInfo] = useState({
    fullName: "",
    phone: "+998",
    cost: "",
    date: "",
    selectDate: todayDate.join("."),
    note: "",
  });
  const { fullName, phone, cost, date, selectDate, note } = info;

 
  const AddInfo = (e) => {
    e.preventDefault();
    setLocalStorage(`${location.pathname.split('/')[2]}`,info);
    openModalDebts();
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div
    style={{top:"108px"}}
      className={`${
        display ? "flex" : "hidden"
      } fixed left-3/1  rounded-xl -translate-x-5 z-10 w-96  bg-white py-4 text-gray-600 flex-col gap-y-3 px-5`}
    >
      <nav className="flex justify-between items-center  px-3 text-xl">
        <div className="flex items-center gap-2">
          <i
            onClick={openModalDebts}
            className="fa-solid fa-arrow-left-long cursor-pointer"
          ></i>
          <h3 className="font-medium">Debts</h3>
        </div>
        <div className="text-blue-600">
          <i className="fa-solid fa-camera cursor-pointer text-xl"></i>
        </div>
      </nav>
      <form
        style={{ top: "120px", height: "520px" }}
        onSubmit={AddInfo}
        className={`justify-center flex gap-2 flex-col text-sm`}
      >
        <div className="costValyuta flex justify-between">
          <div className="cost">
            <input
              onChange={handleChange}
              required
              value={cost}
              name="cost"
              type="number"
              className="border-none font-bold outline-none w-60 text-2xl"
              placeholder="250 000"
            />
            <p>Enter the amount</p>
          </div>
          <div className="valyuta">
            <h2 className="text-xl font-bold text-blue-700">UZS</h2>
            <p>Currency</p>
          </div>
        </div>
        <div className="name">
          <div>
            <input
              onChange={handleChange}
              value={fullName}
              name="fullName"
              required
              type="text"
              placeholder="Name"
              className="border-none font-bold outline-none w-60 text-2xl"
            />
            <p>Enter the name</p>
          </div>
          <div></div>
        </div>
        <div className="phoneNumber">
          <input
            onChange={handleChange}
            maxLength={13}
            minLength={13}
            name="phone"
            type="text"
            value={phone}
            className="border-none font-bold outline-none w-60 text-2xl"
          />
          <p>Phone number</p>
        </div>
        <div className="note">
          <input
            onChange={handleChange}
            value={note}
            name="note"
            type="text"
            placeholder="Note"
            className="border-none font-bold outline-none w-60 text-2xl"
          />
          <p>Leave a note</p>
        </div>
        <div className="dueDate">
          <input
            onChange={handleChange}
            value={date}
            name="date"
            type="date"
            placeholder="Payment due date"
            className="border-none font-bold outline-none w-60 text-2xl"
          />
          <p>Select payment due date</p>
        </div>
        <div className="NowDate">
          <input
            onChange={handleChange}
            name="selectDate"
            type="text"
            value={selectDate}
            className="border-none font-bold outline-none w-60 text-2xl"
          />
          <p>Select payment due date</p>
        </div>
        <button
          type="submit"
          className="text-white w-full bg-blue-700 p-2 rounded-3xl font-bold text-base mt-4"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default ModalDebts;
