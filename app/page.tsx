import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Clock, Shield, ArrowRight, MapPin, Home, Building2, CheckCircle2, Sparkles } from "lucide-react"

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
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg shadow-sm">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-blue-600">Kuruwa</span>
            </div>
            <div className="flex items-center gap-10">
              <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/survey" className="text-sm font-semibold text-muted-foreground hover:text-blue-600 transition-colors">
                Survey
              </Link>
              <Link href="/report" className="text-sm font-semibold text-muted-foreground hover:text-blue-600 transition-colors">
                Report
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-28 md:py-36 relative">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  <Sparkles className="h-4 w-4" />
                  Code for Impact Hackathon 2025
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  When You Leave Home,{" "}
                  <span className="text-blue-600">Illness Feels Different</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  For students and young workers in Kathmandu, far from home and family, illness means more than
                  physical discomfort—it means facing recovery alone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                    <Link href="/survey" className="flex items-center gap-2">
                      View Survey Results
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-2">
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

      {/* Life in Kathmandu */}
      <section className="py-24 bg-blue-50/30">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Life in Kathmandu Away From Home</h2>
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
                <p className="text-lg leading-relaxed">
                  Every year, <strong className="font-semibold text-blue-600">tens of thousands of students</strong> leave
                  their homes across Nepal and move to Kathmandu for studies or work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Colleges, coaching centers, and job opportunities make the capital a magnet for young people from
                  districts across Nepal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For most, this is their <strong className="font-semibold text-gray-900">first time living away from family</strong>.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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

            <div className="p-10 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
                While the city offers opportunity, it also quietly removes something essential — the everyday care we
                take for granted at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Sick When Alone */}
      <section className="py-24">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Getting Sick <span className="text-red-600">When You're Alone</span>
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
                      <h3 className="text-lg font-semibold text-red-800">In Kathmandu, sickness looks different:</h3>
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

            <div className="p-10 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-xl font-semibold text-center text-blue-900 leading-relaxed max-w-3xl mx-auto">
                "The illness is manageable, but being alone makes it mentally much harder."
              </p>
              <p className="text-sm text-muted-foreground text-center mt-4">
                — Survey respondent, Patan Hospital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Problem */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-blue-100/20">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Hidden Problem — <span className="text-blue-600">Mental Stress During Physical Illness</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                For young people living alone in Kathmandu, illness triggers more than physical discomfort
              </p>
            </div>
            
            <Card className="border border-blue-200 bg-white shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="p-4 bg-blue-600 rounded-xl inline-block mb-8">
                  <Heart className="h-12 w-12 text-white" fill="white" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 leading-tight">
                  "Who stays with you when you're sick and away from home?"
                </p>
                <p className="text-lg text-muted-foreground">
                  Kuruwa exists to answer this question.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Existing Systems Fall Short */}
      <section className="py-24">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Existing Systems Fall Short</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Kathmandu has hospitals, clinics, and pharmacies — but{" "}
                <strong className="text-gray-900">no system for emotional care during illness</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <p className="text-lg font-semibold text-blue-600 mb-2">Hospitals</p>
                  <p className="text-muted-foreground">focus on treatment, not companionship</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <p className="text-lg font-semibold text-blue-600 mb-2">Friends and roommates</p>
                  <p className="text-muted-foreground">may not always be available</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <p className="text-lg font-semibold text-blue-600 mb-2">Hiring personal care</p>
                  <p className="text-muted-foreground">feels expensive or awkward</p>
                </CardContent>
              </Card>
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-8">
                  <p className="text-lg font-semibold text-blue-600 mb-2">Asking strangers</p>
                  <p className="text-muted-foreground">for help feels unsafe</p>
                </CardContent>
              </Card>
            </div>

            <div className="p-10 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
                What's missing is a safe, trusted, short-term care presence — someone who is there simply to make the
                situation less lonely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kuruwa Solution */}
      <section className="py-24 bg-blue-50/30">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Kuruwa for Kathmandu</h2>
              <p className="text-xl text-muted-foreground">A Support System for People Living Away From Home</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Card className="border-blue-200">
                  <CardContent className="p-10">
                    <div className="p-3 bg-blue-600 rounded-lg inline-block mb-6">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-xl font-semibold text-blue-900 mb-4">
                      <span className="text-2xl font-bold block mb-2">Kuruwa</span>
                      is designed for students and young working adults living alone in Kathmandu.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      It provides access to <strong className="text-gray-900">verified companions</strong> who can
                      offer emotional support, practical assistance, and human presence during vulnerable moments.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle2, text: "Emotional comfort" },
                    { icon: Users, text: "Human presence" },
                    { icon: Clock, text: "Practical assistance" },
                    { icon: Shield, text: "Verified safety" },
                  ].map((item, i) => (
                    <Card key={i} className="border-blue-100 hover:shadow-sm transition-shadow">
                      <CardContent className="p-4 flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-blue-200 shadow-lg">
                  <Image 
                    src="/images/survey.png" 
                    alt="Support system" 
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

      {/* How Kuruwa Works */}
      <section className="py-24">
        <div className="w-full px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How Kuruwa Works</h2>
              <p className="text-lg text-muted-foreground">Two types of support, both verified and trusted</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-10">
                  <div className="p-3 bg-blue-600 rounded-lg inline-block mb-8">
                    <Users className="h-8 w-8 text-white" />
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
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Virtual Presence</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold">Validated Through Real Research</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This concept is backed by data from young patients at Patan Hospital
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Survey responses collected</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
                  <p className="text-sm text-muted-foreground">Would use companion services</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardContent className="p-8 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">92%</p>
                  <p className="text-sm text-muted-foreground">Feels lonely when sick</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-600 border-0 shadow-xl">
              <CardContent className="p-12 text-center space-y-8">
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-3xl mx-auto">
                  Kuruwa isn't just about treating illness — it's about making sure no one faces it alone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="h-12 px-8">
                    <Link href="/survey">View Survey Testimonials</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 bg-white hover:bg-gray-50">
                    <Link href="/report">See Full Report</Link>
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
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Heart className="h-5 w-5 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold text-blue-600">Kuruwa</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Built with care for Code for Impact Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}