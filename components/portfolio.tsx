"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Safari } from "@/components/ui/safari";
import { ShineBorder } from "@/components/ui/shine-border";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
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
  videoUrl?: string;
  type: "image" | "video";
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to generate projects
  const generateProjects = () => {
    const categories = ["still", "classic", "creative", "onbody"];

    const stillImages = [
      { src: "/Still Images/Bright Background/01-Robert-Procop-Ring-White-2-Big.jpg", title: "Robert Procop Ring" },
      { src: "/Still Images/Bright Background/0585-Pics_00000.jpg", title: "Diamond Solitaire" },
      { src: "/Still Images/Bright Background/36-Pics-PL_00005-Large.jpg", title: "Platinum Band" },
      { src: "/Still Images/Bright Background/573-liori_00001.jpg", title: "Liori Diamond Ring" },
      { src: "/Still Images/Bright Background/Autumn-Earrings-01-big.jpg", title: "Autumn Earrings" },
      { src: "/Still Images/Bright Background/Nehadani-Color_00000-big.jpg", title: "Nehadani Color Collection" },
      { src: "/Still Images/Bright Background/bracelet_00012-big.jpg", title: "Diamond Tennis Bracelet" },
      { src: "/Still Images/Dark Background/01-Ring-De-Grisogono-1-big.jpg", title: "De Grisogono Ring" },
      { src: "/Still Images/Dark Background/Bluestone-Ring-BISD0327R02.jpg", title: "Bluestone Ring" },
      { src: "/Still Images/Dark Background/Braslet.jpg", title: "Luxury Bracelet" },
      { src: "/Still Images/Dark Background/Cartier-PARIS-NOUVELLE-VAGUE-BRACELET.jpg", title: "Cartier Paris Bracelet" },
      { src: "/Still Images/Dark Background/Graff-Necklace.jpg", title: "Graff Necklace" },
      { src: "/Still Images/Dark Background/Jewelett-Black-Big-.jpg", title: "Jewelett Black Edition" },
      { src: "/Still Images/Dark Background/Winter-Leaves-Necklace.jpg", title: "Winter Leaves Necklace" },
      { src: "/Still Images/Bright Background/01-Robert-Procop-Ring-White-4-Big.jpg", title: "Robert Procop Ring II" },
      { src: "/Still Images/Bright Background/0585-Pics_00005.jpg", title: "Diamond Solitaire II" },
      { src: "/Still Images/Bright Background/06-R060416__00006.jpg", title: "Elegant Diamond Ring" },
      { src: "/Still Images/Bright Background/36-Pics-PL_00006-Large.jpg", title: "Platinum Band II" },
      { src: "/Still Images/Bright Background/573-liori_00004.jpg", title: "Liori Diamond Ring II" },
      { src: "/Still Images/Bright Background/Autumn-Earrings-02-big.jpg", title: "Autumn Earrings II" },
      { src: "/Still Images/Bright Background/BIDG0555R19_web.jpg", title: "Gold Ring Design" },
      { src: "/Still Images/Bright Background/Nehadani-Color_00001-big.jpg", title: "Nehadani Color II" },
      { src: "/Still Images/Bright Background/bracelet_00013-big.jpg", title: "Diamond Tennis Bracelet II" },
      { src: "/Still Images/Dark Background/01-Ring-De-Grisogono-2-big.jpg", title: "De Grisogono Ring II" },
    ];

    const onBodyImages = [
      { src: "/Still Images/Bright Background/bracelet_00012-big.jpg", title: "Diamond Tennis Bracelet" },
      { src: "/Still Images/Bright Background/bracelet_00013-big.jpg", title: "Diamond Tennis Bracelet II" },
      { src: "/Still Images/Bright Background/bracelet_00014-big.jpg", title: "Diamond Tennis Bracelet III" },
      { src: "/Still Images/Dark Background/Braslet.jpg", title: "Luxury Gold Bracelet" },
      { src: "/Still Images/Dark Background/Cartier-PARIS-NOUVELLE-VAGUE-BRACELET.jpg", title: "Paris Nouvelle Vague" },
    ];

    const classicThumbnails = [
      "/Still Images/Dark Background/01-Ring-De-Grisogono-1-big.jpg",
      "/Still Images/Dark Background/01-Ring-De-Grisogono-2-big.jpg",
      "/Still Images/Dark Background/01-Ring-De-Grisogono-3-big.jpg",
      "/Still Images/Bright Background/01-Robert-Procop-Ring-White-2-Big.jpg",
    ];

    const creativeThumbnails = [
      "/Still Images/Bright Background/Nehadani-Color_00000-big.jpg",
      "/Still Images/Bright Background/Nehadani-Color_00001-big.jpg",
      "/Still Images/Bright Background/Nehadani-Color_00002-big.jpg",
      "/Still Images/Bright Background/Nehadani-Color_00003-big.jpg",
    ];

    const allProjects: Project[] = [];
    let idCounter = 1;

    categories.forEach((cat) => {
      if (cat === "still") {
        stillImages.forEach((img) => {
          allProjects.push({
            id: idCounter++,
            title: img.title,
            category: cat,
            description: "High-resolution photorealistic render showcasing intricate details and material accuracy.",
            image: img.src,
            url: "#",
            technologies: ["3D Rendering", "Ray Tracing", "High Poly"],
            type: "image",
          });
        });
      } else if (cat === "onbody") {
        onBodyImages.forEach((img) => {
          allProjects.push({
            id: idCounter++,
            title: img.title,
            category: cat,
            description: "Realistic visualization of jewelry worn on models to help customers visualize scale and style.",
            image: img.src,
            url: "#",
            technologies: ["Compositing", "Model Integration", "Lighting"],
            type: "image",
          });
        });
      } else if (cat === "classic") {
        classicThumbnails.forEach((src, i) => {
          allProjects.push({
            id: idCounter++,
            title: `Classic Animation ${i + 1}`,
            category: cat,
            description: "Elegant 360-degree rotation showcasing the full geometry of the design.",
            image: src,
            url: "#",
            technologies: ["Animation", "360 Video", "Gold Material"],
            type: "video",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
          });
        });
      } else if (cat === "creative") {
        creativeThumbnails.forEach((src, i) => {
          allProjects.push({
            id: idCounter++,
            title: `Creative Campaign ${i + 1}`,
            category: cat,
            description: "Dynamic motion graphics and cinematic storytelling for brand marketing.",
            image: src,
            url: "#",
            technologies: ["Motion Graphics", "Cinematic", "VFX"],
            type: "video",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
          });
        });
      }
    });

    return allProjects;
  };

  // Memoize projects to prevent regeneration on every render
  const projects = useState(generateProjects)[0];

  const categories = [
    {
      id: "still",
      label: "Still Images",
      description: "High-resolution photorealistic renders that capture every detail of your jewelry pieces.",
    },
    {
      id: "classic",
      label: "Classic Animations",
      description: "Elegant 360-degree rotations and simple movements to showcase the full geometry of your designs.",
    },
    {
      id: "creative",
      label: "Creative Animations",
      description: "Dynamic motion graphics and cinematic storytelling to elevate your brand marketing.",
    },
    {
      id: "onbody",
      label: "On-Body Visuals",
      description: "Realistic visualizations of jewelry worn on models to help customers visualize scale and style.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleNext = useCallback(() => {
    if (!selectedProject) return;
    // Find current project in the full list
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  }, [selectedProject, projects]);

  const handlePrev = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  }, [selectedProject, projects]);

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

        <div className="space-y-20">
          {categories.map((category) => {
            const categoryProjects = projects.filter((p) => p.category === category.id);
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category.id} className="relative">
                <div className="mb-8 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {category.label}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
                    {category.description}
                  </p>
                </div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                >
                  {categoryProjects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                      <ProjectCard
                        project={project}
                        onClick={() => setSelectedProject(project)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-50 hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-50 hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            >
              {selectedProject.type === "video" && selectedProject.videoUrl ? (
                <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : selectedProject.beforeImage && selectedProject.afterImage ? (
                <div className="w-full h-[80vh] bg-neutral-900 rounded-lg overflow-hidden shadow-2xl">
                  <CompareSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    beforeLabel="CAD"
                    afterLabel="Render"
                    className="h-full w-full"
                  />
                </div>
              ) : (
                <div className="relative w-full h-auto max-h-[90vh] flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group h-full cursor-pointer"
      onClick={onClick}
    >
      <ShineBorder
        containerClassName="h-full"
        borderWidth={2}
        shimmerColor="rgba(16, 185, 129, 0.4)"
      >
        <div className="block h-full relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
          {/* Image Container with Gradient Overlay */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />

            {/* Gradient Overlay - appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            {/* Video Play Button */}
            {project.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-2xl backdrop-blur-sm border-2 border-white/20 group-hover:shadow-emerald-500/50 transition-all duration-300"
                >
                  <Play fill="currentColor" className="ml-1" size={24} />
                </motion.div>
              </div>
            )}
          </div>

          {/* Card Info with Glassmorphism */}
          <div className="relative p-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white truncate mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate uppercase tracking-wider font-medium">
              {project.category === "still" ? "Still Image" :
                project.category === "classic" ? "Classic Animation" :
                  project.category === "creative" ? "Creative Animation" :
                    "On-Body Visual"}
            </p>

            {/* Hover indicator */}
            <div className="mt-2 flex items-center gap-1 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium">View Details</span>
              <ChevronRight size={14} className="animate-pulse" />
            </div>
          </div>
        </div>
      </ShineBorder>
    </motion.div>
  );
}
