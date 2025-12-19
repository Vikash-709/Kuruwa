"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heart, ArrowLeft, Video, Mic, Quote, Users, MapPin, Calendar, ExternalLink, Stethoscope } from "lucide-react"

export default function SurveyPage() {
  const videos = [
    {
      title: "Tejaswi",
      description: "International student perspective",
      url: "https://drive.google.com/file/d/18Ip_ZXraBEiqxJ5NErbpWVDNL6Q-j-I3/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/18Ip_ZXraBEiqxJ5NErbpWVDNL6Q-j-I3/preview",
    },
    {
      title: "Vikash",
      description: "Local resident experience",
      url: "https://drive.google.com/file/d/1ENUNuYGdbdf9v2f6NULsFRfZSasJNexY/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/1ENUNuYGdbdf9v2f6NULsFRfZSasJNexY/preview",
    },
    {
      title: "Vikash",
      description: "Student's viewpoint",
      url: "https://drive.google.com/file/d/1Ve5_FqDjlf1ke4IrDhSresKsYPogDCjt/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/1Ve5_FqDjlf1ke4IrDhSresKsYPogDCjt/preview",
    },
    {
      title: "Tejaswi",
      description: "Tourist viewpoint",
      url: "https://drive.google.com/file/d/1vz0BIZyVv-zTgDCLxf0tfahOX4bavX0A/view?usp=drive_link",
      embedUrl: "https://drive.google.com/file/d/1vz0BIZyVv-zTgDCLxf0tfahOX4bavX0A/preview",
    },
  ]

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-50/30 to-white">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="border-b border-blue-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute bg-blue-100 rounded-full animate-pulse" />
                <Stethoscope className="h-6 w-6 text-blue-700 relative z-10" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                Kuruwa
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/survey" className="text-sm font-medium text-blue-700 border-b-2 border-blue-700 pb-1">
                Survey
              </Link>
              <Link href="/report" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                Report
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-300">
                Healthcare Field Research
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                Patient Experience Survey
              </h1>
              <p className="text-lg text-gray-600 text-pretty max-w-3xl mx-auto leading-relaxed">
                Real voices from <span className="font-bold text-blue-700">30+ participants</span> at Patan 
                sharing their healthcare experiences and emotional support needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex p-4 bg-blue-100 rounded-2xl">
                    <Users className="h-7 w-7 text-blue-700" />
                  </div>
                  <div className="text-4xl font-bold text-blue-800 mb-2">30+</div>
                  <p className="text-sm font-medium text-gray-600">Patient Participants</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex p-4 bg-blue-100 rounded-2xl">
                    <MapPin className="h-7 w-7 text-blue-700" />
                  </div>
                  <div className="text-4xl font-bold text-blue-800 mb-2">1</div>
                  <p className="text-sm font-medium text-gray-600">Location: Patan Temple</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex p-4 bg-blue-100 rounded-2xl">
                    <Calendar className="h-7 w-7 text-blue-700" />
                  </div>
                  <div className="text-4xl font-bold text-blue-800 mb-2">3</div>
                  <p className="text-sm font-medium text-gray-600">Days of Data Collection</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-20 border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-1">
                <CardHeader className="bg-white py-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Video className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-2xl text-blue-900">Video Testimonials</CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600">
                    Hear directly from general public about their healthcare experiences
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {videos.map((video, idx) => (
                    <div key={idx} className="group">
                      <div className="aspect-video rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-xl relative bg-black">
                        <iframe src={video.embedUrl} className="w-full h-full" allow="autoplay" allowFullScreen />
                      </div>
                      <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-sm mb-1 text-blue-900">{video.title}</h4>
                            <p className="text-xs text-gray-600">{video.description}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            asChild
                            className="flex-shrink-0 h-8 w-8 p-0 hover:bg-blue-100"
                          >
                            <a href={video.url} target="_blank" rel="noopener noreferrer" title="Open in Google Drive">
                              <ExternalLink className="h-4 w-4 text-blue-700" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-20 border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
              <div className="bg-gradient-to-r from-blue-100/50 to-blue-50 p-1">
                <CardHeader className="bg-white py-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mic className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-2xl text-blue-900">Healthcare Interviews</CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600">
                    In-depth conversations about patient experiences and emotional needs
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="p-10">
                <div className="space-y-6">
                  {[
                    {
                      title: "Vikash - US Student Interview",
                      description: "Perspectives on healthcare accessibility for international students",
                      audioFile: "/audio/Vikash_US_guy.m4a",
                    },
                    {
                      title: "Vikash - Community Sisters Interview",
                      description: "Local community perspective on patient care and support",
                      audioFile: "/audio/Vikash_didis.m4a",
                    },
                    {
                      title: "Sujal - Patan Temple Survey",
                      description: "Comprehensive discussion on emotional support during illness",
                      audioFile: "/audio/Sujal_patan_dai.m4a",
                    },
                  ].map((audio, idx) => (
                    <div
                      key={idx}
                      className="group p-6 bg-gradient-to-r from-blue-50 to-blue-100/20 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-md"
                    >
                      <div className="space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                            <Mic className="h-7 w-7 text-blue-700" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-1 text-base text-blue-900">{audio.title}</h4>
                            <p className="text-sm text-gray-600">{audio.description}</p>
                          </div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-3 border border-blue-200">
                          <audio controls className="w-full h-10" preload="metadata" controlsList="nodownload">
                            <source src={audio.audioFile} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-20 border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 py-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Quote className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">Patient Insights</CardTitle>
                </div>
                <CardDescription className="text-base text-gray-600">Powerful quotes from healthcare experiences collected through google forms.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 space-y-6">
                {[
                  {
                    quote:
                      "Its so hard to stay alone when you stay away from home and we miss our home.",
                    author: "International Student, Pune, Age 20",
                  },
                  {
                    quote:
                      "The support is needed if you are new in city and have no idea how things work in following hospital and to assure you that you aren't alone and have a companion to share your worries and your difficulties.",
                    author: "+2 Student, Nepal, Age 17",
                  },
                  {
                    quote:
                      "From my experience, having someone to help with simple things like bringing meals, checking on me, or just talking made a big difference during illness. It reduces stress and helps you recover better. Support doesn’t always have to be big sometimes kindness and presence are enough.",
                    author: "International Student, Pune, Age 21",
                  },
                  {
                    quote:
                      "Many need assistance in order to get better in a hospital like help with food, hygiene, or communicating with doctors, or even something simple like a massage. Depending on what situation the patient is in, they do need to have a choice of hiring a companion/support to help with needs otherwise not doable while being alone. The pricing for a companion should be based on which type of service is provided, for how long, and also the age of the patient.",
                    author: "Currently Working Professional, Nepal, Age 23",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Quote className="h-6 w-6 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base leading-relaxed mb-3 font-medium text-gray-800">
                          "{item.quote}"
                        </p>
                        <p className="text-sm font-semibold text-blue-700">— {item.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="text-center">
              <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-blue-50/70 to-blue-100/30 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent opacity-50" />
                <CardContent className="p-12 relative z-10">
                  <div className="space-y-6">
                    <div className="inline-flex p-3 bg-blue-100 rounded-2xl mb-2">
                      <Stethoscope className="h-8 w-8 text-blue-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Explore Patient Data Analysis</h3>
                    <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                      View comprehensive healthcare statistics and insights from our 130+ patient survey responses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button
                        size="lg"
                        asChild
                        className="text-base bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 shadow-lg shadow-blue-200"
                      >
                        <Link href="/report">View Healthcare Report</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="text-base border-2 border-blue-400 hover:bg-blue-50 bg-white text-blue-700"
                      >
                        <Link href="/">Back to Home</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 bg-white/80 backdrop-blur-sm py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-700" />
              <span className="text-sm font-bold text-blue-800">Kuruwa</span>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Built with care
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}