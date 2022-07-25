import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import Router from 'next/router';
import { motion, AnimatePresence } from "framer-motion"; 

function Beers() {
 
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  },[]);


  function sendProps(data) {
      let id = data.id;
      let description= data.description;
      let name = data.name;
      let tagline = data.tagline;
      let abv = data.abv;
      let image_url = data.image_url;
      let food_pairing = data.food_pairing;

      // console.log(data)
      Router.push({
          pathname: "/thumbnail",
          // search: `?query=${data}`,
          query: { 
              id, description, name, tagline, abv, image_url, food_pairing, 
            }
      })
    }

  
  const fetchBeers = async () => {

    const storage = localStorage.getItem("beers");
    if(storage){
      setBeers(JSON.parse(storage));
    } else {
      const api = await fetch("https://api.punkapi.com/v2/beers?per_page=80")
      const data = await api.json();

      localStorage.setItem("beers", JSON.stringify(data));

      setBeers(data);
      // console.log(data);
    }
     
  }

  return (
    <>
      <h2 className="m-[1rem] text-[2rem] text-bgvar flex items-center justify-center">Beer Boutique</h2>

      <Splide options={{perPage: 4, breakpoints: {640: {perPage: 2}, 1024: {perPage: 3}, 400: {perPage: 1}}, arrows: false, pagination: true, drag: "free", gap: "2rem"}}>
      <AnimatePresence>
      {beers?.map((info) => {
        return(
          <SplideSlide key={info.id}>
          <a onClick={() => sendProps(info)}>
              <motion.div key={info.id} animate={{ opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}className="group hover:scale-110 transition-all duration-100 cursor-pointer h-[32rem] w-[16rem] m-[4rem] bg-bgvar rounded-[1rem] border-[1rem] border-bgdark" >
                <p  className="text-[1.6rem] text-bggold flex items-center justify-center">{info.name}</p>
                <div className="flex items-center justify-center">
                  <img  className="mt-[0.5rem] w-[auto] h-[12rem]" src={info.image_url} alt={info.name} /> 
                </div>
                <p className="mt-[0.5rem] line-clamp-6 text-center text-bggold">{info.description}</p>
              </motion.div>
          </a>
          </SplideSlide>
        );
      })}
      </AnimatePresence>
      </Splide>
    </>
  )
}

export default Beers