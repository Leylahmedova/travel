import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";
const Posts = (props) => {
  return (
    <div className="post">
      <div className="post-img">
        <span>Xüsusi təklif</span>
        <img src={props.postImg} alt="" />
        <div className="buttonInPost">
          <button>İndi sifariş et  <FaPaperPlane /> </button>
        </div>
      </div>

      <div className="post-details">
        <h4>{props.cityName}</h4>
        <p>Səyahət etməkdən zövq alın</p>
        <ul>
          <li>
            <MdOutlineDateRange className="icon" />
            <span>{props.postDate}</span>
          </li>
          <li>
            <MdAccessTime className="icon" />
            <span>{props.postDays}</span>
          </li>
          <li>
            <AiFillStar className="icon" />
            <span>{props.postRating}</span>
          </li>
        </ul>
        <div className="tour-price">
          <h2>{props.postDiscount}</h2>
          <h4>{props.postPrice}</h4>
        </div>
      </div>
    </div>
  );
};

export default Posts;
