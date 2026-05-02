import Marquee from "react-fast-marquee";

const Marqueesection = async() => {
     const res = await fetch("https://tiles-gallery-lztd.vercel.app/data.json")
    const tiles = await res.json();
    return (
        
            <div className=" rounded-md container mx-auto py-4 px-2  text-gray-700 font-semibold bg-red-100 flex items-center justify-center">
            
            <Marquee pauseOnClick={true} pauseOnHover={true} speed={100}>
               <div  className="text-center">
                 {
                    tiles.map(n=>{
                        return <span className="ml-6 text-xs md:text-base" key={n.id}> <span className="font-bold md:text-lg">New Arrivals :</span> {n.title} | <span className="font-bold md:text-lg">Weekly Feature :</span> Modern Geometric Patterns | Join the Community</span>
                    })
                }
               </div>
            </Marquee>

       
            
        </div>
    );
};

export default Marqueesection;