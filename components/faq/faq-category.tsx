import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import type { FAQCategory as FAQCategoryType } from "@/data/faq-data"

interface FAQCategoryProps {
  category: FAQCategoryType
}

export function FAQCategory({ category }: FAQCategoryProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "general":
        return "🏥"
      case "diseases":
        return "🦠"
      case "vaccines":
        return "💉"
      case "emergency":
        return "🚨"
      case "app":
        return "📱"
      default:
        return "❓"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">{getCategoryIcon(category.id)}</span>
          {category.title}
          <Badge variant="secondary">{category.questions.length} questions</Badge>
        </CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {category.questions.map((faq, index) => (
            <AccordionItem key={index} value={`${category.id}-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
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
                  {faq.relatedLinks && (
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">🔗 Related Information:</h4>
                      <div className="flex flex-wrap gap-2">
                        {faq.relatedLinks.map((link, linkIndex) => (
                          <Badge key={linkIndex} variant="outline" className="text-xs">
                            {link}
                          </Badge>
                        ))}
                      </div>
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
