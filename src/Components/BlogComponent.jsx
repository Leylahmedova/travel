import React from 'react'
import { AiFillStar } from "react-icons/ai";
const BlogComponent = (props) => {
  return (
    <div className="blog">
    <div className="blog-img">
        <img src={props.blogImg} alt="" />
        <div className="blog-rating">
        <ul>
            <li><AiFillStar/></li>
            <li><AiFillStar/></li>
            <li><AiFillStar/></li>
            <li><AiFillStar/></li>
            <li><AiFillStar/></li>
            <span>4.0</span>
        </ul>
    </div>
    </div>
 
    <div className="blog-details">
        <h2>{props.countryName}</h2>
        <p>{props.countryAbout}</p>
    </div>
</div>
  )
}

export default BlogComponent