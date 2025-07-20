import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Separator from "@/components/separator";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Blurb from "@/components/blurb";

export default function Portfolio() {
  return (
    <div className="text-neutral-900 dark:text-neutral-50">
      <Navigation />
      <About showBackground={true} />
      <Separator />
      <Blurb />
      <Separator />
      <Experience />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Footer />
    </div>
  );
}
