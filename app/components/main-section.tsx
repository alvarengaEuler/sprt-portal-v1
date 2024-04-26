"use client";

import { AboutSection } from "./sections/about-section";
import { JobListSection } from "./sections/job-list-section";
import { useEffect } from "react";
import { HeroSectionBasic } from "./sections/hero-section-basic";
import { ContactSection } from "./sections/contact-section";

export function MainSection() {
  const handleClick = (event: any) => {
    const { target } = event;

    if (target.tagName === "BUTTON") {
      // Capture relevant data about the click event
      const clickEventData = {
        element: target.tagName,
        id: target.id,
        class: target.className,
        // Add any other relevant data
        timestamp: new Date().toISOString(),
      };
      // Send click event data to the server
      console.log("button: ", clickEventData);
    }

    // Capture relevant data about the click event
    const clickEventData = {
      element: target.tagName,
      id: target.id,
      class: target.className,
      // Add any other relevant data
      timestamp: new Date().toISOString(),
    };
    // Send click event data to the server
    // console.log(clickEventData);
  };

  const handleScroll = () => {
    // Capture relevant scroll data
    const scrollEventData = {
      scrollTop: window.scrollY,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
      // Add any other relevant data
      timestamp: new Date().toISOString(),
    };
    // Send scroll event data to the server
    // console.log(scrollEventData);
  };

  const trackEvent = async (eventType: string, eventData: any) => {
    try {
      // const response = await fetch('/track-event', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ eventType, eventData }),
      // });
      console.log("Event tracked:", eventType, eventData);
    } catch (error) {
      console.error("Error tracking event:", error);
    }
  };

  useEffect(() => {
    trackEvent("page_load", {
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    });
    // Add event listener to capture click events
    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up event listener
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <HeroSectionBasic />
      <AboutSection />

      <JobListSection />
      <ContactSection />
    </section>
  );
}
