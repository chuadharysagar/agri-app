import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
   <nav className="bg-green-700 text-white p-4 shadow-lg">
   <div className="container mx-auto flex justify-between items-center">
     {/* Logo Placeholder */}
     <div className="text-xl font-bold cursor-pointer"><Link href='/'>Logo</Link></div>

     {/* Navigation Tabs */}
     <div className="hidden md:flex space-x-6">
       <Link href="/" className="hover:text-yellow-300 font-semibold">Home</Link>
       <Link href="/about" className="hover:text-yellow-300 font-semibold">About</Link>
       <Link href="/services" className="hover:text-yellow-300 font-semibold">Services</Link>
       <Link href="/contact" className="hover:text-yellow-300 font-semibold">Contact</Link>
       <Link href="/forms" className="hover:text-yellow-300 font-semibold">Forms</Link>
     </div>

     {/* Search Box */}
     <div className="hidden xl:flex items-center bg-white text-black rounded-full px-3 py-1 w-64">
       <span className="text-gray-500">🔍</span>
       <input
         type="text"
         placeholder="Search..."
         className="bg-transparent focus:outline-none ml-2 w-full"
       />
     </div>

     {/* Profile Icon */}
     <div className="ml-4 flex items-center gap-2 cursor-pointer">
       <Image src={assets.noAvatar} alt="Profile picture" height={40} width={40}/><span className="font-semibold">Bibek Yadav</span>
     </div>
   </div>
 </nav>
  )
}

export default Header