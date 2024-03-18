"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion"
import { forwardRef, useRef } from "react";


type TimeLineItem = {
  title?: string,
  subTitle: string,
  orientation: "left" | "right",
}
const timeline_content: TimeLineItem[] = [
  {
    title: "Billions of Years Ago",
    subTitle: "The Universe was created",
    orientation: "left",
  },
  {
    subTitle: "For many years nothing special happened.",
    orientation: "right",
  },
  {
    subTitle: "...not even a single thing!!!",
    orientation: "right",
  },
  {
    title: "April, 1998",
    subTitle: `A special human being was born. Yes, I'm talking about myself. 😉`,
    orientation: "left",
  },
  {
    title: "2014",
    subTitle: `Cleared Madhyamik!!!`,
    orientation: "right",
  },
  {
    title: "2016",
    subTitle: `Cleared Higher Secondary!!!`,
    orientation: "right",
  },
  {
    title: "2020",
    subTitle: `Graduated with BTech degree, in Computer Science & Engineering`,
    orientation: "right",
  },
  {
    title: "2020 - 2024",
    subTitle: `Working as Software Developer at Innoraft since then...`,
    orientation: "left",
  },
];

type TimeLineComponentProp = {
  title?: string,
  subTitle: string,
  scaleX: MotionValue<number>,
}

const TimelineLeftItem = ({ title, subTitle, scaleX }: TimeLineComponentProp) => (
  <div className="flex flex-row-reverse md:contents cursor-pointer">
    <motion.div className="bg-gradient-to-br from-accent to-primary col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto md:mr-[inherit] md:ml-auto shadow-md origin-left md:origin-right" style={{ scaleX: scaleX, scaleY: scaleX }}>
      {title ? <h3 className="font-semibold text-lg mb-1">{title}</h3> : ''}
      <p className="leading-tight ">
        {subTitle}
      </p>
    </motion.div>
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-gradient-to-br from-accent to-primary pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-br from-accent to-primary shadow"></div>
    </div>
  </div>
);

function TimelineRightItem({ title, subTitle, scaleX }: TimeLineComponentProp) {
  return (
    <div className="flex md:contents cursor-pointer">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-gradient-to-br from-accent to-primary pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-br from-accent to-primary shadow"></div>
      </div>
      <motion.div className="bg-gradient-to-br from-accent to-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md origin-left" style={{ scaleX: scaleX, scaleY: scaleX }}>
        {title ? <h3 className="font-semibold text-lg mb-1">{title}</h3> : ''}
        <p className="leading-tight ">
          {subTitle}
        </p>
      </motion.div>
    </div>
  );
}


function Timeline() {

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section className="relative container mx-auto mt-16">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {
          timeline_content.map((data, index) => (
            data.orientation === "left" ?
              <TimelineLeftItem key={index} title={data.title} subTitle={data.subTitle} scaleX={scaleX} /> :
              <TimelineRightItem key={index} title={data.title} subTitle={data.subTitle} scaleX={scaleX} />
          ))
        }
      </div>
    </section>
  );
}


export default Timeline;