import React from "react";
import Hero_Section from "./hero_section";
import Contact_Opt from "./Contact_option";
import Contact_Form from "./contact_form";

const Index = () => {
    return (
        <div>
            <Hero_Section />
            <Contact_Opt />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.696924988342!2d67.07219071461638!3d24.83059198406173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1d17aee4e1%3A0xd03ac6cbf0f64d83!2s25-E%20Khayaban-e-Jami%2C%20Phase%202%20Ext%20DHA%2C%20Karachi!5e0!3m2!1sen!2s!4v1752018004114!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <Contact_Form />
        </div>
    )
}
export default Index