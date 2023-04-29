import Header from '../component/header';
import '../styles/home.css'
import img1 from '../assets/azimg1.jpeg';
import img2 from '../assets/azimg2.jpeg';
import img3 from '../assets/azimg3.jpeg';
import img4 from '../assets/azimg4.jpeg';
import img5 from '../assets/azimg5.jpeg';
import img6 from '../assets/azimg6.jpeg';
import { useState } from 'react';
const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    }
    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    }
    return (
        <>
        <div className="Home">
            <Header />
            <div className='home-content'>
                <h1>Hello folks, we are <b className='animate__animated animate__zoomInDown'>Tee Pixxel Studio.</b></h1>
                <div className='hm d-flex'>
                <hr className='hme'></hr>
                <p>We create stunning designs
                that will help your business stand out.</p>
                </div>
             
            </div>
        </div>
        <div className='content'>
            <h5>/  WHO WE ARE</h5>
            <h2>We are a group of design driven individuals passionate about creating beautiful Graphic/UI and web designs.</h2>
            
            <p>Welcome to our world of design-driven individuals who are passionate about creating stunning Graphic/UI and web designs that will help your business stand out.
            We are a group of talented professionals who are dedicated to crafting unique and visually appealing designs that will make your brand shine in today's competitive digital landscape.
            Our design process is collaborative and transparent, and we involve our clients at every stage to ensure that their feedback and ideas are incorporated into the final design.
            We pride ourselves on delivering high-quality designs on time and within budget.
            If you are looking for a team of talented and passionate designers who can help your business stand out in today's crowded digital space, look no further. Contact us today to learn more about how we can help you achieve your design goals and take your brand to the next level.
            </p>

          
                  <div className='portfolio'>
                     <div className='p-nav d-flex'>
                        <h1><b>My</b> portfolio</h1>
                        <ul class="nav">
                           <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#">All</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">Graphic design</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">Web design</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="#">Social</a>
                           </li>
                        </ul>   
                     </div>
                     <hr></hr>
                     <div className=''>
                        <div className='row'>
                            <div className='column'>
                                <div className='container'>
                                   <img src={img1}className="image"/>
                                   <div class="middle d-flex">
                                   
                                      <div class="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Arcade</h5>
                                      <p>Graphic Design</p>
                                   </div>
                                </div>
                                <div className='container'>
                                   <img src={img4} className="image"/>
                                   <div className="middle">
                                      <div className="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Arcade</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                              
                            </div>
                            <div className='column'>
                                <div className='container'>
                                   <img src={img2}className="image"/>
                                   <div class="middle">
                                      <div class="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Arcade</h5>
                                      <p>UI/UX</p>
                                   </div>
                                </div>
                                <div className='container'>
                                   <img src={img5}className="image"/>
                                   <div class="middle">
                                      <div class="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Arcade</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                   <img src={img3}className="image"/>
                                   <div class="middle">
                                      <div class="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Arcade</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                                <div className='container'>
                                   <img src={img6}className="image"/>
                                   <div class="middle">
                                      <div class="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Arcade</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    
                 </div>
            
        </div>
        <div className='accord'>
            <div className='accord-msg first d-flex'>
                <h2>Web-design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...</p>
                <button className='btn btn-dark' onClick={toggleAccordion}>+</button>
            </div>
                        {isOpen && (
                             <div className="accordion-content">
                              A well-designed website can help to establish your brand, engage your audience,
                               and convey your message in a clear and concise manner. Whether you're
                                looking to create a simple landing page or a complex e-commerce site, investing in quality web design can help to enhance your online presence and achieve your business goals.
                           </div>
                        )}
            <hr></hr>
            <div className='accord-msg second d-flex'>
                <h2>Brands</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...</p>
                <button className='btn btn-dark' onClick={toggleAccordion1}>+</button>
            </div>
            {isOpen1 && (
                             <div className="accordion-content">
                             There are many brands that have established a strong online presence through effective web design. 
                             One such brand is Apple, whose minimalist and user-friendly website design reflects its
                              brand values of simplicity, innovation, and high quality. These brands demonstrate the power of effective web design in
                               creating a memorable user experience that reflects the brand's values and goals.
                           </div>
                        )}
            <hr></hr>
            <div className='accord-msg third d-flex'>
                <h2>Social media</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...</p>
                <button className='btn btn-dark' onClick={toggleAccordion2}>+</button>
            </div>
            {isOpen2 && (
                             <div className="accordion-content">
                            Social media is a powerful tool for building and promoting your brand online.
                             Effective social media strategy involves creating engaging content, 
                             connecting with your audience, and establishing a consistent brand image across all platforms.
                           </div>
                        )}
            <hr></hr>
        </div>
        <div className='about'>
            <div className='abt d-flex'>
            <div className=''>
            <h2>My name is Azeez</h2>
            <p>Hey there! Thanks for visiting my website. My name is Azeez, and I am a creative professional with a diverse skillset. As a graphic designer,
                 UI/UX specialist, web developer, and computer science graduate, 
                 I bring a unique perspective to every project. I have a passion 
                 for creating visually stunning designs and intuitive user experiences that
                  engage and delight users. With my technical skills and artistic flair,
                   I am committed to delivering innovative solutions that exceed expectations. 
                   I'm excited to connect with you and explore how we can work together to bring your ideas to life.
            </p>
            </div>
            <div className=''>
                <div className='box7'></div>
            </div>
            </div> 
            <hr></hr>
        </div>
       
        <div className='contact'>
            <h1>hello@teepixxel-studio.com</h1>
            <p>+(234) 813 362 9151 / +(234) 902 836 4518</p>
            <div className='address d-flex'>
                <div>
                    <h3>/ WHERE TO FIND US</h3>
                    <p>1600 Abuja Gwagwlada
                    Mountain View, CA
                    Mountain View, CA
                    </p>
                    
                </div>
                <div className='socials'>
                    <h3>/ FOLLOW US</h3>
                    <div className='media d-flex'>
                    <i class="fa-brands fa-instagram fa-beat"></i>
                    <i class="fa-brands fa-facebook fa-beat"></i>
                    <i class="fa-brands fa-twitter fa-beat"></i>
                    <i class="fa-brands fa-google fa-beat"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;