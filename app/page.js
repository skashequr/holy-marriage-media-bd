import Image from "next/image";
import { tiroBangla } from "./layout";
import Hero from "./_components/hero/Hero";
import Search from "./(search)/Search";
import AccordionC from "@/_components/Accoreading/accoreading";
import MakeBiodata from "@/_components/makeBiodata/makeBiodata";
import HowToWork from "@/_components/HowToWork/howToWork";
import MultiStepForm from "@/regestation/form";
import StatsSection from "./_components/stateUp/stateup";
import Footer from "./_components/footer/footer";
export default function Home() {
  return (
    <div>
      <div>
        <Hero></Hero>
        {/* <Search value="ঠিকানা অনুসারে খুঁজুন"></Search> */}
        {/* <AccordionC></AccordionC> */}
        <HowToWork></HowToWork>
        <StatsSection></StatsSection>
        <MakeBiodata></MakeBiodata>
        <Footer></Footer>
        {/* <MultiStepForm></MultiStepForm> */}
      </div>
    </div>
  );
}
