import Header from '../component/header';
import '../styles/home.css'
import img1 from '../assets/azimg1.jpeg';
import img2 from '../assets/azimg2.jpeg';
import img3 from '../assets/azimg3.jpeg';
import img4 from '../assets/azimg4.jpeg';
import img5 from '../assets/azimg5.jpeg';
import img6 from '../assets/azimg6.jpeg';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
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

    const { ref, inView } = useInView({
        threshold: 0.3, // trigger when the element is 50% visible
        triggerOnce: true, // only trigger once
      });


      const animate = inView ? 'animate' : '';

    return (
        <>
     <div className='pixar3'>
            
            <div className='home-content'>
                <div className='title-inner'>
                    <div className='cafe'>
                        <div className='cafe-inner'><h1>Hello folks, we are <b className='animate__animated animate__zoomInDown'>Tee Pixxel Studio.</b></h1></div>
                    </div>
                    <div className='mozart'>
                        <div className='mozart-inner'>
                            <div className='hm d-flex'>
                                <hr className='hme'></hr>
                                <p>We create stunning designs
                                   will help your business stand out.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="Home">
            <Header />
            </div>
     </div>   
       
        <div className='content'>
            <h5>/  WHO WE ARE</h5>
            <h2 ref={ref}
          className={`animated-heading ${animate}`}>
               <span>We</span>
               <span>are</span>
               <span>a</span>
               <span>group</span>
               <span>of</span>
               <span>design</span>
               <span>driven</span>
               <span>individuals</span>
               <span>passionate</span>
               <span>about</span>
               <span>creating</span>
               <span>beautiful</span>
               <span>Graphic/UI</span>
               <span>and</span>
               <span>web</span>
               <span>designs.</span>              
            </h2>
            
            <p>Welcome to our world of design-driven individuals who are passionate about creating stunning Graphic/UI and web designs that will help your business stand out.
            We are a group of talented professionals who are dedicated to crafting unique and visually appealing designs that will make your brand shine in today's competitive digital landscape.
            Our design process is collaborative and transparent, and we involve our clients at every stage to ensure that their feedback and ideas are incorporated into the final design.
            We pride ourselves on delivering high-quality designs on time and within budget.
            If you are looking for a team of talented and passionate designers who can help your business stand out in today's crowded digital space, look no further. Contact us today to learn more about how we can help you achieve your design goals and take your brand to the next level.
            </p>
        </div>
        <div className='about'>
            <h1 className='abt-title'>My <b>Bio</b></h1>
            <div className='abt d-flex'>
            <div className=''>
            <div class="box" >
          <div class="titles">
            <span class="block"></span>
            <h1 className='animate__animated animate__fadeIn'>My name is Azeez<span></span></h1>
          </div>

         <div class="role">
            <div class="block"></div>
            <p  className='animate__animated animate__fadeInRight'>UI WEB GRAPHIC</p>
         </div>

          </div>
            <p className='abt-msg'>Hey there! Thanks for visiting my website. My name is Azeez, and I am a creative professional with a diverse skillset. As a graphic designer,
                 UI/UX specialist, web developer, and computer science graduate, 
                 I bring a unique perspective to every project. I have a passion 
                 for creating visually stunning designs and intuitive user experiences that
                  engage and delight users. With my technical skills and artistic flair,
                   I am committed to delivering innovative solutions that exceed expectations. 
                   I'm excited to connect with you and explore how we can work together to bring your ideas to life.
            </p>
            <div className='abt-info d-flex'>
                <button className='btn btn-primary'>HIRE ME</button>
            </div>
            </div>
            <div className=''>
                <div className='box7'></div>
            </div>
            </div> 
        </div>
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
                              <a class="nav-link" href="#">Branding</a>
                           </li>
                        </ul>   
                     </div>
                
                     <div className=''>
                        <div className='row p-row'>
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
        <div className='services'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>My services</h1>
                    <p className='p-skills'>Here Are Some of My Skills</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='s-title'>1 - GRAPHIC DESIGN</p>
                            <ul>
                                <li>UI Design</li>
                                <li>Website & Digital Design</li>
                                <li>Brading & Visual Identity</li>
                                <li>Print Design</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <p className='s-title'>2 - ILLUSTRATION</p>
                            <ul>
                                <li>Editorial</li>
                                <li>Narrative</li>
                                <li>Motion Graphics</li>
                                <li>Animation</li>
                                <li>Visual Effects</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='s-title'>3 - FRONT END DEVELOPMENT</p>
                            <ul>
                                <li>HTML / CSS</li>
                                <li>JS & JS Frameworks</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={img3} alt=''  className='skills-img'/>
                </div>
            </div>
        </div>
        <div className='testimonies'>
            
        </div>
        <div className='read'>
            <h1>Read on Medium</h1>
            <div className='read-content'>
                <div className='rd d-flex'>
                    <div>
                    <span>May 28, 2023</span>
                    <p>Front-end Developer Demands today</p>
                    </div>
                    <span className='mins'>1 MINS READ</span>
                </div>
                <hr></hr>
                <div className='rd d-flex'>
                    <div>
                    <span>May 28, 2023</span>
                    <p>Why Front-end Developer So Important</p>
                    </div>
                    <span className='mins'>1 MINS READ</span>
                </div>
                <hr></hr>
                <div className='rd d-flex'>
                    <div>
                    <span>May 28, 2023</span>
                    <p>Why Front-end Developer So Important</p>
                    </div>
                    <span className='mins'>1 MINS READ</span>
                </div>
                <hr></hr>
            </div>
        </div>
        <div className='contacts'>
            <div className='container'>
                <div className='row'>
                   
                    <div className='col-lg-7'>
                    <h2 className="mb-5">Fill the form. <br/> It's easy.</h2>
                <div className='d-flex'>
                    <form className="form border-right pr-5 mb-5" >
                        <div className='row left'>
                            <div className='col-md-6 form-group'>
                            <input type="text" className="form-control" name="fname" id="fname" placeholder="First name" />
                            </div>
                            <div className='col-md-6 form-group'>
                               <input type="text" class="form-control" name="lname" id="lname" placeholder="Last name" />
                            </div>
                        </div>
                        <div className='row-md-12'>
                            <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className='row-md-12 '>
                        <textarea class="form-control f-msg" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                              <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4" />
                              <span class="submitting"></span>
                            </div>
                        </div>
                    </form>
                    <div class="vl"></div>
                </div>
                    
                    
                    </div>
                    
                    <div className='col-lg-4 contacts-msg'>
                
                       <h3 class="mb-4">Let's talk about designing.</h3>
                       <p> Let me help your business stand out in today's crowded digital space, look no further. Contact us today to learn more</p>
                       
                    </div>
                </div>
            </div>
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