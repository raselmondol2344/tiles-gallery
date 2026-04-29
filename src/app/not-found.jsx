import Link from "next/link";


const notfound = () => {
    return (
        <div className="bg-gray-500">
           
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-500">The page you are looking for doesn’t exist.</p>
      <Link href={'/'}><button className="btn bg-gray-800 text-white font-bold border-none ">Home</button></Link>
    </div>
  

            
        </div>
    );
};

export default notfound;