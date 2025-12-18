"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { jobs, photos, type PhotoMetadata, type Job } from "@/lib/data";

// Lazy load heavy components
const PhotoModal = lazy(() => import("@/components/PhotoModal"));
const TechStack = lazy(() => import("@/components/TechStack"));

type Section = "home" | "about" | "experience" | "photography" | "projects" | "contact";

const Port: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mounted, setMounted] = useState<boolean>(false);
  const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set());
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoMetadata | null>(null);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if user has scrolled past contact section
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        // Hide scroll indicator if contact section is in view or past it
        setShowScrollIndicator(rect.top > window.innerHeight);
      }

      // Check if we're at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // Update active section based on scroll position
      const sections: Section[] = [
        "home",
        "about",
        "experience",
        "photography",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen text-neutral-800 dark:text-neutral-200 selection:bg-gray-300 dark:selection:bg-gray-700 selection:text-gray-900 dark:selection:text-gray-100 font-sans transition-colors"
      suppressHydrationWarning
    >

      {/* Glowing Orbs */}
      <div
        className="fixed top-1/4 left-1/4 w-72 h-72 bg-blue-500/50 dark:bg-red-500/20 rounded-full blur-[100px]  -z-10"
      />
      <div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-green-500/45 dark:bg-orange-500/15 rounded-full blur-[100px]  -z-10"
      />

      {/* Bottom Scroll Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-40">
        {showScrollIndicator && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-neutral-600 dark:text-muted-foreground text-sm font-mono tracking-widest animate-bounce">
              SCROLL
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-black/30 backdrop-blur-md py-4 border-b border-white/5"
          : "py-8 bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="group z-50 flex items-center gap-1"
          >
            <span className="font-mono text-sm tracking-widest text-gray-700 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors">MOAMIN</span>
          </button>

          {/* Desktop Nav - Theme Toggle Only */}
          <div className="flex items-center">
            <button
              onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg border border-transparent hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white/5 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
              suppressHydrationWarning
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <Sun size={20} className="text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Left Sidebar Navigation - Desktop Only (1024px+) */}
      {/* <aside className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <nav className="flex flex-col space-y-8">
          <NavLink to="about" label="ABOUT" number="01" />
          <NavLink to="experience" label="EXPERIENCE" number="02" />
          <NavLink to="photography" label="PHOTOGRAPHY" number="03" />
          <NavLink to="contact" label="CONTACT" number="04" />
        </nav>
      </aside> */}

      {/* Hero Section - Full Width */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center pt-32 sm:pt-32 md:pt-20 relative"
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <span className="text-xs md:text-sm lg:text-md font-mono tracking-widest text-gray-600 dark:text-gray-500">
                  PORTFOLIO / 2025
                </span>
                <div className="flex flex-col py-2 lg:py-8">
                  <span className="font-playfair font-extralight tracking-tighter text-5xl md:text-8xl text-neutral-900 dark:text-white">MO AMIN</span>
                  <span className="text-2xl md:text-4xl font-extralight text-gray-700 dark:text-gray-400">
                    FRONTEND ENGINEER
                  </span>
                </div>
              </div>
              <p className="max-w-xl font-extralight tracking-normal text-neutral-700 dark:text-neutral-400 text-lg md:text-xl lg:text-2xl leading-relaxed pt-4">
                I'm a software engineer specializing in building <span className="text-neutral-900 dark:text-foreground">robust</span> and{" "}
                <span className="text-neutral-900 dark:text-foreground">scalable</span> web pages. I also dabble in photography.
                {/* This year, I'm focused on expanding my portfolio with accessible, human-centered products. */}
              </p>
              <div className="pt-8 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                <span className="text-xs md:text-sm lg:text-md font-mono tracking-widest text-gray-600 dark:text-gray-500">AVAILABLE FOR WORK / NEW YORK</span>
              </div>
            </div>

            {/* Image - Right */}
            <div className="relative group border">
              <div className="relative z-10 w-full aspect-square rounded transition-all duration-300 overflow-hidden">
                <Image
                  src="/images/mopic.webp"
                  alt="Mo Amin"
                  fill
                  className="object-cover dark:grayscale hover:filter-none"
                  priority={true} // High priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute top-4 left-4 w-full aspect-square border border-gray-500/70 dark:border-gray-300/50 -z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-24 md:py-32 relative">
          <div className="relative z-10">
            <div className="flex flex-col gap-4 mb-12">
              <div className="space-y-2">
                <div className="text-sm font-mono text-gray-600 dark:text-gray-500">01 - ABOUT</div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-light text-neutral-900 dark:text-white">ABOUT ME</h2>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              {/* Text Content - Top */}
              <div className="space-y-6 font-extralight tracking-normal text-neutral-700 dark:text-neutral-400 text-lg md:text-xl lg:text-2xl leading-relaxed">
                <p>
                  With over <span className="text-neutral-900 dark:text-foreground">5 years</span> of
                  experience, I've
                  worked on everything from complex distributed microservices to
                  monolithic SPAs. This diverse background has given me a
                  versatile skill set that adapts to any environment.
                </p>
                <p>
                  I also consider myself a creative person, so I channel that
                  energy into photography, content creation, and code.
                </p>

                {/* <p>
                  Check out my{" "}
                  <Link
                    className="text-neutral-900 dark:text-white hover:underline"
                    href="https://www.youtube.com/@moamin.create"
                    target="_blank"
                  >
                    youtube channel
                  </Link>
                  !
                </p> */}
              </div>

              <Suspense fallback={<div className="h-20" />}>
                <TechStack />
              </Suspense>

            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 sm:py-32">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="space-y-2">
                <div className="text-sm font-mono text-gray-600 dark:text-gray-500">02 - EXPERIENCE</div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-light text-neutral-900 dark:text-white">SELECTED WORK</h2>
              </div>
              <div className="hidden lg:block text-sm text-muted-foreground font-mono">2021 — 2025</div>
            </div>
            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job: Job, idx: number) => (
                <div key={idx} className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-gray-400/60 dark:border-border/50 hover:border-gray-600 dark:hover:border-border transition-colors duration-500">
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.range}
                    </div>
                  </div>
                  <div className="lg:col-span-6 space-y-3">
                    <div className="leading-6">
                      <h3 className="text-2xl md:text-3xl font-extralight text-foreground">{job.title}</h3>
                      <div className="font-light text-xl md:text-2xl text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground text-lato font-extralight tracking-normal leading-relaxed text-lg md:text-xl lg:text-2xl lg:max-w-xl">
                      {job.duties[0]}
                    </p>
                  </div>
                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" className="py-24 md:py-32 relative">
          <div className="relative z-10">
            <div className="flex flex-col gap-4 mb-12">
              <div className="space-y-2">
                <div className="text-sm font-mono text-gray-600 dark:text-gray-500">03 - PHOTOGRAPHY</div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-light text-neutral-900 dark:text-white">VISUAL STORIES</h2>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-neutral-700 dark:text-neutral-400 text-lg md:text-xl lg:text-2xl font-extralight tracking-normal">
                Capturing moments through my lens — a collection of architecture, nature, and portraits. Currently shooting on a Sony A7III.
              </p>
            </div>

            {/* Bento Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[300px]">
              {/* Large feature image - cathedral */}
              <div
                onClick={() => setSelectedPhoto(photos[0])}
                className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-sm font-mono tracking-widest">{photos[0].category}</span>
                </div>
              </div>

              {/* Cave - tall portrait */}
              <div
                onClick={() => setSelectedPhoto(photos[1])}
                className="col-span-1 row-span-2 relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white text-sm font-mono tracking-widest">{photos[1].category}</span>
                </div>
              </div>

              {/* Orange - medium */}
              <div
                onClick={() => setSelectedPhoto(photos[2])}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-xs font-mono tracking-widest">{photos[2].category}</span>
                </div>
              </div>

              {/* Doggo */}
              <div
                onClick={() => setSelectedPhoto(photos[3])}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={photos[3].src}
                  alt={photos[3].alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-xs font-mono tracking-widest">{photos[3].category}</span>
                </div>
              </div>

              {/* Prity2 - wide */}
              <div
                onClick={() => setSelectedPhoto(photos[4])}
                className="col-span-2 row-span-1 relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={photos[4].src}
                  alt={photos[4].alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-xs font-mono tracking-widest">{photos[4].category}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 md:py-32 relative text-center"
        >
          <div className="relative z-10">
            <div className="flex flex-col gap-4 mb-12">
              <div className="space-y-2">
                <div className="text-sm font-mono text-gray-600 dark:text-gray-500">04 - CONTACT</div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-light text-neutral-900 dark:text-white">GET IN TOUCH</h2>
              </div>
            </div>

            <div className="space-y-6 font-extralight tracking-normal text-neutral-700 dark:text-neutral-400 text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p>
                I'm currently looking for new opportunities and my inbox is
                always open. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>

              <div className="flex sm:flex-row gap-6 sm:gap-8 pt-8 justify-center">
                <Link
                  href="mailto:mohamin.nyc@gmail.com"
                  target="_blank"
                  className="text-sm md:text-lg font-mono text-neutral-900 dark:text-white hover:underline transition-all"
                >
                  Email
                </Link>
                <Link
                  href="https://github.com/moamin95"
                  target="_blank"
                  className="text-sm md:text-lg font-mono text-neutral-900 dark:text-white hover:underline transition-all"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mohammed-amin-13a179215/"
                  target="_blank"
                  className="text-sm md:text-lg font-mono text-neutral-900 dark:text-white hover:underline transition-all"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Photo Modal - Lazy loaded */}
      {selectedPhoto && (
        <Suspense fallback={null}>
          <PhotoModal
            selectedPhoto={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        </Suspense>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-neutral-600 dark:text-neutral-500 text-xs hover:text-neutral-800 dark:hover:text-gray-300 transition-colors cursor-default">
        <p className="pb-20">Designed & Built by Mo Amin</p>
      </footer>

      {/* Email Sidebar */}
      <div className="hidden xl:flex flex-col fixed bottom-0 right-12 space-y-6 text-neutral-700 dark:text-neutral-400 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-neutral-700 dark:after:bg-neutral-400 after:mx-auto after:mt-6">
        <a
          href="mailto:mohamin.nyc@gmail.com"
          className="vertical-text text-xs tracking-wide font-light hover:text-neutral-900 dark:hover:text-gray-300 hover:-translate-y-1 transition-all"
        >
          mohamin.nyc@gmail.com
        </a>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
};

export default Port;
