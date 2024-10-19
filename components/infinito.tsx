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
        alter: "angular.svg",
    },
    {
        url: "/svgs/docker-icon.svg",
        alter: "docker-icon.svg",
    },
    {
        url: "/svgs/flutter.svg",
        alter: "flutter.svg",
    },
    {
        url: "/svgs/gitlab.svg",
        alter: "gitlab.svg",
    },
    {
        url: "/svgs/java.svg",
        alter: "java.svg",
    },
    {
        url: "/svgs/laravel.svg",
        alter: "laravel.svg",
    },
    {
        url: "/svgs/next-js.svg",
        alter: "next-js.svg",
    },
    {
        url: "/svgs/prisma.svg",
        alter: "prisma.svg",
    },
    {
        url: "/svgs/python.svg",
        alter: "python.svg",
    },
    {
        url: "/svgs/react.svg",
        alter: "react.svg",
    },
    {
        url: "/svgs/spring.svg",
        alter: "spring.svg",
    },
    {
        url: "/svgs/unity.svg",
        alter: "unity.svg",
    },
    {
        url: "/svgs/vue.svg",
        alter: "vue.svg",
    },

];
