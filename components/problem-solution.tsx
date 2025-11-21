"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Hourglass, FlaskConical, BarChart3, Layers } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";

export default function ProblemSolution() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Pain Point Section */}
                <div className="mb-20">
                    <div className="max-w-4xl mx-auto">
                        <MagicCard className="p-8 md:p-12 rounded-2xl border-l-4 border-red-500 bg-red-50/50 dark:bg-red-900/10">
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="flex-shrink-0 p-4 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
                                    <Hourglass size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                                        Slow Market Response
                                    </h3>
                                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
                                        Spotted a trending design on Instagram? By the time you manufacture 500 pieces, the trend has moved on.
                                    </p>
                                    <div className="flex items-center text-red-600 dark:text-red-400 font-medium">
                                        <TrendingUp className="mr-2 h-5 w-5 rotate-180" />
                                        Risk: Overproduction of unpopular designs, underproduction of hits
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </div>

                {/* Benefit Section */}
                <div className="mb-24">
                    <div className="max-w-4xl mx-auto">
                        <ShineBorder
                            className="rounded-2xl p-1 bg-white dark:bg-neutral-900"
                            shineColor={["#10b981", "#06b6d4"]}
                        >
                            <div className="p-8 md:p-12 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-xl h-full">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-shrink-0 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400">
                                        <FlaskConical size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                                            Test Before Manufacturing
                                        </h3>
                                        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                                            Launch new collections virtually. Track engagement and pre-orders. Manufacture only winning designs based on real customer interest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ShineBorder>
                    </div>
                </div>

                {/* Virtual Inventory Model */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Virtual Inventory Model</h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Transform your business model with our zero-inventory approach.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Placeholder for Laptop Image */}
                            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center overflow-hidden">
                                <div className="text-center p-6">
                                    <Layers className="w-16 h-16 mx-auto text-emerald-500 mb-4 opacity-50" />
                                    <p className="text-neutral-500 font-medium">Virtual Catalog Display</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-6">
                                {[
                                    "Design 5000+ CAD files",
                                    "Render photorealistic images (₹2.5L)",
                                    "Upload to website/Instagram",
                                    "Customers order specific designs",
                                    "Manufacture confirmed orders only"
                                ].map((step, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">{step}</span>
                                    </div>
                                ))}

                                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl text-white shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <BarChart3 className="w-8 h-8" />
                                        <div>
                                            <h4 className="text-xl font-bold">Result</h4>
                                            <p className="font-medium opacity-90">0% unsold stock, 100% profit margin protection</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors">
                                        Explore Services
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
