import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Clock, Shield, ArrowRight, MapPin, Home, Building2, CheckCircle2, Stethoscope, Hospital, Group, HandHelping, HeartHandshake, MessageCircleQuestion, Sparkle, ShieldCheck, MonitorDot, PersonStanding} from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Kuruwa",
    template: "%s",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-background">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-[600px] right-20 w-[600px] h-[600px] bg-blue-400/3 rounded-full blur-3xl" />
        <div className="absolute bottom-60 left-1/3 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      {/* Navigation */}
      <nav className="border-b border-blue-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute bg-blue-100 rounded-lg" />
                <Stethoscope className="h-6 w-6 text-blue-700 relative z-10" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">
                Kuruwa
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-blue-700 border-b-2 border-blue-700 pb-1">
                Home
              </Link>
              <Link href="/survey" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                Survey
              </Link>
              <Link href="/report" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
                Report
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-28 md:py-36 relative bg-gradient-to-br from-blue-50/50 to-blue-100/20">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  When You Leave Home,{" "}
                  <span className="text-blue-600">Illness Feels Different</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  For people, far from home and family, illness means more than
                  physical discomfort—it means facing recovery alone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                    <Link href="/survey" className="flex items-center gap-2">
                      View Survey Testimonials
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-2 hover:bg-purple-800">
                    <Link href="/report">See Data Report</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                  <Image 
                    src="/images/img_first.jpg" 
                    alt="Companionship in illness" 
                    width={600} 
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Away From Home */}
      <section className="py-24 bg-blue-50/30">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Life Away <span className="text-blue-600">From Home</span>
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-blue-200 shadow-lg">
                  <Image 
                    src="/images/alone.png" 
                    alt="Life away from home" 
                    width={800} 
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  Every year, tens of thousands of students and young professionals leave their homes across Nepal and move to cities like Kathmandu for studies or work. For many, this is their first experience of living away from family and familiar support systems.
                  <br />
                  <br />
                  While urban migration offers opportunity, it also brings isolation. When people living alone fall sick, get hospitalized, or face medical emergencies, the absence of family support becomes deeply distressing. Emotional reassurance, help navigating hospital processes, or simply having someone by their side during recovery is often missing.
                  <br />
                  <br />
                  This challenge is not limited to Kathmandu or Nepal. Across the world, students, migrant workers, travelers, and individuals living alone face similar struggles. As migration and urbanization increase globally, loneliness during illness has emerged as a growing issue, closely linked to declining mental wellbeing.
                  <br />
                  <br />
                  Despite the scale and human impact of this problem, affordable, reliable, and accessible companionship during vulnerable moments remains largely unaddressed.
                </p>

              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-9">
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-600 rounded-lg inline-block mb-6">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Rent small rooms or share flats with strangers</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-500 rounded-lg inline-block mb-6">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Live in hostels or shared accommodations</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-400 rounded-lg inline-block mb-6">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Navigate fast-paced, competitive city life</p>
                </CardContent>
              </Card>
            </div>  
          </div>
        </div>
      </section>

      {/* Getting Sick When Alone */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-blue-100/20">
        <div className="w-full px-8 lg:px-10">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Getting Sick <span className="text-blue-600">When You're Alone</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <Card className="border-green-100 bg-green-50/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-green-800">Back home, getting sick usually means:</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1 font-bold">✓</span>
                        <span className="text-muted-foreground">Someone brings warm food</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1 font-bold">✓</span>
                        <span className="text-muted-foreground">Someone sits beside you</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1 font-bold">✓</span>
                        <span className="text-muted-foreground">Regular check-ins on recovery</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-100 bg-red-50/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Heart className="h-6 w-6 text-red-600" />
                      <h3 className="text-lg font-semibold text-red-800">Away from home, sickness looks different:</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1 font-bold">✗</span>
                        <span className="text-muted-foreground">Walking alone to hospitals or clinics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1 font-bold">✗</span>
                        <span className="text-muted-foreground">Waiting in long lines without support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1 font-bold">✗</span>
                        <span className="text-muted-foreground">Returning to an empty room after treatment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-600 mt-1 font-bold">✗</span>
                        <span className="text-muted-foreground">Managing anxiety by yourself</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-blue-200 shadow-lg">
                  <Image 
                    src="/images/img_second.jpg" 
                    alt="Loneliness in illness" 
                    width={800} 
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Why Existing Systems Fall Short */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-blue-100/20">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Existing Systems <span className="text-blue-600">Fall Short</span>
              </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Existing solutions focus on treatment or logistics but rarely provide emotional support. Friends may be unavailable, personal care can be costly, and asking strangers feels unsafe. Many people remain isolated during vulnerable moments.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <Hospital className="h-6 w-6 text-blue-700 relative z-10" />
                  <p className="text-lg font-semibold text-blue-600 mb-2">Hospitals</p>
                  <p className="text-muted-foreground">Focus on medical treatment, rarely offering emotional or mental support.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <HeartHandshake className="h-6 w-6 text-blue-700 relative z-10" />
                  <p className="text-lg font-semibold text-blue-600 mb-2">Friends and Roommates</p>
                  <p className="text-muted-foreground">May not always be available during illness or emergencies.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <HandHelping className="h-6 w-6 text-blue-700 relative z-10" />
                  <p className="text-lg font-semibold text-blue-600 mb-2">Hiring personal care</p>
                  <p className="text-muted-foreground">Can be expensive, formal, or feel awkward for short-term needs.</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <MessageCircleQuestion className="h-6 w-6 text-blue-700 relative z-10" />
                  <p className="text-lg font-semibold text-blue-600 mb-2">Asking strangers</p>
                  <p className="text-muted-foreground">Seeking help from unknown people can feel unsafe or uncomfortable.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kuruwa Solution*/}
      <section className="py-24 bg-blue-50/30">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3">
                <Sparkle className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Solution </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-blue-200 shadow-lg">
                  <Image 
                    src="/images/survey.png" 
                    alt="Life away from home" 
                    width={800} 
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <p className="text-muted-foreground leading-relaxed">
                  Our solution, Kuruwa, directly addresses the emotional and practical gaps experienced by people living alone during illness or hospitalization. Kuruwa connects users with verified, trained companions—both physical and virtual—who provide emotional support, assistance with hospital formalities, and practical help, ensuring that no one has to face difficult moments entirely alone.
                  <br />
                  <br />
                  It prioritizes trust and safety: every Kuruwa undergoes a thorough verification process, including ID checks and video-based screening, so users can feel secure while receiving support. Companions are available on-demand, including evenings and nights, making help flexible and responsive to urgent needs.
                  <br />
                  <br />
                  Kuruwa is designed to be accessible and affordable. Virtual companionship allows users to receive emotional and practical support at lower costs, while students and young professionals can also serve as virtual Kuruwas, creating meaningful earning opportunities. This dual impact—supporting users and providing work for companions—tackles both loneliness and unemployment simultaneously.
                  <br />
                  <br />
                  It bridges the gap between those needing care and those providing it, offering a reliable, human-centered solution so no one faces sickness or vulnerability alone.
                </p>

              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-9">
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-600 rounded-lg inline-block mb-6">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Emotional Comfort</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-500 rounded-lg inline-block mb-6">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Human Presence</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-400 rounded-lg inline-block mb-6">
                    <HandHelping className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Practical assistance</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="p-3 bg-blue-400 rounded-lg inline-block mb-6">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium leading-relaxed">Verified Safety</p>
                </CardContent>
              </Card>
            </div>  
          </div>
        </div>
      </section>

      {/* How Kuruwa Works */}
      <section className="py-24">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                How Kuruwa <span className="text-blue-600">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground">Two types of support, both verified and trusted</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-10">
                  <div className="p-3 bg-blue-600 rounded-lg inline-block mb-8">
                    <PersonStanding className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Physical Companionship</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A trained companion visits you for a few hours or stays during hospitalization.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Accompanies you to appointments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Stays during hospital visits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Helps with medicine and meals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-10">
                  <div className="p-3 bg-blue-400 rounded-lg inline-block mb-8">
                    <MonitorDot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Virtual Companionship</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A virtual companion checks in on you via call or text, offering reassurance.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Regular check-ins via call/text</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Emotional support conversations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Reminders and encouragement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Validation & CTA */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Validated through <span className="text-blue-600">Real Research</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This concept is backed by data from Google Forms surveys conducted among 100+ students and young professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">130+</p>
                  <p className="text-sm text-muted-foreground">Survey responses collected</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">87.1%</p>
                  <p className="text-sm text-muted-foreground">Would use companion services</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">78.9%</p>
                  <p className="text-sm text-muted-foreground">Feels lonely, stressed or anxious sick</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-600 border-0 shadow-xl">
              <CardContent className="p-12 text-center space-y-8">
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-3xl mx-auto">
                  Kuruwa isn't just about treating illness — it's about making sure no one faces it alone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-2 hover:bg-purple-800">
                    <Link href="/survey">View Survey Testimonials</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-2 hover:bg-purple-800">
                    <Link href="/report">See Data Report</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-700" />
              <span className="text-sm font-bold text-blue-800">Kuruwa</span>
            </div>
              <p className="text-sm text-muted-foreground text-center">
                Built with care
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}