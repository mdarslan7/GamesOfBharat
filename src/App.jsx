import './App.css';
// import CarouselGob from './components/CarouselGob';
import Navbar from './components/Nav';
import carouselImg from './components/images/carousel.png';
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
      <div className="carousel w-full h-85">
        <div id="item1" className="carousel-item w-full">
          <img src={carouselImg} className="w-full" />
        </div> 
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs"></a> 
      </div>
      </div>

    <div>
      <Carousel slides={slides} autoplay={false} interval={1000}/>
    </div>

    </>
  )
}

export default App
