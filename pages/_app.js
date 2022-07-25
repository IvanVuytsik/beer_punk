import '../styles/globals.css';
import Navbar from "../components/Navbar";
import Categories from '../components/Categories';
import Search from '../components/Search';
 
 
function MyApp({ Component, pageProps }) {
 
  return (
  <>
    <Navbar /> 
    <Search />
    <Categories />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
