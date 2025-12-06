"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from "next/link"
import Image from 'next/image';
import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    Menu,
    ExternalLink,
    Code2,
    Cpu,
    Globe,
    LucideIcon,
    Sun,
    Moon,
    Youtube
} from 'lucide-react';
import GeometricBackground from './geometric-background';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LayoutTextFlip } from './ui/layout-text-flip';
import { motion, AnimatePresence } from 'motion/react';

interface Job {
    title: string;
    company: string;
    range: string;
    duties: string[];
    tech: string[];
}

interface Project {
    title: string;
    desc: string;
    tech: string[];
    icon: LucideIcon;
    image?: string;
    video?: string;
    videoWebm?: string;
    githubLink: string;
    websiteLink: string;
}

type Section = 'home' | 'about' | 'experience' | 'projects' | 'contact';

const Port: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<Section>('home');
    const [mounted, setMounted] = useState<boolean>(false);
    const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set());
    const { theme, setTheme } = useTheme();

    const toggleJobExpansion = (index: number) => {
        setExpandedJobs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll effects for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections: Section[] = ['home', 'about', 'experience', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string): void => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const NavLink: React.FC<{ to: Section; label: string; number: string }> = ({ to, label, number }) => (
        <button
            onClick={() => scrollToSection(to)}
            className={`group flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 ${activeSection === to ? 'text-gray-700 dark:text-gray-300' : 'text-neutral-600 dark:text-neutral-400'
                }`}
        >
            <span className="text-xs text-gray-700/50 dark:text-gray-300/50 opacity-0 transition-opacity group-hover:opacity-100">
                {number}
            </span>
            <span className='font-mono'>{label}</span>
        </button>
    );


    const GlassCard = ({ description, tech, idx }: { description: string, tech: string[], idx: number }) => {
        return (
            <div className={`float-anim relative w-full min-w-[300px] md:min-w-[400px] lg:min-w-[500px] mb-4 ${idx % 2 !== 0 ? 'md:-mr-16' : 'md:-ml-16'}`}>
                {/* Glass Container */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                    {/* Subtle white gradient overlay for 'sheen' */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    <div className="relative p-4 md:p-8 flex flex-col gap-5">
                        <p className="text-slate-300 leading-relaxed font-light">
                            {description}
                        </p>
                        {/* <ul className={`flex flex-wrap gap-4 font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-8`}>
                            {tech.map((t: string) => <li key={t}>{t}</li>)}
                        </ul> */}
                    </div>
                </div>

                {/* Reflection effect (bottom) */}
                <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/40 blur-lg rounded-[100%]"></div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#080c18] via-[#0f1729] to-[#080c18] text-neutral-800 dark:text-neutral-200 selection:bg-gray-300 dark:selection:bg-gray-700 selection:text-gray-900 dark:selection:text-gray-100 font-sans transition-colors" suppressHydrationWarning>
            {/* Background Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gray-300/20 dark:bg-gray-800/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gray-200/10 dark:bg-gray-900/5 rounded-full blur-[120px]" />
            </div>

            {/* Glowing Orbs */}
            <div className="fixed top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>

            {/* Navigation */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#0f1729]/90 backdrop-blur-md py-4 border-b border-neutral-200 dark:border-white/5' : 'py-8 bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white z-50"
                    >
                        mo<span className="text-gray-700 dark:text-gray-300">.</span>dev
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink to="about" label="About" number="01" />
                        <NavLink to="experience" label="Experience" number="02" />
                        <NavLink to="projects" label="Projects" number="03" />
                        <NavLink to="contact" label="Contact" number="04" />
                        {/* <button
                            onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="ml-2 p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
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
                        </button> */}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-2 z-50">
                        {/* <button
                            onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors focus:outline-none"
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
                        </button> */}
                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="text-neutral-900 dark:text-white focus:outline-none"
                                    aria-label="Open menu"
                                >
                                    <Menu size={24} />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-full bg-gradient-to-b from-[#0A0909] via-[#09101F] to-[#09101F]"
                            >
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <nav className="flex flex-col items-center justify-center space-y-8 h-full">
                                    {['About', 'Experience', 'Projects', 'Contact'].map((item: string) => (
                                        <button
                                            key={item}
                                            onClick={() => scrollToSection(item.toLowerCase())}
                                            className="text-xl font-extralight font-mono tracking-tight text-white hover:text-gray-300 transition-colors"
                                        >
                                            {item.toLowerCase()}
                                        </button>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Full Width */}
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center pt-20 relative"
            >
                {/* Geometric Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <GeometricBackground opacity="opacity-30 dark:opacity-25" />
                </div>

                <div className="max-w-6xl mx-auto px-6 w-full">
                    <div className="space-y-6 max-w-4xl relative z-10">
                        <span className="text-gray-700 dark:text-gray-300 text-md lg:text-xl tracking-wider animate-fade-in-up font-mono font-medium">
                            HI, MY NAME IS
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
                            Mo Amin.
                            <br />
                            <span className="text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-500 dark:from-neutral-400 dark:via-neutral-500 dark:to-neutral-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                I build digital
                                <br />
                            </span>
                            <LayoutTextFlip
                                words={['solutions.', 'products.', 'experiences.']}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 dark:from-neutral-400 dark:via-neutral-500 dark:to-neutral-400 bg-clip-text"
                            />
                        </h1>

                        <p className="max-w-xl text-neutral-600 dark:text-neutral-400 text-lg md:text-xl leading-relaxed pt-4">
                            I'm a software engineer specializing in building robust and scalable web solutions.
                            {/* This year, I'm focused on expanding my portfolio with accessible, human-centered products. */}
                        </p>
                        <div className="pt-8">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group border border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-sm text-sm tracking-tight font-mono font-medium hover:bg-gray-700/10 dark:hover:bg-gray-300/10 transition-colors flex items-center gap-2"
                            >
                                CHECK OUT MY WORK
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6">
                {/* About Section */}
                <section id="about" className="py-24 md:py-32 relative">
                    <div className="absolute inset-0 pointer-events-none blur-sm">
                        <GeometricBackground opacity="opacity-10 dark:opacity-5" />
                    </div>
                    <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">01.</span>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">About Me</h2>
                        <div className="h-[1px] bg-neutral-300 dark:bg-neutral-600 flex-grow max-w-xs ml-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg lg:text-xl">
                            <p>
                                With over <span className="font-bold">5 years</span>{" "}of experience spanning agile startups and large enterprises, I’ve worked on everything from complex distributed microservices to monolithic SPAs. This diverse background has given me a versatile skill set that adapts to any environment.
                            </p>

                            <p className='text-neutral-900 dark:text-white'>Currently, I'm a <span className="font-bold">Frontend Dev</span> at American Express, migrating legacy applications to a modern Node JS architecture.</p>
                            <p>
                                I also consider myself a creative person, so I channel that energy into photography, content creation, and code.
                            </p>

                            <p>Check out my <Link className="text-black dark:text-white font-bold hover:underline" href="https://www.youtube.com/@moamin.create" target="_blank">youtube channel</Link>!</p>

                            {/* <p>
                                Here are a few technologies I've been working with recently:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-md pt-2 text-bold">
                                {['Next JS', 'React', 'Node.js', 'TanStack', 'Tailwind CSS', 'PostgreSQL'].map((tech: string) => (
                                    <li key={tech} className="flex items-center gap-2 font-mono transition-transform duration-300 hover:scale-110 cursor-pointer hover:font-bold text-neutral-900 dark:text-white">
                                        <span className="text-gray-700 dark:text-gray-300">▹</span> {tech}
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                        <div className="relative group">
                            <div className="relative z-10 w-full aspect-square rounded transition-all duration-300 overflow-hidden">
                                <Image
                                    src="/moavatar.webp"
                                    alt="Mo Amin"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute top-4 left-4 w-full aspect-square border-2 border-gray-700/50 dark:border-gray-300/50 rounded -z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-24 md:py-32 relative">
                    <div className="absolute inset-0 pointer-events-none blur-sm">
                        <GeometricBackground opacity="opacity-10 dark:opacity-5" />
                    </div>
                    <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">02.</span>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Where I've Worked</h2>
                        <div className="h-[1px] bg-neutral-300 dark:bg-neutral-600 flex-grow max-w-xs ml-4"></div>
                    </div>

                    <div className="space-y-12 border-l border-neutral-300 dark:border-neutral-600 ml-3 md:ml-0">
                        {jobs.map((job: Job, idx: number) => (
                            <div key={idx} className="relative pl-8 md:pl-12 group">
                                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-neutral-300 dark:bg-neutral-600 group-hover:bg-gray-700 dark:group-hover:bg-gray-300 transition-colors border border-white dark:border-black"></div>

                                <h3 className="text-xl text-neutral-900 dark:text-white font-medium">
                                    {job.title} <span className="text-gray-700 dark:text-gray-300">@ {job.company}</span>
                                </h3>
                                <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 mt-1 font-mono">{job.range}</p>

                                <ul className="space-y-2">
                                    {/* Mobile: Show first duty always, rest collapsible */}
                                    <li className="flex md:hidden items-start gap-3 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        <span className="text-gray-700 dark:text-gray-300 mt-1.5 text-xs">▹</span>
                                        {job.duties[0]}
                                    </li>

                                    {job.duties.length > 1 && (
                                        <div className="md:hidden">
                                            <AnimatePresence>
                                                {expandedJobs.has(idx) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                    >
                                                        {job.duties.slice(1).map((duty: string, i: number) => (
                                                            <li key={i + 1} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-2">
                                                                <span className="text-gray-700 dark:text-gray-300 mt-1.5 text-xs">▹</span>
                                                                {duty}
                                                            </li>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <button
                                                onClick={() => toggleJobExpansion(idx)}
                                                className="text-gray-700 dark:text-gray-300 text-sm mt-2 transition-transform duration-200"
                                            >
                                                <motion.span
                                                    animate={{ rotate: expandedJobs.has(idx) ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="inline-block"
                                                >
                                                    ↓
                                                </motion.span>
                                                {' '}<span className='hover:underline'>{expandedJobs.has(idx) ? 'Show less' : 'See more'}</span>
                                            </button>
                                        </div>
                                    )}

                                    {/* Desktop: Show all duties */}
                                    {job.duties.map((duty: string, i: number) => (
                                        <li key={i} className="hidden md:flex items-start gap-3 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                                            <span className="text-gray-700 dark:text-gray-300 mt-1.5 text-xs">▹</span>
                                            {duty}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack Badges - Glassmorphism */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {job.tech.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-lg md:text-md font-mono backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-full text-neutral-800 dark:text-neutral-200 shadow-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
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

                {/* Projects Section */}
                <section id="projects" className="py-24 md:py-32 relative">
                    <div className="absolute inset-0 pointer-events-none blur-sm">
                        <GeometricBackground opacity="opacity-10 dark:opacity-5" />
                    </div>
                    <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-gray-700 dark:text-gray-300 text-xl font-semibold">03.</span>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Some Things I've Built</h2>
                        <div className="h-[1px] bg-neutral-300 dark:bg-neutral-600 flex-grow max-w-xs ml-4"></div>
                    </div>

                    <div className="grid gap-24">
                        {projects.map((project: Project, idx: number) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Project Image/Video Area */}
                                <div className="md:w-3/5 relative group cursor-pointer">
                                    <div className="absolute inset-0 mix-blend-multiply rounded z-10 hover:bg-transparent transition-all duration-300"></div>
                                    <div className="w-full aspect-video bg-white dark:bg-[#050505] rounded border border-neutral-300 dark:border-neutral-800 relative overflow-hidden flex items-center justify-center">
                                        {project.video ? (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="absolute inset-0 w-full h-full object-cover"
                                            >
                                                {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
                                                <source src={project.video} type="video/mp4" />
                                            </video>
                                        ) : project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <>
                                                {/* Abstract content for placeholder */}
                                                <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-900">
                                                    <div className="grid grid-cols-6 h-full opacity-20">
                                                        {[...Array(24)].map((_, i: number) => (
                                                            <div key={i} className="border-r border-neutral-400 dark:border-neutral-700"></div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <project.icon size={48} className="text-neutral-500 dark:text-neutral-600 z-0" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className={`md:w-2/5 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'} relative z-20`}>
                                    <span className="text-gray-700 dark:text-gray-300 text-xs mb-2 font-medium">Featured Project</span>
                                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors">{project.title}</h3>

                                    {/* <div className={`bg-[#e8f4f8] dark:bg-[#112240] p-6 rounded text-sm text-neutral-700 dark:text-neutral-300 shadow-xl mb-4 min-w-[300px] ${idx % 2 !== 0 ? 'md:-mr-16 text-left' : 'md:-ml-16 md:text-right'}`}>
                                        {project.desc}
                                    </div> */}

                                    <GlassCard description={project.desc} tech={project.tech} idx={idx} />

                                    <ul className={`flex flex-wrap gap-4 font-mono text-xs text-neutral-600 dark:text-neutral-400 mb-8`}>
                                        {project.tech.map((t: string) => <li key={t}>{t}</li>)}
                                    </ul>


                                    <div className="flex gap-4 text-neutral-700 dark:text-white">
                                        <Link target="_blank" href={project.githubLink}><Github className="w-5 h-5 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors" /></Link>
                                        <Link target="_blank" href={project.websiteLink}><ExternalLink className="w-5 h-5 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More Projects / Archive Link */}
                    {/* <div className="mt-24 text-center">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Other Noteworthy Projects</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((item: number) => (
                                <div key={item} className="bg-neutral-100 dark:bg-[#111] p-6 rounded h-64 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 border border-neutral-300 dark:border-neutral-800 hover:border-gray-700/30 dark:hover:border-gray-300/30 group">
                                    <div className="flex justify-between items-start text-gray-700 dark:text-gray-300">
                                        <div className="text-4xl">📂</div>
                                        <div className="flex gap-2 text-neutral-600 dark:text-neutral-400">
                                            <Github size={18} className="hover:text-gray-700 dark:hover:text-gray-300" />
                                            <ExternalLink size={18} className="hover:text-gray-700 dark:hover:text-gray-300" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-neutral-900 dark:text-white font-bold text-lg group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Project Name</h4>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">A minimal description of this specific project that focuses on the core functionality.</p>
                                    </div>
                                    <div className="flex gap-3 text-xs text-neutral-500 dark:text-neutral-500 mt-4">
                                        <span>React</span>
                                        <span>Express</span>
                                        <span>AWS</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 md:py-48 text-center max-w-2xl mx-auto relative">
                    <div className="absolute inset-0 pointer-events-none blur-sm">
                        <GeometricBackground opacity="opacity-10 dark:opacity-5" />
                    </div>
                    <div className="relative z-10">
                    <span className="text-gray-700 dark:text-gray-300 text-sm mb-4 block font-medium">04. What's Next?</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Get In Touch</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-12">
                        I'm currently looking for any new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a
                        href="mailto:mohamin.nyc@gmail.com"
                        className="inline-block border border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-4 rounded text-sm font-mono font-medium hover:bg-gray-700/10 dark:hover:bg-gray-300/10 transition-colors"
                    >
                        SAY HELLO
                    </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="text-center py-8 text-neutral-500 dark:text-neutral-500 text-xs hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-default">
                <div className="flex justify-center gap-6 xl:hidden mb-4 text-neutral-600 dark:text-neutral-400">
                    <Link target='_blank' href="https://github.com/moamin95"><Github size={20} /></Link>
                    <Link target='_blank' href="https://www.linkedin.com/in/mohammed-amin-13a179215/"><Linkedin size={20} /></Link>
                    <Link target='_blank' href="mailto:mohamin.nyc@gmail.com"><Mail size={20} /></Link>
                    <Link target='_blank' href="https://www.youtube.com/@moamin.create"><Youtube size={20} /></Link>
                </div>
                <p>Designed & Built by Mo Amin</p>
            </footer>

            {/* Social Sidebar */}
            <div className="hidden xl:flex flex-col fixed bottom-0 left-12 space-y-6 text-neutral-600 dark:text-neutral-400 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-neutral-400 dark:after:bg-neutral-400 after:mx-auto after:mt-6">
                <Link href="https://github.com/moamin95"><Github className="w-5 h-5 hover:text-gray-700 dark:hover:text-gray-300 hover:-translate-y-1 transition-all cursor-pointer" /></Link>
                <Link href="https://www.linkedin.com/in/mohammed-amin-13a179215/"><Linkedin className="w-5 h-5 hover:text-gray-700 dark:hover:text-gray-300 hover:-translate-y-1 transition-all cursor-pointer" /></Link>
                <Link href="mailto:mohamin.nyc@gmail.com"><Mail className="w-5 h-5 hover:text-gray-700 dark:hover:text-gray-300 hover:-translate-y-1 transition-all cursor-pointer" /></Link>
                <Link target='_blank' href="https://www.youtube.com/@moamin.create"><Youtube size={20} /></Link>
            </div>

            {/* Email Sidebar */}
            <div className="hidden xl:flex flex-col fixed bottom-0 right-12 space-y-6 text-neutral-600 dark:text-neutral-400 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-neutral-400 dark:after:bg-neutral-400 after:mx-auto after:mt-6">
                <a href="mailto:mohamin.nyc@gmail.com" className="vertical-text text-xs hover:text-gray-700 dark:hover:text-gray-300 hover:-translate-y-1 transition-all">
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

// Data
const jobs: Job[] = [
    {
        title: 'Front End Engineer',
        company: 'American Express',
        range: '2024 - Present',
        duties: [
            'Revamped the banking experience to improve user engagement and retention.',
            'Optimizing front end architecture to improve Core Web Vitals, most notably reducing LCP by 1 second.',
            'Enhancing UX for 36 million monthly active users, spreading across all domestic and international markets',
        ],
        tech: ["Node JS", "React", "TanStack", "GHA"]
    },
    {
        title: 'Software Engineer',
        company: 'CVS Health',
        range: '2022 - 2024',
        duties: [
            'Developed reusable and scalable web components for payment products on the e-commerce website.',
            'Collaborated with B2B partners to integrate secure payment forms, improving payment processing by 25%.',
            'Spearheaded WCAG compliance initiative to reduce 90% of A11y defects across all payments modules.'
        ],
        tech: ["Next JS", "Angular", "GraphQL", "Jenkins"]
    },
    {
        title: 'Web Engineer',
        company: 'Merkle',
        range: '2021 - 2022',
        duties: [
            'Architected single page applications for marketing dashboards, following white label model for reproducibility across 20+ Fortune 500 companies.',
            'Designed and developed an Express.js reverse-proxy server.',
        ],
        tech: ["React", "Express", "MySQL", "AWS"]
    }
];

const projects: Project[] = [
    {
        title: 'trackr',
        desc: 'A comprehensive financial management platform that combines modern design with powerful functionality.',
        tech: ['Next JS', 'React', 'shadcn/ui', 'Recharts', 'TanStack'],
        icon: Code2,
        video: '/trackr.mp4',
        videoWebm: '/trackr.webm',
        image: '/trackr.png',
        githubLink: "https://github.com/moamin95/trackr",
        websiteLink: 'https://trackr-wheat.vercel.app/'
    },
    {
        title: 'Coming Soon...',
        desc: 'Building a media page for my photography and videography portfolio. Tinkering with lazy loading.',
        tech: ['React', 'Styled Components', 'Express', 'Heroku'],
        icon: Code2,
        githubLink: "",
        websiteLink: ''
    }
];

export default Port;