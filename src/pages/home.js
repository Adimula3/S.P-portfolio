import Header from '../component/header';
import '../styles/home.css'
import img1 from '../assets/work-img2.jpeg';
import img2 from '../assets/print-work2.jpeg';
import img3 from '../assets/work-img1.jpeg';
import img4 from '../assets/print-work1.jpeg';
import img5 from '../assets/pamino-portfolio.jpeg';
import img6 from '../assets/print-work4.jpeg';
import profile from '../assets/az-image.jpeg';
import hand from '../assets/Designer.png';
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
                        <div className='cafe-inner'><h1>Hello folks, we are <b className='animate__animated animate__zoomInDown'>Tee Pixxel Creation.</b></h1></div>
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
            
            <motion.p>Tee Pixxel Creation is one of Nigeria’s most innovative Printing and Branding 
                Company based in Abuja, Nigeria; duly registered with CAC as with (BN 6992826) Our 
                designs are brilliant and our prints, very exclusive. We offer full range of printing 
                and branding services to a wide range of clients operating across different industry sectors 
                all across Nigeria and beyond. Tee Pixxel Creation is a One stop shop for all your printing needs; 
                our custom made solutions are tailored specifically to meet your peculiar needs ensuring the best
                output throughout the process. Join our happy customers who made Tee Pixxel Creation their most 
                preferred printing destination in Nigeria. Let us earn your loyalty, give us a trial Today.
                If you are looking for a team of talented and passionate designers who can help your business stand out
                in today's crowded digital space, look no further. Contact us today to learn more about how we can 
                help you achieve your design goals and take your brand to the next level.

                Our project timeline is as important to us as our delivering excellence in print.  
                From the design and print of Business Cards, Corporate Stationary, Display Banners, 
                Signs and Displays, Stamps and Seals, Marketing Materials to the Branding of Vehicles, 
                Clothing, Gifts and Souvenirs, we provide quality finishing using our cutting-edge printing
                 technology. 
            </motion.p>
        </div>
        <div className='about'>
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
            <div className='abt-img'>
                <img src={profile}  alt="" className='about-image'/>
            </div>
            </div> 
        </div>
        <div className='portfolio'>
                     <div className='p-nav d-flex'>
                        <h1><b>My</b> projects</h1>
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
                                <div className='container ok'>
                                   <img src={img1}className="image one"/>
                                   <div class="middle d-flex">
                                   
                                      <div class="text">Project Link</div>
                                   </div>
                                   <div className="bottom">
                                      <h5>My QrCard</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                                <div className='container'>
                                   <img src={img4} className="image two"/>
                                   <div className="middle">
                                      <div className="text"><a href='https://www.instagram.com/p/CrjluJDNCFz/?igshid=NTc4MTIwNjQ2YQ=='>Project Link</a></div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Moto Padi</h5>
                                      <p>Brading & Visual Identity</p>
                                   </div>
                                </div>
                              
                            </div>
                            <div className='column'>
                                <div className='container'>
                                   <img src={img2}className="image"/>
                                   <div class="middle">
                                      <div class="text"><a href='https://www.instagram.com/p/CqTt_8JNuT2/?igshid=NTc4MTIwNjQ2YQ=='>Project Link</a></div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Queen Bee</h5>
                                      <p>Brading & Visual Identity</p>
                                   </div>
                                </div>
                                <div className='container'>
                                   <img src={img5}className="image  one"/>
                                   <div class="middle">
                                      <div class="text"><a href='https://kolawoleolayinka.tech/'>Project Link</a></div>
                                   </div>
                                   <div className="bottom">
                                      <h5>Pamino Portfolio</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div className='container'>
                                   <img src={img3}className="image one"/>
                                   <div class="middle">
                                      <div class="text"><a href='https://audiphile19.vercel.app/'>Project Link</a></div>
                                   </div>
                                   <div className="bottom">
                                      <h5>HeadPhones</h5>
                                      <p>Web Design</p>
                                   </div>
                                </div>
                                <div className='container'>
                                   <img src={img6} className="image two"/>
                                   <div class="middle">
                                      <div class="text"><a href='https://www.instagram.com/p/CnNf0aUNVHT/?igshid=NTc4MTIwNjQ2YQ=='>Project Link</a></div>
                                   </div>
                                   <div className="bottom">
                                      <h5>LRS Family</h5>
                                      <p>Print Design</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    
                 </div>
        <div className='services'>
            <div className='row'>
                <div className='col-lg-6'>
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
                    <img src={hand} alt=''  className='skills-img'/>
                </div>
            </div>
        </div>
        <div className='testimonies'>
            
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
            <h1>hello@teepixxel-creation.com</h1>
            <p>+(234) 902 836 4518 / +(234) 905 266 2414</p>
            <div className='address d-flex'>
                <div>
                    <h3>/ WHERE TO FIND US</h3>
                    <p>SHOP D17 , Utc Area 10 Shopping Complex Abuja </p>
                    
                </div>
                <div className='socials'>
                    <h3>/ FOLLOW US</h3>
                    <div className='media d-flex'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;