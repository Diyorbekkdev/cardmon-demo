import React from "react";
import icon1 from "../assets/image/card.png";
import icon2 from "../assets/image/exchange.png";
import icon3 from "../assets/image/membercard.png";
import icon4 from "../assets/image/categories.png";
import icon5 from "../assets/image/lock.png";
import icon6 from "../assets/image/language.png";
import icon7 from "../assets/image/contact.png";
import icon8 from "../assets/image/star.png";
import user from '../assets/image/user.png';

const Menu = () => {
  let main = [
    {
      icon: icon1,
      title: "My Cards",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon2,
      title: "Exchanges rates",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon3,
      title: "Memebership cards",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon4,
      title: "My categories",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon5,
      title: "Security",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon6,
      title: "Language",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon7,
      title: "Contact Us",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
    {
      icon: icon8,
      title: "Rate the app",
      info: "Here you can find a list of your bank cards and, if necessary, change their status.",
    },
  ];
  return (
    <div className="cotainer overflow-hidden">
      <div className="menu_wrapper " style={{height:'500px'}}>
        <div className="container flex items-center justify-between px-5">
          <h1 className="text-lg font-bold">Menu</h1>
          <img src={user} alt="user" />
        </div>
        {main.map((res, index) => {
          return (
            <div key={index} className=" cursor-pointer menu_container my-4 bg-white rounded flex items-start gap-3 p-2" style={{boxShadow: 'box-shadow: -3px 1px 8px 0px rgba(34, 60, 80, 0.2)', borderRadius: '12px'}}>
              <img src={res.icon} alt="" />
              <div className="info_wrapper">
                <h1 className="text-lg font-bold">{res.title}</h1>
                <p>{res.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
