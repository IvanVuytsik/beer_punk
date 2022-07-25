import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
 
 
function Navbar() {
  return (
    <div className="flex left-0 top-0 w-full z-10 justify-between items-center bg-bgvar text-bg">
      <div>
          <h2 className="p-4 text-[2rem]">Beer Punks</h2>
      </div>

      <div className="flex group p-4 text-[2rem]">
          <Link href="/">
            <a><AiFillHome className="animate-bounce transition-all w-[2rem] h-[2rem]" /></a>
          </Link>
      </div>
    </div>
  )
}

export default Navbar