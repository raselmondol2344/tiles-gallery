import Marquee from "react-fast-marquee";

const Marqueesection = async() => {
     const res = await fetch("https://tiles-gallery-akho.vercel.app/data.json")
    const tiles = await res.json();
    return (
        
            <div className=" rounded-md container mx-auto   py-4 px-2 text-gray-700 font-semibold bg-red-100 flex justify-between gap-4 items-center">
            
            <Marquee pauseOnClick={true} pauseOnHover={true} speed={100}>
               <div >
                 {
                    tiles.map(n=>{
                        return <span className="ml-10 mt-5" key={n.id}> <span className="font-bold text-lg">New Arrivals :</span> {n.title} | <span className="font-bold text-lg">Weekly Feature :</span> Modern Geometric Patterns | Join the Community</span>
                    })
                }
               </div>
            </Marquee>

       
            
        </div>
    );
};

export default Marqueesection;