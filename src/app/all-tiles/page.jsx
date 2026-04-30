"use client";

import { useState, useEffect } from "react"; 
import Search from "@/components/Search";
import TilesCard from "@/components/TilesCard";

const AllTilesPage = () => { 
    const [tiles, setTiles] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://tiles-gallery-akho.vercel.app/data.json");
                const data = await res.json();
                setTiles(data);
            } catch (error) {
                console.error("Error fetching tiles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    
    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (loading) return <p className="text-center mt-20">Loading...</p>;

    return (
        <div className="container max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold m-10">All Tiles</h1>
                <Search setSearchText={setSearchText} />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {filteredTiles.map((tile) => (
                    <TilesCard key={tile.id} tiles={tile} />
                ))}
            </div>
        </div>
    );
};

export default AllTilesPage;