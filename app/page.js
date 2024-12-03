import Image from "next/image";
import { tiroBangla } from "./layout";
import Hero from "./_components/hero/Hero";
import Search from "./(search)/Search";
import AccordionC from "@/_components/Accoreading/accoreading";
import MakeBiodata from "@/_components/makeBiodata/makeBiodata";
import HowToWork from "@/_components/HowToWork/howToWork";
import MultiStepForm from "@/regestation/form";
export default function Home() {
  return (
    <div>
      <div>
        <Hero></Hero>
        <Search value="ঠিকানা অনুসারে খুঁজুন"></Search>
        {/* <AccordionC></AccordionC> */}
        <MakeBiodata></MakeBiodata>
        <HowToWork></HowToWork>
        <MultiStepForm></MultiStepForm>
      </div>
    </div>
  );
}
