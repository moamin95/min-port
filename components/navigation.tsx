import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const navItems = [
  { label: "Articles", href: "/articles" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-neutral-900 xl:bg-neutral-50 xl:dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-4">
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            className="font-mono text-sm font-medium text-neutral-900 dark:text-white"
          >
            mo.dev
          </Link>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs text-neutral-900 dark:text-white hover:text-neutral-400 dark:hover:text-neutral-400 transition-colors nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
