import { ExternalLink } from "lucide-react";
import Typewriter from "@/components/typewriter";
import Image from "next/image";
import GeometricBackground from "@/components/geometric-background";

interface AboutProps {
  showBackground?: boolean;
}

export default function About({ showBackground = true }: AboutProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden first-section-container"
    >
      {showBackground && <GeometricBackground />}
      <div className="relative w-full z-10 max-w-4xl mx-auto">
        <div>
          <div className="flex flex-col items-start gap-8">
            {/* Avatar */}
            <div className="relative w-24 h-24 mb-2">
              <Image
                src="/moavatar.webp"
                alt="Mo Amin"
                fill
                className="rounded-full object-cover border-2 dark:border-neutral-600"
                priority
              />
            </div>
            {/* Content */}
            <div className="flex flex-col items-start gap-8 xl:gap-12 w-full">
              <div className="w-full">
                <h1 className="heading-primary text-nowrap">Mohammed Amin</h1>
                <h3 className="typewriter-text">
                  <Typewriter
                    words={[
                      "Tech Enthusiast",
                      "Amateur Photographer",
                      "Software Engineer",
                    ]}
                    className="w-full"
                  />
                </h3>
              </div>
              <p className="max-w-xl text-muted">
                I build robust and scalable web solutions. Let&apos;s connect and
                create something 🚀
              </p>
              {/* Social Links */}
              <div className="flex items-center justify-start space-x-6 w-full pointer-events-auto">
                <a
                  href="https://www.linkedin.com/in/mohammed-amin-13a179215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors uppercase nav-link flex items-center"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a
                  href="https://github.com/moamin95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors uppercase nav-link flex items-center"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <a
                  href="https://www.youtube.com/@moamin.create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors uppercase nav-link flex items-center"
                >
                  Youtube
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
