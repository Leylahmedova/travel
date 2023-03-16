import BlogComponent from '../Components/BlogComponent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const BlogMain = () => {

  return (
    <>
      <Tabs>
    <TabList >
      <div className="tabList">
      <Tab >
        <div className="tab">
        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/africa.png" alt="" />
        <div className='dot'></div>
        <h1>AFRICA</h1>
        <p>1505 locations</p>
       </div>
       </Tab>
       <Tab >
        <div className="tab">
        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/asia.png" alt="" />
        <div className='dot'></div>
        <h1>ASIYA</h1>
        <p>7505 locations</p>
       </div>
       </Tab>
       <Tab >
        <div className="tab">
        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/north-america.png" alt="" />
        <div className='dot'></div>
        <h1>AMERIKA</h1>
        <p>3505 locations</p>
       </div>
       </Tab>
       <Tab >
        <div className="tab">
        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/Australia.png" alt="" />
        <div className='dot'></div>
        <h1>AVSTRALIYA</h1>
        <p>2505 locations</p>
       </div>
       </Tab>
       <Tab >
        <div className="tab">
        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/Europe.png" alt="" />
        <div className='dot'></div>
        <h1>AVROPA</h1>
        <p>8505 locations</p>
       </div>
       </Tab>
       <Tab >
        <div className="tab">
        <img src="https://dtora.wpengine.com/wp-content/uploads/2019/03/asia.png" alt="" />
        <div className='dot'></div>
        <h1>C. AMERİKA</h1>
        <p>2505 locations</p>
       </div>
       
       </Tab>
       
      
    </div>
      
    
  
      
    </TabList>

    <TabPanel>

    <div className="blog-section">
    <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/8.png" countryName="Afrika" countryAbout="Afrika dünyanın ikinci ən böyük və ən çox əhalisi olan ikinci qitəsidir, hər ikisində Asiyadan geri qalır. Qonşu adalar da daxil olmaqla, təxminən 30,3 milyon km², Yerin ümumi səthinin 6%-ni və quru sahəsinin 20%-ni təşkil edir.
"/>
    <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/9.png"
    countryName="Tayland" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>

    <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/10.png"
    countryName="Meksika" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
    
    </div>
    </TabPanel>
    <TabPanel>
    <div className="blog-section">

<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/11.png"
countryName="Fransa" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/12.png"
countryName="Italiya" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/13.png"
countryName="Kanada" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
</div>
    </TabPanel>
    <TabPanel>
    <div className="blog-section"> 
          
      <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/14.png"
    countryName="Sinqapur" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
       <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/15.png"
    countryName="Banqladeş" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
       <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/16.png"
    countryName="Dubay" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
   
     </div>
    </TabPanel>
    <TabPanel>

    <div className="blog-section">
    <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/8.png" countryName="Afrika" countryAbout="Afrika dünyanın ikinci ən böyük və ən çox əhalisi olan ikinci qitəsidir, hər ikisində Asiyadan geri qalır. Qonşu adalar da daxil olmaqla, təxminən 30,3 milyon km², Yerin ümumi səthinin 6%-ni və quru sahəsinin 20%-ni təşkil edir.
"/>
    <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/9.png"
    countryName="Tayland" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>

    <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/10.png"
    countryName="Meksika" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
    
    </div>
    </TabPanel>
    <TabPanel>
    <div className="blog-section">

<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/11.png"
countryName="Fransa" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/12.png"
countryName="Italiya" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/13.png"
countryName="Kanada" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
</div>
    </TabPanel>
    <TabPanel>
    <div className="blog-section"> 
          
<BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/14.png"
    countryName="Sinqapur" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
       <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/15.png"
    countryName="Banqladeş" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
       <BlogComponent blogImg="http://zwin.io/react/viaje/assets/img/destination-list/16.png"
    countryName="Dubay" countryAbout="Thailand is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area."/>
   
     </div>
    </TabPanel>
  </Tabs>
   
   </>
  )
}

export default BlogMain