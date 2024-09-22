import Image from "next/image";
import { tiroBangla } from "./layout";
import Navbar from "./_components/navbar/Navbar";
import Hero from "./_components/hero/Hero";
import Search from "./_components/search/Search";


export default function Home() {
  return (
    <div>
      <div>
        <Hero></Hero>
        <Search value="ঠিকানা অনুসারে খুঁজুন"></Search>
      </div>

      
    </div>
  );
}
