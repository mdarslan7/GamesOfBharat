import './App.css';
import Navbar from './components/Nav';
import carouselImg from './components/images/carousel.png';
import Footer from './components/Footer';
import {Carousel} from '3d-react-carousal';

let slides = [
  <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
  <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

function App() {
  return (
    <>
      <Navbar/>

      {/* Carousel */}
      <div className='m-5'>
        <div className="carousel w-full h-85 relative">
          {/* Black foreground */}
          <div className="absolute inset-0 bg-red opacity-50"></div>
          
          {/* Image */}
          <div id="item1" className="carousel-item w-full relative">
            <img src={carouselImg} alt="Carousel Image" className="w-full"  />
            {/* Text in the center */}
            <div className="absolute inset-0 flex items-center justify-center text-white" style={{background:'rgba(0,0,0,0.5)'}}>
              <h2 className="text-center" style={{ fontSize: '70px',padding: '20px' }}>Welcome to Games Of Bharat</h2>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs"></a> 
        </div>
      </div>

      <Carousel slides={slides} interval={1000}/>

      <Footer/>
    </>
  )
}

export default App;
