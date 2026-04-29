import TilesCard from "@/components/TilesCard";
import Image from "next/image";


const allTilespage = async() => {
    const res = await fetch("http://localhost:3000/data.json")
    const tiles = await res.json();
    console.log(tiles);
    return (
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold m-10">All Tiles</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    tiles.map(tiles => <TilesCard key={tiles.id} tiles ={tiles}></TilesCard>)
                }
            </div>
            
        </div>
    );
};

export default allTilespage;