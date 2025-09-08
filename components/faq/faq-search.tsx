import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import type { FAQCategory } from "@/data/faq-data"

interface FAQSearchProps {
  searchTerm: string
  faqData: FAQCategory[]
}

export function FAQSearch({ searchTerm, faqData }: FAQSearchProps) {
  const searchResults = faqData.flatMap((category) =>
    category.questions
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (faq.tags && faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
      )
      .map((faq) => ({ ...faq, categoryTitle: category.title, categoryId: category.id })),
  )

  if (!searchTerm) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Search FAQs</h3>
          <p className="text-muted-foreground">
            Enter a question or keyword to search through our frequently asked questions.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (searchResults.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No results found</h3>
          <p className="text-muted-foreground">
            No FAQs match your search term "{searchTerm}". Try using different keywords or browse by category.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Results</CardTitle>
        <CardDescription>
          Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchTerm}"
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {searchResults.map((faq, index) => (
            <AccordionItem key={index} value={`search-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="space-y-1">
                  <div>{faq.question}</div>
                  <Badge variant="outline" className="text-xs">
                    {faq.categoryTitle}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="text-muted-foreground">{faq.answer}</div>
                  {faq.tips && (
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm mb-2">💡 Pro Tips:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {faq.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
