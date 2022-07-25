import { useRouter } from 'next/router';
import { motion, AnimatePresence  } from "framer-motion"; 

const thumbnail = () => {
 const router = useRouter();

 const {query: {id, description, name, tagline, abv, image_url, food_pairing}} = router;

 const props = {id, description, name, tagline, abv, image_url, food_pairing}
//  console.log(props)
   
  return (
    <motion.div animate={{ opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className="group flex items-center justify-center content-center">
        <div className="cursor-pointer h-[40rem] w-[32rem] m-[4rem] bg-bgvar rounded-[1rem] border-[1rem] border-bgdark" >
          <p  className="text-[1.6rem] text-bggold flex items-center justify-center">{props.name}</p>
          <p  className="text-[1.4rem] text-bggold flex items-center justify-center">{props.tagline}</p>
          <div className="flex items-center justify-center">
            <img  className="mt-[0.5rem] w-[auto] h-[12rem]" src={props.image_url} alt={props.name} /> 
          </div>
          <p className="mx-[2rem] mt-[0.5rem] text-center text-bggold">{props.description}</p>
          <div className="flex content-center text-center items-center justify-center">
            <p className="w-[3rem] text-[2rem] mt-[1rem]  text-bgvar bg-bggold rounded-[50%]">{props.abv}</p>
          </div>
        </div>

        <div className="flex  hover:scale-125 transition-all duration-100 cursor-pointer h-[24rem] w-[16rem] m-[2rem] bg-bgvar rounded-[1rem] border-[1rem] border-bgdark">
          <p className="mx-[2rem] mt-[1rem] text-center text-bggold">{props.food_pairing}</p>
        </div>
     
    </motion.div>
  )
 
}
  

export default thumbnail