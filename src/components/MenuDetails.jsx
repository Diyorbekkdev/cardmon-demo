import React from 'react'

const MenuDetails = ({
    icon,
    title,
    info
}) => {
   
  return (
    <div className="menu_container flex">
        <img src={icon} alt="icon" />
        <div className="info_wrapper">
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default MenuDetails