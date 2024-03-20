import Image from "next/image";
import Hero from './Components/Hero.js'
import Products from "./Components/Products.tsx";
import Recents from "./Components/Recents.tsx";
import MobNav from "./Components/mobNav.tsx";



export default function Home() {
  return (
  <>
  <Hero/>
  <Recents/>

          {/* <MobNav/> */}
  <Products/>

  </>
  );
}
