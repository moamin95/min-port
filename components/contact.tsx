"use client"
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container text-neutral-900 dark:text-white"
    >
      <div className="text-center">
        <div className="space-y-8">
          <div className="space-y-4 text-left">
            <h1 className="heading-primary">
              Let&apos;s work together
            </h1>
            <p className="text-muted">
              I&apos;m always interested in new opportunities and collaborations.
              Feel free to reach out if you&apos;d like to discuss a project.
            </p>
          </div>

          <div className="flex justify-start space-x-6">
            <a
              href="mailto:mohamin.nyc@gmail.com"
              className="inline-flex items-center justify-center h-10 px-4 py-2 border-neutral-900 dark:border-white border-[0.5px] text-neutral-900 dark:text-white hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-800 bg-transparent uppercase rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}