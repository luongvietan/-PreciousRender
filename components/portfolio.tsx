"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Safari } from "@/components/ui/safari";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { ShineBorder } from "@/components/ui/shine-border";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CompareSlider } from "@/components/ui/compare-slider";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  beforeImage?: string;
  afterImage?: string;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to generate projects
  const generateProjects = () => {
    const categories = ["still", "classic", "creative", "onbody"];
    const baseProjects = [
      {
        title: "Diamond Ring Collection",
        description: "High-resolution still renders for a luxury diamond ring collection.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["3D Rendering", "Lighting", "Texturing"],
      },
      {
        title: "Gold Necklace Turntable",
        description: "360-degree turntable animation for an intricate gold necklace.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Animation", "360 Video", "Gold Material"],
      },
      {
        title: "Gemstone Earring Campaign",
        description: "Cinematic marketing video for a new gemstone earring launch.",
        image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Motion Graphics", "Cinematic", "VFX"],
      },
      {
        title: "On-Model Bracelet View",
        description: "Realistic on-body visualization of a diamond bracelet.",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Compositing", "Model Integration", "Lighting"],
      },
    ];

    const allProjects: Project[] = [];
    let idCounter = 1;

    categories.forEach((cat) => {
      // Generate ~24 projects per category
      for (let i = 0; i < 24; i++) {
        const base = baseProjects[i % baseProjects.length];
        allProjects.push({
          id: idCounter++,
          title: `${base.title} ${i + 1}`,
          category: cat,
          description: base.description,
          image: base.image,
          url: "#",
          technologies: base.technologies,
        });
      }
    });

    return allProjects;
  };

  // Memoize projects to prevent regeneration on every render
  const projects = useState(generateProjects)[0];

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
        staggerChildren: 0.05, // Faster stagger for many items
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleNext = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  const handlePrev = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }, [selectedProject, filteredProjects]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handleNext, handlePrev]);

  return (
    <section
      id="portfolio"
      className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
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
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 w-full max-w-5xl mx-auto mb-8 h-auto p-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white py-3"
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
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(null);
              }}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-50"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-50"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] bg-neutral-900 rounded-lg overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative w-full flex-grow bg-black flex items-center justify-center overflow-hidden" style={{ minHeight: '50vh' }}>
                {selectedProject.beforeImage && selectedProject.afterImage ? (
                  <CompareSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    beforeLabel="CAD"
                    afterLabel="Render"
                    className="h-full w-full"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </div>
              <div className="p-6 bg-neutral-900 text-white shrink-0">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-neutral-400 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group h-full cursor-pointer" onClick={onClick}>
      <ShineBorder
        containerClassName="h-full"
        borderWidth={1}
        shimmerColor="rgba(16, 185, 129, 0.2)"
      >
        <div className="block h-full">
          <Safari url={project.url} className="shadow-lg h-full pointer-events-none">
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
        </div>
      </ShineBorder>
    </motion.div>
  );
}
