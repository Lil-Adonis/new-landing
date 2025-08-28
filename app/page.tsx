
import Cta4 from "@/components/sections/Cta4";

import Hero4 from "@/components/sections/Hero4";

import Newsletter3 from "@/components/sections/Newsletter3";

import dynamic from "next/dynamic";
const Services5 = dynamic(() => import("@/components/sections/Services5"), {
  ssr: false,
});

import Layout from "@/components/layout/Layout";
import Faqs3 from "@/components/sections/Faqs3";
import Services1 from "@/components/sections/Services1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Features4 from "@/components/sections/Features4";

import Static1 from "@/components/sections/Static1";
import Project2 from "@/components/sections/Project2";
import Cta8 from "@/components/sections/Cta8";
import LogoCloud3 from "@/components/sections/LogoCloud3";
import HowItWork1 from "@/components/sections/HowItWork1";
import Blog5 from "@/components/sections/Blog5";
export default function Home4() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={3}>
        <Hero4 />

        {/* <LogoCloud4 /> */}
        <Services1 />

       
  <HowItWork1 />
        
        <Static1 />
           <LogoCloud3/>
           <Cta4 />
       
       

       
         {/* <Cta8 /> */}
          <Blog5/>
       
        <Faqs3 />
       
            <Project2 />
        {/* <Features4 /> */}
        <Testimonial1 />
        {/* <Features9 /> */}
        {/* <HowItWork2 /> */}
        
        
        <Newsletter3 />
      </Layout>
    </>
  );
}
