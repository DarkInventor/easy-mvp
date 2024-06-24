"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqPage() {
    return (
      <Accordion type="single" collapsible className="mb-0 lg:mb-20 sm:mb-2 md:mb-2 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I request a refund after I&apos;ve placed my order, and what&apos;s the process for doing so?</AccordionTrigger>
          <AccordionContent>
            No, once the order is placed you won&apos;t be given any refunds. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How many days we have to wait after placing order?</AccordionTrigger>
          <AccordionContent>
            Once you place the order we immediately start working on building MVP. We work max 15-20 days for you. If MVP is delivered early we end the work.    
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How to communicate after placing the order?</AccordionTrigger>
          <AccordionContent>
            After getting your order, we create a discord channel to communitcate and provide the updates.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  