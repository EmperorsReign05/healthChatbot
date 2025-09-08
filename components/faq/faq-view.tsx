"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import { FAQCategory } from "./faq-category"
import { FAQSearch } from "./faq-search"
import { faqData } from "@/data/faq-data"

export function FAQView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Questions", count: faqData.reduce((sum, cat) => sum + cat.questions.length, 0) },
    { id: "general", label: "General Health", count: faqData.find((c) => c.id === "general")?.questions.length || 0 },
    { id: "diseases", label: "Diseases", count: faqData.find((c) => c.id === "diseases")?.questions.length || 0 },
    { id: "vaccines", label: "Vaccination", count: faqData.find((c) => c.id === "vaccines")?.questions.length || 0 },
    { id: "emergency", label: "Emergency", count: faqData.find((c) => c.id === "emergency")?.questions.length || 0 },
    { id: "app", label: "App Usage", count: faqData.find((c) => c.id === "app")?.questions.length || 0 },
  ]

  const filteredCategories =
    selectedCategory === "all" ? faqData : faqData.filter((category) => category.id === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about health, diseases, vaccination, and using the Swasthya Mitra app.
        </p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search for questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center gap-2"
          >
            {category.label}
            <span className="text-xs bg-muted px-1.5 py-0.5 rounded">{category.count}</span>
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="browse" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse">Browse by Category</TabsTrigger>
          <TabsTrigger value="search">Search Results</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          {filteredCategories.map((category) => (
            <FAQCategory key={category.id} category={category} />
          ))}
        </TabsContent>

        <TabsContent value="search">
          <FAQSearch searchTerm={searchTerm} faqData={faqData} />
        </TabsContent>
      </Tabs>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Still Need Help?
          </CardTitle>
          <CardDescription>Can't find what you're looking for? Get in touch with our support team.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="flex items-center gap-2 h-auto p-4 bg-transparent">
              <MessageCircle className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Live Chat</div>
                <div className="text-xs text-muted-foreground">Get instant help</div>
              </div>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 h-auto p-4 bg-transparent">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Call Support</div>
                <div className="text-xs text-muted-foreground">1800-XXX-XXXX</div>
              </div>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 h-auto p-4 bg-transparent">
              <Mail className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Email Us</div>
                <div className="text-xs text-muted-foreground">support@swasthyamitra.in</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
