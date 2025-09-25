import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQContainer = ({ faqData }) => {
    console.log(faqData.faqs);
    return (
        <Accordion className='space-y-4' type="single" collapsible defaultValue='faq-1'>
            {
                faqData.faqs.map(faq => {
                    return (
                        <AccordionItem key={faq.id} value={faq.id} className='border rounded-2xl last:border' >
                            <AccordionTrigger
                                className={`cursor-pointer hover:no-underline focus:no-underline underline-none
                                    p-6 text-gray-800 font-semibold text-base
                                    `}
                            >
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent
                                className={`text-gray-600 font-normal text-sm pb-6 px-16`}
                            >
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    );
};

export default FAQContainer;