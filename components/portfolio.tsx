"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Safari } from "@/components/ui/safari";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { ShineBorder } from "@/components/ui/shine-border";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Diamond Ring Collection",
      category: "still",
      description:
        "High-resolution still renders for a luxury diamond ring collection.",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      url: "#",
      technologies: ["3D Rendering", "Lighting", "Texturing"],
    },
    {
      id: 2,
      title: "Gold Necklace Turntable",
      category: "classic",
      description:
        "360-degree turntable animation for an intricate gold necklace.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      url: "#",
      technologies: ["Animation", "360 Video", "Gold Material"],
    },
    {
      id: 3,
      title: "Gemstone Earring Campaign",
      category: "creative",
      description:
        "Cinematic marketing video for a new gemstone earring launch.",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      url: "#",
      technologies: ["Motion Graphics", "Cinematic", "VFX"],
    },
    {
      id: 4,
      title: "On-Model Bracelet View",
      category: "onbody",
      description:
        "Realistic on-body visualization of a diamond bracelet.",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      url: "#",
      technologies: ["Compositing", "Model Integration", "Lighting"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "still", label: "Still Images" },
    { id: "classic", label: "Classic Animations" },
    { id: "creative", label: "Creative Animations" },
    { id: "onbody", label: "On-Body Visuals" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="portfolio"
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
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Take a look at our recent renders. We've helped jewelry brands of all sizes showcase their collections with stunning 3D visuals.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 w-full max-w-2xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* <div className="text-center mt-12">
          <ShineBorder
            containerClassName="inline-block"
            borderWidth={1}
            shimmerColor="rgba(16, 185, 129, 0.2)"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium transition-colors"
            >
              Discuss Your Project
            </motion.a>
          </ShineBorder>
        </div> */}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group h-full">
      <ShineBorder
        containerClassName="h-full"
        borderWidth={1}
        shimmerColor="rgba(16, 185, 129, 0.2)"
      >
        <a href={project.url} className="block h-full">
          <Safari url={project.url} className="shadow-lg h-full">
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-emerald-500/80 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Safari>
        </a>
      </ShineBorder>
    </motion.div>
  );
}
