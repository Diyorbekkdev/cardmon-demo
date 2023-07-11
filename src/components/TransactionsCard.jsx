import React from 'react'
import { MONTHS } from "../data/data";

const TransactionsCard = ({
  id,
  selectDate,
  time,
  cost,
  deleteTransaction,
  category,
  note,
}) => {
  return (
    <div className="">
      <div className="relative flex w-11/12 items-center justify-between bg-white mx-auto my-3 rounded-2xl px-4 py-2">
        <div className="">
          <h3 className="font-bold text-xl">{`${
            MONTHS[+selectDate?.split(".")[1]]
          } ${+selectDate?.split(".")[0]}`}</h3>
          <div className="flex gap-3">
            <div>
              <h2 className="text-xl font-medium text-gray-600">{category}</h2>
              <p className="text-gray-600 font-medium">{time}</p>
            </div>
          </div>
        </div>
        <div>{note}</div>
        <h4 className="font-bold">
          {cost} <span className="font-normal">UZS</span>
        </h4>
        <div
          onClick={() => deleteTransaction(id)}
          className="absolute top-2 right-3 text-red-600 cursor-pointer"
        >
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default TransactionsCard