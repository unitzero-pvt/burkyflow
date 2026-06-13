import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({
  items,
  heading = "Frequently asked questions",
  lead,
}: {
  items: FAQItem[];
  heading?: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
        {lead && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
      </div>
      <Accordion type="single" collapsible className="mt-10 flex flex-col gap-4">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
