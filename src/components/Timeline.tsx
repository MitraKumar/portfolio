"use client";

import { Variants, motion } from "framer-motion";

type TimeLineItem = {
  title?: string;
  subTitle: string;
  orientation: "left" | "right";
};
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
    subTitle: `Working as Software Developer at Innoraft.`,
    orientation: "left",
  },
  {
    title: "2024...",
    subTitle: `Working as Technical Associate at Sundew since then...`,
    orientation: "right",
  },
];

const timelineTextVariants: Variants = {
  hidden: {
    scaleX: 0,
    scaleY: 0,
  },
  visible: {
    scaleX: 1,
    scaleY: 1,
  },
};

type TimeLineComponentProp = {
  title?: string;
  subTitle: string;
};

const TimelineLeftItem = ({ title, subTitle }: TimeLineComponentProp) => (
  <motion.div className="flex cursor-pointer flex-row-reverse md:contents">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={timelineTextVariants}
      className="col-start-1 col-end-5 my-4 mr-auto origin-left rounded-xl bg-gradient-to-br from-accent to-primary p-4 shadow-md md:ml-auto md:mr-[inherit] md:origin-right"
    >
      {title ? (
        <h3 className="mb-1 text-lg font-semibold text-black">{title}</h3>
      ) : (
        ""
      )}
      <p className="leading-tight text-black">{subTitle}</p>
    </motion.div>
    <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
      <div className="flex h-full w-6 items-center justify-center">
        <div className="pointer-events-none h-full w-1 origin-top bg-gradient-to-br from-accent to-primary"></div>
      </div>
      <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-gradient-to-br from-accent to-primary shadow"></div>
    </div>
  </motion.div>
);

function TimelineRightItem({ title, subTitle }: TimeLineComponentProp) {
  return (
    <div className="flex cursor-pointer md:contents">
      <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-gradient-to-br from-accent to-primary"></div>
        </div>
        <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-gradient-to-br from-accent to-primary shadow"></div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={timelineTextVariants}
        className="col-start-6 col-end-10 my-4 mr-auto origin-left rounded-xl bg-gradient-to-br from-accent to-primary p-4 shadow-md"
      >
        {title ? (
          <h3 className="mb-1 text-lg font-semibold text-black">{title}</h3>
        ) : (
          ""
        )}
        <p className="leading-tight text-black">{subTitle}</p>
      </motion.div>
    </div>
  );
}

function Timeline() {
  return (
    <section className="container relative mx-auto mt-16">
      <div className="relative mx-auto flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {timeline_content.map((data, index) =>
          data.orientation === "left" ? (
            <TimelineLeftItem
              key={index}
              title={data.title}
              subTitle={data.subTitle}
            />
          ) : (
            <TimelineRightItem
              key={index}
              title={data.title}
              subTitle={data.subTitle}
            />
          ),
        )}
      </div>
    </section>
  );
}

export default Timeline;
