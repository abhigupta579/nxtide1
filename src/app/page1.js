"use client";

import BigTech from "@/Components/BigTech";
import Building from "@/Components/Building";
import Demo1 from "@/Components/Demo1";
import Demo2 from "@/Components/Demo2";
import Establish from "@/Components/Establish";
import Header from "@/Components/Header";
import MultiStack from "@/Components/MultiStack";
import NearShore from "@/Components/NearShore";
import Partner from "@/Components/Partner";
import Response from "@/Components/Response";
import Software from "@/Components/Software";
import SignIN from "@/pages/SignIN";
import SignUp from "@/pages/SignUp";



export default function Home() {
  return (
   <div>
    <Header/>
    <NearShore/>
    <Software/>
    <Partner/>
    <Building/>
    <Establish/>
    {/* <Form/> */}
    {/* <ContactForm/> */}
    <BigTech/>
    {/* <Response/> */}
    {/* <Demo1/> */}
    {/* <Demo2/> */}
    <MultiStack/>
  
    </div>
  )
}
