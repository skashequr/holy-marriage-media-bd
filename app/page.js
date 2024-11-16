import Image from "next/image";
import { tiroBangla } from "./layout";
import Hero from "./_components/hero/Hero";
import Search from "./_components/search/Search";
import AccordionC from "@/_components/Accoreading/accoreading";
export default function Home() {
  return (
    <div>
      <div>
        <Hero></Hero>
        <Search value="ঠিকানা অনুসারে খুঁজুন"></Search>
        <AccordionC></AccordionC>
      </div>
    </div>
  );
}
