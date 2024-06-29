'use client';
import Intro from '../components/intro';
import SectionComponent from '@/components/section';
import AnimatedCursor from "react-animated-cursor";
import { motion, useScroll, useSpring } from "framer-motion";
import React from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-48">
      <motion.div style={{ scaleX }} />
      {/* <AnimatedCursor
        innerSize={14}
        outerSize={8}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 20,
              outerSize: 20,
              color: '255, 255, 255',
              outerAlpha: 0.9,
              innerScale: 0.7,
              outerScale: 4
            }
          }
        ]}
      /> */}
      <Intro />
      <SectionComponent />
    </main>
  );
}
