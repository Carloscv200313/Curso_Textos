"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full h-auto flex flex-col  bg-transparent items-center justify-center relative overflow-hidden py-10">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    url: "/svgs/angular.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/discord.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/docker-icon.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/flutter.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/gitlab.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/java.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/laravel.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/next-js.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/prisma.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/python.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/react.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/spring.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/unity.svg",
    alter: "Charles Dickens",
  },
  {
    url: "/svgs/vue.svg",
    alter: "Charles Dickens",
  },

];
