import React from "react";
import "../styles/timeline.css";
import { TimelineCard } from "./timelinecard";

export const Timeline = () => {
    return (
        <section id="timeline" className="container-fluid">
            <p className="category text-muted">PROJECTS TIMELINE</p>
            <h2>Workflow Proccess</h2>
           <TimelineCard
                title ="Project Kickoff"
                subtitle="Initial Consultation"
                description ="In this crucial first step, we hold a detailed meeting with you to understand your project requirements, business goals, target audience, and any specific functionalities you need. We also discuss the project timeline and budget to ensure that we have a clear understanding of your vision."
                stickColor = "tomato" // Tomato
           />
           <TimelineCard
                title ="Design Phase"
                subtitle="Wireframes & Mockups"
                description ="Our design team creates wireframes that outline the basic structure and layout of your website or application. Once approved, we develop high-fidelity mockups that incorporate your branding, color schemes, and visual elements."
                stickColor = "steelblue" // Steel Blue
           />
           <TimelineCard
                title ="Development Phase"
                subtitle="Coding & Implementation"
                description ="Our skilled developers take the approved designs and transform them into a fully functional website or application. We use the latest technologies to ensure high performance, scalability, and security."
                stickColor = "green" // Lime Green
           />
           <TimelineCard
                title ="Launch & Maintenance"
                subtitle="Deployment & Support"
                description ="The final step involves deploying your website or application to a live server and making it accessible to your users. We offer ongoing support and maintenance services to keep your site or app updated and running efficiently."
                stickColor = "saddlebrown" // Saddle Brown
           />
        </section>
    );
}
