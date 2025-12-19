"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heart, ArrowLeft, TrendingUp, Users, CheckCircle2, Loader2, Stethoscope } from "lucide-react"

interface SurveyRow {
  [key: string]: string
}

interface SurveyData {
  headers: string[]
  data: SurveyRow[]
  total: number
}

export default function ReportPage() {
  const [surveyData, setSurveyData] = useState<SurveyData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/survey-data")
        if (!response.ok) throw new Error("")
        const data = await response.json()
        setSurveyData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const countResponses = (questionKey: string, value: string): number => {
    if (!surveyData) return 0
    return surveyData.data.filter((row) => row[questionKey]?.toLowerCase().includes(value.toLowerCase())).length
  }

  const getPercentage = (count: number): number => {
    if (!surveyData || surveyData.total === 0) return 0
    return Math.round((count / surveyData.total) * 100)
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-50/30 to-white">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-20 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-[550px] h-[550px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
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
              <Link href="/survey" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors ">
                Survey
              </Link>
              <Link href="/report" className="text-sm font-medium text-blue-700 border-b-2 border-blue-700 pb-1">
                Report
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Report Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Data Report</h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Comprehensive analysis of {surveyData ? surveyData.total : "130+"} responses collected through Google forms.
              </p>
            </div>

            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-3 text-muted-foreground">Loading survey data...</span>
              </div>
            )}

            {error && (
              <Card className="border-2 border-destructive/20 mb-8">
                <CardContent className="p-6 text-center">
                  <p className="text-destructive">Error: {error}</p>
                  <p className="text-sm text-muted-foreground mt-2">Showing sample data instead.</p>
                </CardContent>
              </Card>
            )}

            {(!loading || error) && (
              <>
                {/* Raw Data Table */}
                {surveyData && (
                  <Card className="mb-8 shadow-lg overflow-hidden">
                    <CardHeader>
                      <CardTitle>Survey Responses</CardTitle>
                      <CardDescription>All {surveyData.total} responses from the survey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-muted">
                            <tr>
                              {surveyData.headers.map((header, i) => (
                                <th key={i} className="p-3 text-left font-semibold border-b">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {surveyData.data.slice(0, 10).map((row, i) => (
                              <tr key={i} className="border-b hover:bg-muted/50">
                                {surveyData.headers.map((header, j) => (
                                  <td key={j} className="p-3">
                                    {row[header]}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {surveyData.data.length > 10 && (
                          <p className="text-sm text-muted-foreground text-center mt-4">
                            Showing first 10 of {surveyData.total} responses
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Key Findings - keeping original with sample data or dynamic if available */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-2 border-primary/20 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-3 inline-flex p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">97.7%</div>
                      <p className="text-sm text-muted-foreground">Believe emotional support aids recovery</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-secondary/20 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-3 inline-flex p-3 bg-secondary/10 rounded-lg">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-4xl font-bold text-secondary mb-2">78.9%</div>
                      <p className="text-sm text-muted-foreground">Experienced loneliness while hospitalized</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-accent/20 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-3 inline-flex p-3 bg-accent/10 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-4xl font-bold text-accent mb-2">87.1%</div>
                      <p className="text-sm text-muted-foreground">Would use Kuruwa service</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Demographics Section */}
                <Card className="mb-8 shadow-lg">
                  <CardHeader>
                    <CardTitle>Age Distribution of Respondents</CardTitle>
                    <CardDescription>Survey participants across different age groups (N=132)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our survey captured a diverse age range of respondents, providing comprehensive insights across
                        different life stages:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-16 h-16 rounded-lg bg-chart-1/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-chart-1">16</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Ages 13-17</h4>
                            <p className="text-sm text-muted-foreground">
                              Young students and adolescents.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-16 h-16 rounded-lg bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-chart-2">69</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Ages 18-19</h4>
                            <p className="text-sm text-muted-foreground">
                              College students and young adults, representing the largest demographic segment
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-16 h-16 rounded-lg bg-chart-3/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-chart-3">22</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Ages 20-25</h4>
                            <p className="text-sm text-muted-foreground">
                              Working professionals and early-career individuals
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-16 h-16 rounded-lg bg-chart-4/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold text-chart-4">9</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Ages 25+</h4>
                            <p className="text-sm text-muted-foreground">
                              Mid-career professionals with family responsibilities
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Importance & Concerns Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Importance of Emotional Support</CardTitle>
                      <CardDescription>
                        "Having someone by your side during hospitalization improves recovery"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Respondents overwhelmingly agreed that emotional support plays a critical role in recovery:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-chart-2/10 rounded-lg">
                            <span className="font-medium">Agree</span>
                            <span className="text-lg font-bold text-chart-2">62.1%</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-chart-3/10 rounded-lg">
                            <span className="font-medium">Neutral</span>
                            <span className="text-lg font-bold text-chart-3">35.6%</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-chart-4/10 rounded-lg">
                            <span className="font-medium">Disagree</span>
                            <span className="text-lg font-bold text-chart-4">2.3%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Primary Concerns During Illness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Multiple overlapping concerns emerged as critical factors affecting hospital experience:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div
                              className="flex-1 bg-chart-2/20 h-10 rounded-lg flex items-center px-4"
                              style={{ width: "100%" }}
                            >
                              <span className="text-sm font-medium">Difficulty in managing personal needs (food, hygiene)</span>
                            </div>
                            <span className="text-lg font-bold text-chart-2 w-12 text-right">34.2%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className="flex-1 bg-chart-2/20 h-10 rounded-lg flex items-center px-4"
                              style={{ width: "91.7%" }}
                            >
                              <span className="text-sm font-medium">Difficulty in communicating with hospital staff</span>
                            </div>
                            <span className="text-lg font-bold text-chart-2 w-12 text-right">10.5%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className="flex-1 bg-chart-2/20 h-10 rounded-lg flex items-center px-4"
                              style={{ width: "84.7%" }}
                            >
                              <span className="text-sm font-medium">Emotional stress / fear</span>
                            </div>
                            <span className="text-lg font-bold text-chart-2 w-12 text-right">25%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className="flex-1 bg-chart-2/20 h-10 rounded-lg flex items-center px-4"
                              style={{ width: "76.5%" }}
                            >
                              <span className="text-sm font-medium">Wasn't alone</span>
                            </div>
                            <span className="text-lg font-bold text-chart-2 w-12 text-right">46.1%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className="flex-1 bg-chart-2/20 h-10 rounded-lg flex items-center px-4"
                              style={{ width: "68.2%" }}
                            >
                              <span className="text-sm font-medium">Never admitted</span>
                            </div>
                            <span className="text-lg font-bold text-chart-2 w-12 text-right">1.3%</span>
                          </div>
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Insights */}
                <Card className="mb-8 shadow-lg">
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                    <CardDescription>What we learned from the survey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Universal Need for Companionship</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Across all age groups and demographics, respondents emphasized that having someone present
                          during hospitalization significantly reduces anxiety and accelerates recovery.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-secondary font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">International Students Most Vulnerable</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          International visitors and students expressed the highest levels of anxiety about potential
                          hospitalization, citing distance from family as their primary concern.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Evening Hours Critical</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Respondents noted that they might use the service when feeling unsafe while staying alone or walking home after discharge, especially during night hours, highlighting the need for reliable and flexible companion support.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-4/10 flex items-center justify-center">
                        <span className="text-chart-4 font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Strong Interest in Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          87.1% of respondents indicated they would use or recommend a service like Kuruwa.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Methodology */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Survey Methodology</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Location & Participants</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A total of 160+ responses were collected through a combination of physical and digital surveys. Over 30 participants were interviewed in person at Patan Temple, representing various age groups and nationalities, while 130+ responses were gathered digitally via Google Forms from friends, colleagues, and seniors.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Collection</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The survey used a mixed-methods approach: structured questionnaires provided quantitative insights, and short video/audio interactions during physical surveys captured qualitative perspectives.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Time Period</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Data collection took place over three days to ensure diverse participant demographics and authentic responses.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="mt-12 text-center">
                  <Card className="border-2 border-primary/20 bg-primary/5 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-3">Learn More About Our Solution</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Discover how Kuruwa addresses these findings with a practical, compassionate solution
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                          <Link href="/">Back to Home</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link href="/survey">View Testimonials</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-700" />
              <span className="text-sm font-bold text-blue-800">Kuruwa</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Built with care
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
