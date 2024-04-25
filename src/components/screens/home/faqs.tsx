import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const qas = [
	{
		question: "What is Dinerpro agroecosystems?",
		answer:
			"DinerPro is a B2B marketplace that allows meet our partners to build up your agricultural and food business capacity. You need to be sure about the capacity of your vendors and DinerPro agroecosytems allows you to meet pre-vetted partners across the agricultural value chain."
	},
	{
		question: "Pricing and Services",
		answer:
			"We help with vendor discovery, invoicing and relationship management. We charge a monthly subscription fee for our platform access."
	},
	{
		question: "Legal Statement",
		answer:
			"DinerPro is a business software that has integrations to help its users derive the utmost value from the entire business management. Procurement and sales inbounds are categorized as recommendation and processing is at the discretion of the software’s users."
	}
];

export default function FAQs() {
	return (
		<section className='w-full px-5 py-10 space-y-20'>
			<h2 className='font-medium text-3xl lg:text-5xl text-center'>
				Frequently Asked Questions
			</h2>

			<Accordion
				defaultValue='item-0'
				type='single'
				collapsible
				className='w-full'
			>
				{qas.map(({ question, answer }, index) => (
					<AccordionItem
						key={index}
						value={`item-${index}`}
						className={cn(index === qas.length - 1 && "border-none")}
					>
						<AccordionTrigger className='p-5 bg-[#434141] text-white text-lg lg:text-2xl'>
							{question}
						</AccordionTrigger>
						<AccordionContent className='py-10 lg:text-lg'>
							{answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
