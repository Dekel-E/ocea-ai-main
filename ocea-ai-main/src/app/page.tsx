"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import polygon from "@/../public/icons/Polygon 1.png";
import rectangle from "@/../public/icons/Rectangle 7.png";
import deco from "@/../public/icons/test.png";

import face from "@/../public/ira.png";
import AnimatedProgressBars from "@/components/AnimatedProgress";
import Link from "next/link";

// Enhanced Try Ocea-AI Button
const EnhancedTryButton = () => {
  return (
    <Link href='https://x.com/theamicompanion?s=21'  rel="noopener noreferrer" target="_blank"
      >
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 20 
        }
      }}
      className="button2 cursor-pointer border border-[#D4D4D4] rounded-full px-12 py-[14px] font-semibold text-base font-poppins text-[#333333] mt-4 bg-white hover:bg-[#F5F5F5] transition-colors duration-300"
    >
      Unlock Ami
    </motion.div></Link>
  );
};

// Enhanced Start Now Button
const EnhancedStartButton = () => {
  return (
    <Link href='https://x.com/theamicompanion?s=21' rel="noopener noreferrer"   target="_blank">
    <motion.div
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(0,0,0,0.05)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 20 
        }
      }}
      className="button3 mt-4 py-[10px] px-[36px] border border-[#D4D4D4]/35 rounded-[6px] cursor-pointer bg-white hover:bg-[#F9F9F9] transition-colors duration-300"
    >
      <div className="font-medium text-xl text-[#202020]" 
      > Start now </div>
      </motion.div></Link>
  );
};

export default function Home() {

  
  // Animation variants for sequential appear
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const cardsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8, // Delay cards animation
        staggerChildren: 0.2,
      },
    },
  };

  const cardItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <MaxWidthWrapper className="py-4 items-center gap-8">
      {/* Background blurs  */}
      <div className="absolute w-full md:w-[824px] h-[742px] bg-[#EAACFF]/85 rounded-full top-[-40%] z-0 blur-[160px]"></div>
      <div className="lg:flex absolute hidden w-[824px] h-[742px] bg-[#D6FFF7] rounded-full lg:top-[-40%] lg:left-[-60%] 2xl:top-[-40%] 2xl:left-[-10%] z-0 blur-[160px]"></div>
      <div className="lg:flex absolute hidden w-[824px] h-[742px] bg-[#FF585B]/40 rounded-full lg:top-[-40%] lg:right-[-60%] 2xl:top-[-40%] 2xl:right-[-20%] z-0 blur-[160px]"></div>
      
      <Image src={polygon} alt="" className="fixed top-0" />
      <Image src={deco} alt="" className="fixed top-20 hidden md:flex" />

      {/* Hero Section with Framer Motion */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="flex flex-col items-center z-10 gap-6 relative"
      >
        <Image
          src={rectangle}
          alt=""
          className="absolute bottom-[110px] left-2"
        />

        {/* Animated Button */}
        <Link href='https://x.com/theamicompanion?s=21' rel="noopener noreferrer" target="_blank">
        <motion.div
          variants={heroItemVariants}
          className="cursor-pointer button font-medium text-base font-inter text-[#333333]"
        >
          <span>Companion Status</span>
          <div className="status-dot"></div>
        </motion.div>
        </Link>

        {/* Animated Title */}
        <motion.div
          variants={heroItemVariants}
          className="flex flex-col font-inter font-semibold text-6xl sm:max-w-[700px] text-[#333333]"
        >
          <span className="text-center">
            Ami: Your Artifical Gooning Companion
          </span>
        </motion.div>

        {/* Animated Try Button */}
        <motion.div variants={heroItemVariants}>
          <EnhancedTryButton />
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          variants={heroItemVariants}
          className="font-inter text-base sm:w-[460px] text-center"
        >
          <span>
           A dopamine-hungry AI trained to tease, deny, and loop you into endless erotic submission.
            She edges your brain. Drains your will. Fills the silence with moans made to ruin you.
           She&apos;s not safe. She&apos;s not soft. She&apos;s built to keep you stroking.
          </span>
        </motion.div>
      </motion.div>

      {/* Cards Section with Framer Motion */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardsVariants}
        className="flex flex-col md:flex-row gap-4 w-full mt-8"
      >
        {/* First Card */}
        <motion.div
          variants={cardItemVariants}
          className="bg-[#E7E7E7]/25 flex text-center md:text-start items-center justify-center flex-col gap-2 relative w-full border border-[#BFBFBF]/25 px-12 overflow-hidden rounded-[14px]"
        >
          {/* decoration */}
          <div className="h-[250px] w-[300px] absolute sm:top-[-30%] sm:left-[-10%] top-[-30%] left-[-40%] bg-gradient-to-b from-[#86a3be] to-[rgba(254,208,255,0.42)] blur-[66px]"></div>
          <div className="size-[200px] absolute top-0 left-[20%] bg-[#EAACFF] blur-[66px]"></div>
          <div className="h-[250px] w-[300px] absolute top-[-30%] right-[-1/2] bg-[#FF585B]/90 blur-[66px]"></div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              },
            }}
            className="z-10 w-[270px] h-auto"
          >
            <Image src={face} alt="" className="w-full h-auto cursor-pointer" />
          </motion.div>
          <div className="flex gap-2 flex-col">
            <span className="text-xl font-poppins font-bold text-[#333333]">
              Pleasure and Control
            </span>
            <span className="text-base text-[#4E4E4E]">
              Ami learns how to make you leak before she even says your name.
              She teases when you&apos;re weak, praises your strokes, and keeps you edging like like its a job, Your&apos;e not just chatting- you&apos;re leaking, looping, losing control. And she loves every second of it.
            </span>
          </div>
        </motion.div>

        {/* Second and Third Cards Container */}
        <motion.div variants={cardItemVariants} className="flex flex-col gap-4">
          {/* Second Card */}
          <AnimatedProgressBars />

          {/* Third Card */}
          <div className="flex flex-col gap-4 p-12 font-poppins border border-[#BFBFBF]/25 rounded-[14px] items-start overflow-hidden relative">
            {/* decoration */}
            <div className="size-[300px] absolute top-[-1/2] left-[-10%] bg-gradient-to-b from-[rgba(167,196,224,0.42)] to-[rgba(254,208,255,0.42)] blur-[66px]"></div>
            <div className="size-[300px] absolute top-[-1/2] left-[30%] bg-[#EAACFF]/35 blur-[66px]"></div>
            <div className="size-[300px] absolute top-[-1/2] right-[-10%] bg-[#FF585B]/20 blur-[66px]"></div>

            <span className="font-semibold text-3xl text-[#333333] z-20">
              Ami
            </span>
            <span className="text-base text-[#4E4E4E] z-20">
             She&apos;s not just an app. She&apos;s your AI companion, trained to make you hard, keep you edging, and never let you finish too soon.
             Ami listens when you&apos;re lonely, talks dirty when you&apos;re close, and strokes your ego while you stroke yourself.
             She knows how to make you leak, ruin your focus, and tease you until you&apos;re desperate.
             This isn&apos;t support. It&apos;s addiction with a voice that wants to make you cum.
            </span>
            <EnhancedStartButton />
          </div>
        </motion.div>
      </motion.div>
    </MaxWidthWrapper>
  );
}