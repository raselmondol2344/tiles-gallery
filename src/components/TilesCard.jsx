import { ClientSegmentRoot } from "next/dist/client/components/client-segment";
import Image from "next/image";
import Link from "next/link";


const TilesCard = ({ tiles }) => {
    if (!tiles) return null;
    console.log(tiles);
    return (
        <div>
            <div className="card bg-base-200  shadow-lg border border-gray-100">
                <figure className="relative w-full aspect-square">
                   <Image
                   src ={tiles.image}
                   fill
                   alt={tiles.title}
                   />
                </figure>
                <div className="card-body">

                   <div className="flex  justify-between gap-2">
                     <h2 className="card-title font-bold ">{tiles.title}</h2>
                    <button
                    className={` font-semibold text-sm p-1 rounded-lg ${
                        tiles.category === "ceramic"
                        ? "bg-blue-100 text-blue-700"
                        : tiles.category === "marble"
                        ? "bg-gray-100 text-gray-700"
                        : tiles.category === "porcelain"
                        ? "bg-yellow-100 text-yellow-700"
                        : tiles.category === "concrete"
                        ? "bg-slate-200 text-slate-800"
                        : tiles.category === "decorative"
                        ? "bg-pink-100 text-pink-700"
                        : tiles.category === "stone"
                        ? "bg-stone-200 text-stone-800"
                        : tiles.category === "mosaic"
                        ? "bg-cyan-100 text-cyan-700"
                        : tiles.category === "terracotta"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                    >
                    {tiles.category}
                    </button>
                   </div>

                   <p className="font-semibold text-lg">${tiles.price}</p>
                    <div className="card-actions justify-center">
                       <Link className="w-full" href={`/all-tiles/${tiles.id}`}> <button className="btn font-bold bg-gray-500 text-white w-full rounded-full mt-4">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TilesCard;