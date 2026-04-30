import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";


const tilesDetaispage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://tiles-gallery-akho.vercel.app/data.json")
    const tiless = await res.json();
    const tiles = tiless.find(t => t.id == id)
    console.log(tiles);

    return (
        <div className="container max-w-5xl mx-auto">
            <div className="card bg-base-200  shadow-lg border border-gray-100 mt-10 ">
                <figure className=" w-full ">
                    <Image
                        src={tiles.image}
                        height={500}
                        width={500}
                        alt={tiles.title}
                    />
                </figure>
                <div className="card-body">

                    <div className="flex  justify-between gap-2">
                        <h2 className="card-title font-bold ">{tiles.title}</h2>
                        <button
                            className={` font-semibold text-sm p-1 rounded-lg ${tiles.category === "ceramic"
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

                    <p>{tiles.description}</p>

                    <p className="font-semibold text-lg">${tiles.price}</p>

                    <p
                        className={`font-semibold ${tiles.inStock ? "text-green-600" : "text-red-500"
                            }`}
                    >
                        {tiles.inStock ? "In Stock" : "Stock Out"}
                    </p>

                    <div className="card-actions justify-end">
                        <Link href={'/all-tiles'}> <button className="btn font-bold bg-gray-500 text-white w-full rounded-full mt-4 items-center gap-2"> view other tiles<FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default tilesDetaispage;