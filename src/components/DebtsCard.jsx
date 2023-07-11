import React from "react";
import { MONTHS } from "../data/data";

const DebtsCard = ({
  id,
  selectDate,
  fullName,
  time,
  cost,
  date,
  deleteDebt,
}) => {
  return (
    <div className="relative flex w-11/12 items-center justify-between bg-white mx-auto my-3 rounded-2xl p-4">
      <div className="">
        <h3 className="font-bold text-xl">{`${
          MONTHS[+selectDate?.split(".")[1]]
        } ${+selectDate?.split(".")[0]}`}</h3>
        <div className="flex gap-3">
          <p className="border-2 rounded-full h-8 w-8 py-0 mt-2 px-3 text-lg font-bold text-orange-500 border-orange-500">
            !
          </p>
          <div>
            <p className="font-medium">{fullName}</p>
            <p className="text-gray-600 font-medium">{time}</p>
            {date ? (
              <p className="text-red-600 font-medium">
                To: {date.split("-").reverse().join(".")}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <h4 className="font-bold">
        {cost} <span className="font-normal">UZS</span>
      </h4>
      <div
        onClick={() => deleteDebt(id)}
        className="absolute top-2 right-3 text-red-600 cursor-pointer"
      >
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default DebtsCard;
