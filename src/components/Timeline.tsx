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
    subTitle: "A special human being was born. Yes, I'm talking about myself. 😉",
    orientation: "left",
  },
  {
    title: "2014",
    subTitle: "Cleared Madhyamik (10th grade) Board Exams!",
    orientation: "right",
  },
  {
    title: "2016",
    subTitle: "Cleared Higher Secondary (12th grade) Board Exams!",
    orientation: "right",
  },
  {
    title: "2020",
    subTitle: "Graduated with a B.Tech degree in Computer Science & Engineering.",
    orientation: "right",
  },
  {
    title: "2020 - 2024",
    subTitle: "Worked as a Software Developer at Innoraft, building backend applications.",
    orientation: "left",
  },
  {
    title: "2024...",
    subTitle: "Working as a Technical Associate at Sundew, designing enterprise solution architectures.",
    orientation: "right",
  },
];

const timelineTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

type TimeLineComponentProp = {
  title?: string;
  subTitle: string;
};

const TimelineLeftItem = ({ title, subTitle }: TimeLineComponentProp) => (
  <motion.div className="flex cursor-default flex-row-reverse md:contents select-none">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={timelineTextVariants}
      className="col-start-1 col-end-5 my-4 mr-auto md:ml-auto md:mr-0 rounded-xl glass-card p-6 border border-white/[0.06] shadow-xl w-full max-w-md"
    >
      {title && (
        <h3 className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          {title}
        </h3>
      )}
      <p className="leading-relaxed text-sm md:text-base text-muted-foreground">{subTitle}</p>
    </motion.div>
    
    <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
      <div className="flex h-full w-6 items-center justify-center">
        <div className="pointer-events-none h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-25"></div>
      </div>
      <div className="absolute top-1/2 -mt-2 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_10px_rgba(255,90,54,0.5)]"></div>
    </div>
  </motion.div>
);

function TimelineRightItem({ title, subTitle }: TimeLineComponentProp) {
  return (
    <motion.div className="flex cursor-default md:contents select-none">
      <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-25"></div>
        </div>
        <div className="absolute top-1/2 -mt-2 h-4 w-4 rounded-full bg-gradient-to-br from-accent to-secondary shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={timelineTextVariants}
        className="col-start-6 col-end-10 my-4 mr-auto rounded-xl glass-card p-6 border border-white/[0.06] shadow-xl w-full max-w-md"
      >
        {title && (
          <h3 className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
            {title}
          </h3>
        )}
        <p className="leading-relaxed text-sm md:text-base text-muted-foreground">{subTitle}</p>
      </motion.div>
    </motion.div>
  );
}

function Timeline() {
  return (
    <div className="relative mx-auto flex grid-cols-9 flex-col p-2 md:grid max-w-4xl">
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
  );
}

export default Timeline;
