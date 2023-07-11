import React from 'react'
import { NavLink } from 'react-router-dom';
import { MyResponsivePie } from '../components/MyResponsivePie';
import total from '../assets/image/total.png'
const HomePage = () => {
  const data = [
    {
      "id": "Spending",
      "label": "Spending",
      "value": 158,
      "color": "hsl(283, 70%, 50%)"
    },
    {
      "id": "Income",
      "label": "Income",
      "value": 277,
      "color": "hsl(120, 70%, 50%)"
    },
    {
      "id": "Expens",
      "label": "Expens",
      "value": 107,
      "color": "hsl(283, 70%, 50%)"
    },
    {
      "id": "Debts",
      "label": "Debt",
      "value": 127,
      "color": "hsl(215, 70%, 50%)"
    },

  ]
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
      
      <div className="flex rounded-full mx-2 bg-gray-300 p-1 mt-2 justify-between gap-1">
        <div className="expenses w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink
            to="/"
            className="active flex items-center justify-around "
          >
            <i className="fa-solid fa-arrow-up px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>EXPENSES</p>
          </NavLink>
        </div>
        <div className="income w-1/2 bg-white py-2 px-4 rounded-full">
          <NavLink
            to="/income"
            className=" flex items-center  justify-around"
          >
            <i className="fa-solid fa-arrow-down px-2 py-1.5 bg-gray-500 rounded-full text-white"></i>
            <p>INCOME</p>
          </NavLink>
          
        </div>
        
      </div>
          <div className="box flex justify-center items-center">
            <div className="totalResult flex items-center mx-auto text-center bg-cyan-500 w-60" style={{borderRadius:"0 0 10px 10px"}}>
              <img className='w-8' src={total} alt="" />
              <p className='flex justify-between items-center gap-2 font-bold text-lg text-white'>Balance:<span className='text-lg font-bold'>2234500</span><span className='text-xs'>UZS</span></p>
            </div>
          </div>
      <div  className="tab__list rounded my-1" style={{ borderRadius:'25px', height: "400px" }}>
            <MyResponsivePie data={data} />
          </div>
    </div>
  );
}

export default HomePage