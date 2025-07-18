import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";
import { BackgroundPattern } from "@/components/LandingPage/background-pattern";

const features = [
  {
    icon: Settings2,
    title: "Effortless Setup",
    description:
      "Just input the role, company type, position, and your details—our tool does the rest.",
  },
  {
    icon: Blocks,
    title: "Tailored Email Structure",
    description:
      "Generates clean, well-formatted cold emails customized to your background and the opportunity.",
  },
  {
    icon: Bot,
    title: "AI-Powered Wording",
    description:
      "Crafts natural, persuasive language that increases your chances of getting noticed.",
  },
  {
    icon: Film,
    title: "Preview & Edit",
    description:
      "Instantly preview your email and make live edits before sending or copying.",
  },
  {
    icon: ChartPie,
    title: "Smart Highlighting",
    description:
      "Automatically emphasizes your top skills and projects relevant to the position.",
  },
  {
    icon: MessageCircle,
    title: "One-Click Copy & Share",
    description:
      "Copy your email in one click or share it directly from the tool to your email platform.",
  },
];

const Features = () => {
  return (
    <>
      <BackgroundPattern />
      <div id="features" className="w-full py-12 xs:py-20 px-6">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Unleash Your Creativity
        </h2>
        <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col bg-background border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
