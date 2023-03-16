import React from 'react'

const Adventure = () => {
  return (
    <>
    
        <div className='adventure-section'>
        <div className="adventure-content">
            <h2> Vaxt itirmədən bizimlə səfər edin</h2>
        </div>
        <div className="adventure-blogs">
            <div className="first-card">
                <div className="about-trip">
                <h2>Ağlınızda macəramı var?</h2>
                <p>Elədirsə vaxt itirmədən bizimlə səfər edin</p>
                <h2>$699</h2>
                <h3>Başlayan qiymətlərlə</h3>
               
                <a href="">Səyahətə başla</a>
                </div>
            </div>
            <div className="second-card">
                <div className="adventure-tips">
                    <img src="https://dtora.wpengine.com/wp-content/uploads/2019/05/hiking.jpg" alt="" />
                    <div className="title">
                    <h3>Gəzinti <p>(2 aktivite)</p></h3>
                </div>
                </div>
        
                <div className="adventure-tips">
                    <img src="https://dtora.wpengine.com/wp-content/uploads/2019/05/safari.jpg" alt="" />
                    <div className="title">
                    <h3>Safari<p>(1 aktivite)</p></h3>
                </div>
                </div>
            </div>
            <div className="second-card last">
            <div className="adventure-tips">
                    <img src="https://dtora.wpengine.com/wp-content/uploads/2019/05/paragliding.jpg" alt="" />
                    <div className="title">
                    <h3>Paraşüt<p>(1 aktivite)</p></h3>
                </div>
                </div>
                <div className="adventure-tips">
                    <img src="https://dtora.wpengine.com/wp-content/uploads/2019/05/moutain.jpg" alt="" />
                    <div className="title">
                    <h3>Dağ <p>(1 aktivite)</p></h3>
                </div>
                </div>
            </div>
        </div>
    </div>
   
    </>

  )
}

export default Adventure