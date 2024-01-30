import './App.css';
import Navbar from './components/Nav';
import carouselImg from './components/images/carousel.png';

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

    </>
  )
}

export default App
