import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ() {
  return (
    <div id="FAQ" className="bg-blue-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Feel free to ask us anything. We are here to help you.
            </p>
          </div>
          <div className="mt-10 w-full py-12">
            <Accordion type="single" collapsible className="w-full text-white justify-center py-3">
              <AccordionItem value="item-1">
                <AccordionTrigger>What&apos;s the scoop on LaunchLeap?</AccordionTrigger>
                <AccordionContent>
                LaunchLeap is like a magician&apos;s wand for digital dreams, letting you whip up your very own Software as a Service (SaaS) quicker than you can say "Abracadabra!" It&apos;s your shortcut to SaaS stardom, with a user-friendly vibe and all the bells and whistles you need to shine.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
