import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";


const Search = () => {
  const router = useRouter()

  const [input, setInput] = useState("");

    function sendProps() {
    if(input){ router.push({
        pathname: `/searched/`,
        query: {
            input,
        }
     })
    }else{
        router.push({
                pathname: `/`})
    }
    }

    const handleSubmit = (e) => {
     e.preventDefault()
     if(input){
        router.push({pathname: `/searched/`, query: {
            input,
        }})
    }else{
        router.push({pathname: `/`})
    }
    }


  return (
    <div className="mt-[2rem]">
        <form onSubmit={handleSubmit} className="gap-4 m-[1rem] flex w-[100%] items-center justify-center">
            <input onChange={(e) => setInput(e.target.value)} type="text"  placeholder="search..." value={input} className="w-[50%] border-0 outline-0 p-[1rem] bg-bgvar rounded-[1rem] text-bg" />
            <FaSearch onClick={sendProps} className="w-[2rem] h-[2rem] text-bgvar cursor-pointer" />
        </form>
    </div>
  )
}

export default Search