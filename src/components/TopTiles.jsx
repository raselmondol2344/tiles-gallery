import TilesCard from "./TilesCard";
import Image from "next/image";


const TopTiles = async() => {
    const res = await fetch("http://localhost:3000/data.json")
    const tiles = await res.json();
    const tiless = tiles.slice(0,4)
   // console.log(tiless);
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold m-10">Featured Tiles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    tiless.map(tiles=> <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
                }

            </div>

            
        </div>
    );
};

export default TopTiles;