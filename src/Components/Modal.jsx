import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
const Modal = () => {
  const [modalShown, setModalShown] = useState(true);
  return (
    <div className="search__modal">

    <form >
       
     
      <input type="text" placeholder="search..."/>
      <button type="submit">Search</button>
      <VscChromeClose className="search_close" onClick={() => setModalShown(!modalShown)} />
      {/* {modalShown && <Modal />} */}
      </form>
    </div>
  )
}

export default Modal