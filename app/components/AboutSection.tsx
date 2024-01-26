"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Angular.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "educationn",
    content: (
      <ul>
        <li>UBC</li>
        <li>University of Guelph</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>UBC</li>
        <li>University of Guelph</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>AQI</li>
        <li>Northview Pet Hospital</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="text-black">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/small-headshot.png"
            alt="headshot"
            width={300}
            height={300}
          />
          <div className="mt-4 md:mt-9 text-left flex flex-col h-full justify-start ">
            <h2 className="text-2xl font-bold text-black mb-4">About Me</h2>
            <p className="text-base md:text-md">
              Lorem Ipsum is the single greatest threat. We are not - we are not
              keeping up with other websites. Lorem Ipsum best not make any more
              threats to your website. It will be met with fire and fury like
              the world has never seen. Does everybody know that pig named Lorem
              Ipsum? An ‘extremely credible source’ has called my office and
              told me that Barack Obama’s placeholder text is a fraud.
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((i) => i.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
