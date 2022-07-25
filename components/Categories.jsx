import { IoIosBeer } from "react-icons/io";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdLiquor } from "react-icons/md";
import Router from 'next/router';


function Categories() {
 
  function sendProps(type) {
        Router.push({
            pathname: "/preference",
            query: {
                type,
            }
        })
    }


  return (
    <>
    <div className="flex items-center justify-center text-[2rem] mt-[2rem] p-4 gap-[2rem] cursor-pointer text-bgvar">
        <div>
            <a onClick={() => sendProps(3)}><FaWineGlassAlt  className="hover:scale-125 transition-all duration-100 w-[2rem] h-[2rem]" /></a>
            <p className="flex text-center items-center justify-center mt-[0.5rem] text-bgvar text-[1rem]">3%</p>
        </div>
        <div>
            <a onClick={() => sendProps(4)}><IoIosBeer   className="hover:scale-125 transition-all duration-100 w-[2rem] h-[2rem]" /></a>
            <p className="flex text-center items-center justify-center mt-[0.5rem] text-bgvar text-[1rem]">4%</p>
        </div>
        <div>
            <a onClick={() => sendProps(9)}><MdLiquor   className="hover:scale-125 transition-all duration-100 w-[2rem] h-[2rem]" /></a>
            <p className="flex text-center items-center justify-center mt-[0.5rem] text-bgvar text-[1rem]">9%</p>
        </div>
    </div>

   
</>
  )
}



export default Categories