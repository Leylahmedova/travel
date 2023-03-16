import React, { useRef, useState, useEffect } from "react";
import { BiCategory, BiSearchAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { MdArrowDropDown} from "react-icons/md";
import NavbarCategory from "../Components/NavbarCategory";
import { Link,NavLink } from "react-router-dom";
// import Modal from "../Components/Modal";
//useref hooku geriye current qaytarir
//const[]=useState([])//default deyer sxlayir

const Navbar = () => {
  const [modalShown, setModalShown] = useState(false);
  
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor(" #00095e") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const overlayMenuRef = useRef();
  function openOverlayMenu(e) {
    const kliklenenYer = e.target;
    if (kliklenenYer.classList.contains("open-icon")) {
      overlayMenuRef.current.classList.add("menu-active");
    }
  }
  function closeOverlayMenu(e) {
    const kliklenenYer = e.target;
    if (kliklenenYer.classList.contains("close-icon")) {
      overlayMenuRef.current.classList.remove("menu-active");
    }
  }

  const overlayCategoryRef = useRef();
  function openOverlayCategory(e) {
    const kliklenenYer = e.target;
    if (kliklenenYer.classList.contains("open-category")) {
      overlayCategoryRef.current.classList.add("category-active");
    }
  }
  function closeOverlayCategory(e) {
    const kliklenenYer = e.target;
    if (kliklenenYer.classList.contains("close-category")) {
      overlayCategoryRef.current.classList.remove("category-active");
    }
  }

  return (
    <>
      <div className="overlayMenu" ref={overlayMenuRef}>
        <div className="logo">
          <a href="#">
            <img
              src="https://creativelayers.net/themes/gotrip-html/img/general/logo-dark.svg"
              alt="Logo"
            />
          </a>
          <VscChromeClose className="close-icon" onClick={closeOverlayMenu} />
        </div>

        <nav className="navLinks">
          <ul>
          <li>
            
              <a to="/">Ana səhifə</a>
            </li>
            <li>
              <NavLink to="about-us">Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink to="tours">Turlar</NavLink>
            </li>
            <li>
              <NavLink to="blog">Bloqlar</NavLink>
            </li>
            <li>
            <NavLink to="">Səhifələr
            <ul className="overlayMenuDropdown">
                <li><NavLink to="*">404</NavLink></li>
                <li><NavLink  to="faq">FAQ</NavLink></li>
                <li><NavLink  to="galery">Qalereya</NavLink></li>
                <li><NavLink  to="comingSoon">Coming Soon</NavLink></li>
              </ul>
            </NavLink>
            </li>
            <li>
              <NavLink  to="contact">Bizimlə əlaqə</NavLink>
            </li>
            
          </ul>
          <ul>
            <li>
              <BsTelephoneFill /> <a href="#">+1 763-227-5032</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="#">info@example.com</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="overlayCategory" ref={overlayCategoryRef}>
        <div className="category-content">
          <h4>Kateqoriya</h4>
          <VscChromeClose
            onClick={closeOverlayCategory}
            className="close-category"
          />
        </div>
        <div className="category">
        <Link to="tours">
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate1.svg" categoryName="Macəra"/>
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate2.svg" categoryName=" Qrup turu"/>
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate3.svg" categoryName="Cütlük turu"/>
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate4.svg" categoryName="Şəxsi tur"/>
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate5.svg" categoryName="Balayı"/>
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate6.svg" categoryName="Çimərlik"/>
          <NavbarCategory categoryImg="http://tourxpro-react.b-cdn.net/images/icons/cate7.svg" categoryName="Dağ turu"/>
         </Link>
           </div>
      </div>

      <div
        className="navbar"
        style={{
          backgroundColor: navColor,
          transition: "all .5s",
        }}
      >
        <div className="logo">
          <a href="#">
            <img
              className="logo-img"
              src="https://creativelayers.net/themes/gotrip-html/img/general/logo-light.svg"
              alt="Logo"
            />
          </a>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">Ana səhifə</NavLink>
            </li>
            <li>
              <NavLink to="about-us">Haqqımızda</NavLink>
            </li>
            <li>
              <NavLink to="tours">Turlar</NavLink>
            </li>
            <li>
              <NavLink to="blog">Bloqlar</NavLink>
            </li>
            <li className="dropdown-li">
              <NavLink to="pages">Səhifələr <MdArrowDropDown/></NavLink>
              <ul className="dropdown">
                <li><NavLink to="*">404</NavLink></li>
                <li><NavLink to="faq">FAQ</NavLink></li>
                <li><NavLink to="galery">Qalereya</NavLink></li>
               
                <li><NavLink to="comingSoon">Coming Soon</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="contact">Bizimlə əlaqə</NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav-btns">
          <ul>
            <li>
              <BiCategory
                onClick={openOverlayCategory}
                className="open-category"
              />
            </li>
            <li>
              <BiSearchAlt onClick={() => setModalShown(!modalShown)} />
              {modalShown && 
               <div className="search__modal">
               <form >
                 <input type="text" placeholder="search..."/>
                 <button type="submit">search</button>
                 <VscChromeClose className="search_close" onClick={() => setModalShown(!modalShown)} />
                 {/* {modalShown && <Modal />} */}
                 </form>
               </div>
              }
             
            </li>
            <li>
              <AiOutlineMenu onClick={openOverlayMenu} className="open-icon" />
            </li>
          </ul>
        </div>
      </div>

     
    </>
  );
};

export default Navbar;
