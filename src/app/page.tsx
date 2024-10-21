import Image from "next/image";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-center text-sky-400 font-black mb-6">Welcome to My Website</h1>
      <p className="text-center text-3xl text-gray-700 font-black ">This is My Home Page</p>
    </div>
  )
}