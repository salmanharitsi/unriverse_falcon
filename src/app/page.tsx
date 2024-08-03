import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export default function Home() {
  const words = ["faster", "knowledge", "different", "modern"];
  const footer = `made by ©unriverse 2024`;
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between p-24 overflow-hidden">
      <div className="h-[40rem] min-w-96 flex flex-col gap-5 justify-center items-start px-4">
        <div className="text-2xl md:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 z-50">
          Build
          <FlipWords words={words} /> <br />
          solve your problems with ease
        </div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <AceternityLogo />
          <span>Start Scan</span>
        </HoverBorderGradient>
      </div>
      <TextGenerateEffect words={footer} />
      <BackgroundBeams />
    </main>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
