import carouselImg from "./images/carousel.png";

export const Carousel = () => {
    return (
        <>
            <div>
                <div className="carousel w-full h-85 relative">
                    {/* Black foreground */}
                    <div className="absolute inset-0 bg-red opacity-50"></div>

                    {/* Image */}
                    <div id="item1" className="carousel-item w-full relative">
                        <img src={carouselImg} alt="Carousel Image" className="w-full"  />
                        {/* Text in the center */}
                        <div className="absolute inset-0 flex flex-col content-center items-center justify-center text-white" style={{background:'rgba(0,0,0,0.5)'}}>
                            <h2 className="mb-5 text-center" style={{ fontSize: '70px',padding: '20px' }}>Welcome to Games Of Bharat</h2>
                            <p className="font-serif text-xl mt-10">Step into the dynamic world of Games of Bharat</p>
                            <p className="font-serif text-xl">Where classic meets contemporary in the world of board games!</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs"></a>
                </div>
            </div>
        </>
    )
}