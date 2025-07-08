import React from "react"
import HeroSection from "./hero_section"
import Vehicle_type from "./vehicle_type_section"
import Vehicle_problem from "./vehicle_probelm_section"
import Create_solution from "./technology_section"
import Expert from "./ask_expert_section"
import Our_Product from "./our_products_section"
import Highlight_Section from "./highlights_section"
const Index  = ()=>{
    return(
        <div>
            <HeroSection />
            <Vehicle_type />
            <Vehicle_problem />
            <Create_solution />
            <Expert />
            <Our_Product />
            <Highlight_Section />
        </div>
    )
}
export default Index