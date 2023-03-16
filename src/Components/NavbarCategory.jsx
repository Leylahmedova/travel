import React from 'react'

const NavbarCategory = (props) => {
  return (
    <div className="category-card">
    <div className="category-box">
      <div className="card-img">
        <img
          src={props.categoryImg}
          alt=""
        />
      </div>
      <h4>{props.categoryName}</h4>
    </div>
  </div>
  )
}

export default NavbarCategory