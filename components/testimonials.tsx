"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { ShineBorder } from "@/components/ui/shine-border";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface CompanyLogo {
  name: string;
  src?: string;
  lightSrc?: string;
  darkSrc?: string;
  alt: string;
  invertOnDark?: boolean; // Flag to invert colors in dark mode
}

export default function Testimonials() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Đảm bảo component chỉ render ở client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      quote:
        "Precious Render transformed our entire catalog of 2000+ rings. The photorealistic quality exceeded our expectations, and customers can't tell the difference from professional photography. Our online sales increased 45%.",
      name: "Priya Mehta",
      title: "E-commerce Director, Glitz Jewelry Mumbai",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "The turnaround time was incredible-500 SKU renders delivered in just 2 weeks without compromising quality. The team's expertise in jewelry-specific lighting made every diamond sparkle perfectly.",
      name: "Rajesh Sharma",
      title: "Owner, Diamond Palace",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "The Instagram marketing videos they created for our new collection went viral-over 200K views! The cinematic animations captured the luxury feel we wanted and drove massive traffic to our store.",
      name: "Ananya Desai",
      title: "Marketing Manager, Heritage Jewellers",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Their on-body jewelry renders look so natural-customers love seeing how pieces look when worn. This has significantly reduced our return rates and increased buyer confidence for high-ticket items.",
      name: "Neha Kapoor",
      title: "Founder, Luxora Fine Jewelry",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Working with a team that understands both rendering and jewelry manufacturing made all the difference. They knew exactly how to handle complex gem cuts and metal finishes-no back-and-forth explanations needed.",
      name: "Vikram Singh",
      title: "Creative Director, Royal Gems Export",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
  ];

  // Danh sách các logo công ty trusted partners
  const companyLogos = [
    {
      name: "Emerald",
      src: "/images/emerald.png",
      alt: "Emerald logo",
      invertOnDark: false, // Orange logo - looks good on both themes
    },
    {
      name: "Kohira",
      src: "/images/kohira.png",
      alt: "Kohira logo",
      invertOnDark: false, // Pink/coral logo - looks good on both themes
    },
    {
      name: "Limelight",
      src: "/images/limelight.png",
      alt: "Limelight logo",
      invertOnDark: true, // Dark purple text - needs invert on dark theme
    },
    {
      name: "Uare",
      src: "/images/uare.png",
      alt: "Uare logo",
      invertOnDark: true, // Dark gray text - needs invert on dark theme
    },
    {
      name: "Andor",
      src: "/images/andor.png",
      alt: "Andor Luxury logo",
      invertOnDark: true, // Orange/coral logo but dark text - needs invert on dark theme
    },
  ];

  // Hàm lấy URL hình ảnh
  const getLogoSrc = (logo: CompanyLogo): string => {
    return logo.src || "";
  };

  // Hàm lấy class CSS cho logo dựa vào theme
  const getLogoClassName = (logo: CompanyLogo): string => {
    const baseClasses = "object-contain transition-all duration-300";
    
    if (!mounted) {
      return `${baseClasses} opacity-80`;
    }

    // Invert colors for dark logos in dark theme
    if (logo.invertOnDark && theme === "dark") {
      return `${baseClasses} brightness-0 invert opacity-90 hover:opacity-100`;
    }

    return `${baseClasses} opacity-80 hover:opacity-100`;
  };

  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Don&apos;t just take our word for it. Here&apos;s what some of our clients have to say about working with us.
          </p>
        </motion.div>

        <ShineBorder
          containerClassName="w-full overflow-hidden rounded-lg"
          borderWidth={1}
          shimmerColor="rgba(16, 185, 129, 0.2)"
        >
          <div className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 py-4">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </ShineBorder>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-8">
            Trusted by businesses of all sizes
          </p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {companyLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="h-16 md:h-20 w-auto flex items-center justify-center px-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={getLogoSrc(logo)}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className={getLogoClassName(logo)}
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
