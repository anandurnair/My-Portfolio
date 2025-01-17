'use client'
import { useRef } from "react";
import { useInView } from "framer-motion";
import Description from "./description";
import Skill from "./skill";
import Projects from "./projects";
import Contacts from "./contact";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function SectionComponent() {
  return (
    <>
       <Section ><Description/></Section>
      <Section><Skill/></Section>
      <Section><Projects/></Section>
      <Section><Contacts/></Section>
      
    </>
  );
}
