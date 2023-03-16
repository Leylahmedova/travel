import React from 'react'
import CountUp from 'react-countup';
const Goto = () => {
  return (
    <>
      <section className="goto-section">
        <div className="count-up">
          <div className="count-card">
            <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/count1.png" alt="" />
            <h1><CountUp  end={900} duration={8}  
             
             suffix="+"
            /></h1>
            <h4>Səyahət Paketləri</h4>
          </div>
          <div className="count-card">
          <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/count2.png" alt="" />
          <h1><CountUp end={900}
            duration={8}
            suffix="+" /></h1>
            <h4>Bütün filiallar</h4>
          </div>
          <div className="count-card">
          <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/count3.png" alt="" />
          <h1><CountUp end={900}
            duration={8}
            suffix="+" /></h1>
            <h4>Ekspert Təmsilcilər
            </h4>
          </div>
          <div className="count-card">
          <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/count4.png" alt="" />
          <h1><CountUp end={1985} 
            duration={8}
            suffix="+"/></h1>
            <h4>Göstərilən fəaliyyətlər</h4>
          </div>
        </div>
   
 
      </section>
    </>
  )
}

export default Goto