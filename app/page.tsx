import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-mono text-sm font-medium uppercase">alex.dev</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm hover:text-neutral-600 transition-colors uppercase">
                About
              </a>
              <a href="#experience" className="text-sm hover:text-neutral-600 transition-colors uppercase">
                Experience
              </a>
              <a href="#projects" className="text-sm hover:text-neutral-600 transition-colors uppercase">
                Projects
              </a>
              <a href="#contact" className="text-sm hover:text-neutral-600 transition-colors uppercase">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-7xl lg:text-9xl font-light tracking-tight uppercase text-left">ALEX</h1>
            <p className="text-lg text-neutral-600">
              FULL-STACK DEVELOPER CRAFTING DIGITAL EXPERIENCES WITH PRECISION AND CREATIVITY
            </p>

            <div className="space-y-6">
              <p className="text-sm text-neutral-700 leading-relaxed max-w-lg">
                I specialize in building modern web applications using React, Next.js, and Node.js. With 5+ years of
                experience, I focus on creating scalable solutions that bridge the gap between design and functionality.
              </p>

              <div className="flex items-center space-x-4">
                <Button variant="default" className="bg-neutral-900 hover:bg-neutral-800 uppercase">
                  <Mail className="w-4 h-4 mr-2" />
                  GET IN TOUCH
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects" className="uppercase">
                    View work
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold tracking-tight uppercase text-right">CHEN</h1>
          </div>
        </div>

        {/* Reduced size image placeholder, positioned at bottom right of the section */}
        <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl transform translate-x-1/4 translate-y-1/4 lg:translate-x-1/2 lg:translate-y-1/2"></div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-light tracking-tight uppercase">Experience</h2>
              <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
                A journey through various roles and companies, building expertise in modern web development
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium uppercase">Senior Frontend Developer</CardTitle>
                      <CardDescription className="text-sm mt-1">TECHCORP INC.</CardDescription>
                    </div>
                    <div className="text-right text-sm text-neutral-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2022 - PRESENT
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        SAN FRANCISCO, CA
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700 mb-4">
                    Led the development of a customer-facing dashboard serving 10k+ users. Implemented modern React
                    patterns and improved application performance by 40%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">REACT</Badge>
                    <Badge variant="secondary">TYPESCRIPT</Badge>
                    <Badge variant="secondary">NEXT.JS</Badge>
                    <Badge variant="secondary">TAILWIND CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium uppercase">Full-stack Developer</CardTitle>
                      <CardDescription className="text-sm mt-1">STARTUPXYZ</CardDescription>
                    </div>
                    <div className="text-right text-sm text-neutral-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2020 - 2022
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        REMOTE
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700 mb-4">
                    Built and maintained multiple web applications from concept to deployment. Collaborated with design
                    team to create pixel-perfect user interfaces.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">VUE.JS</Badge>
                    <Badge variant="secondary">NODE.JS</Badge>
                    <Badge variant="secondary">POSTGRESQL</Badge>
                    <Badge variant="secondary">AWS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium uppercase">Frontend Developer</CardTitle>
                      <CardDescription className="text-sm mt-1">DIGITAL AGENCY CO.</CardDescription>
                    </div>
                    <div className="text-right text-sm text-neutral-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2019 - 2020
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        NEW YORK, NY
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-700 mb-4">
                    Developed responsive websites and web applications for various clients. Focused on performance
                    optimization and cross-browser compatibility.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JAVASCRIPT</Badge>
                    <Badge variant="secondary">REACT</Badge>
                    <Badge variant="secondary">SCSS</Badge>
                    <Badge variant="secondary">WORDPRESS</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-light tracking-tight uppercase">Selected Projects</h2>
              <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
                A collection of recent work showcasing different technologies and approaches
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium uppercase">E-commerce Platform</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    FULL-STACK E-COMMERCE SOLUTION WITH PAYMENT INTEGRATION AND ADMIN DASHBOARD
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs uppercase">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs uppercase">
                      Stripe
                    </Badge>
                    <Badge variant="outline" className="text-xs uppercase">
                      Prisma
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium uppercase">Task Management App</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    COLLABORATIVE PROJECT MANAGEMENT TOOL WITH REAL-TIME UPDATES AND TEAM FEATURES
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs uppercase">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs uppercase">
                      Socket.io
                    </Badge>
                    <Badge variant="outline" className="text-xs uppercase">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium uppercase">Analytics Dashboard</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    DATA VISUALIZATION PLATFORM WITH INTERACTIVE CHARTS AND REAL-TIME METRICS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs uppercase">
                      Vue.js
                    </Badge>
                    <Badge variant="outline" className="text-xs uppercase">
                      D3.js
                    </Badge>
                    <Badge variant="outline" className="text-xs uppercase">
                      Node.js
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-light tracking-tight uppercase">Let's work together</h2>
              <p className="text-sm text-neutral-300 max-w-2xl mx-auto">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                discuss a project.
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent uppercase"
              >
                <Mail className="w-4 h-4 mr-2" />
                alex@example.com
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent uppercase"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center text-sm text-neutral-400">
            <div className="uppercase">© 2024 Alex Chen. All rights reserved.</div>
            <div className="font-mono uppercase">Designed & built with care</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
