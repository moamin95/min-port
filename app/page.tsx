import About from "@/components/about";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Separator from "@/components/separator";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Blurb from "@/components/blurb";
import Port from "@/components/port";

export default function Portfolio() {
  return (
    <div className="text-neutral-900 dark:text-neutral-50">
      {/* <Navigation />
      <About showBackground={true} />
      <Separator />
      <Blurb />
      <Separator />
      <Experience />
      <Separator />
      <Contact />
      <Footer /> */}
      <Port/>
    </div>
  );
}
