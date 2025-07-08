import React from "react";
import Hero_Section from "./hero_section";
import Create_solution from "./technology_section";
import Vision from "./vision_section";
import Invent from "./invent";
import Improve from "./improve";

const Index  = ()=>{
    return(
        <div>
            <Hero_Section />
            <Create_solution />
            <Vision />
            <Invent />
            <Improve />
        </div>
    )
}
export default Index