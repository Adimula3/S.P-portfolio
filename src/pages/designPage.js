import audio from '../assets/image-gallery-1.jpg';
import '../styles/designPage.css';
import Header from '../component/header';
const DesignPage = () => {
    return (
        <>
        <div className="design">
        
            <div className="design-top">
                <h1>Work Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam necessitatibus incidunt ut officiis explicabo inventore.</p>
            </div>
            <div className="d-flex">
                <img src={audio} className="workpage-image" alt="" />
                <div className="design-bottom">
                    <h3>Audiophile</h3>
                    <span>Website design</span>
                    <p className='d-msg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo,
                         id recusandae molestias illum 
                         unde pariatur, enim tempora.</p>

                         <p className='d-w'>What i did</p>
                         <ul>
                            <li>Design</li>
                            <li>HTML5/CSS3</li>
                            <li>React</li>
                         </ul>

                         <button className="btn btn-primary">VISIT WEBSITE</button>
                </div>

            </div>
        </div>
        </>
    );
}
export default DesignPage