import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const form1Fields = [
	{
		name: "organizationName",
		label: "Organization Name",
		value: "Fillet Farms"
	},
	{
		name: "organizationAddress",
		label: "Organization Address",
		value: "123 Main Street, Lagos"
	},
	{
		name: "organizationEmail",
		label: "Organization Email",
		value: "freeborn,.audrey@gmail.com"
	},
	{
		name: "phoneNumber",
		label: "Phone Number",
		value: "+2348012345678"
	}
];

const form2Fields = [
	{
		name: "contactPersonName",
		label: "Contact Person Name",
		value: "Audrey Freeborn"
	},
	{
		name: "contactPersonAddress",
		label: "Contact Person Address",
		value: "123 Main Street, Lagos"
	},
	{
		name: "contactPersonEmail",
		label: "Email address",
		value: "freeborn"
	},
	{
		name: "contactPersonPhoneNumber",
		label: "Contact Person Phone Number",
		value: "+2348012345678"
	}
];

const form3Fields = [
	{
		name: "partnershipMethod",
		label: "Partnership Method",
		value: "Production support"
	},
	{
		name: "budget",
		label: "Budget",
		value: "₦100,000"
	},
	{
		name: "paymentMethod",
		label: "Payment Method",
		value: "Credit card"
	},
	{
		name: "additionalDetails",
		label: "Additional Details",
		value:
			"Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
	}
];

export default function ViewPartnershipRequest() {
	return (
		<main
			className={
				"w-full p-5 lg:px-10 lg:py-20 space-y-10 lg:space-y-20 max-w-2xl mx-auto"
			}
		>
			<div className='space-y-2'>
				<h2 className='font-medium text-3xl lg:text-5xl text-[#2255A0]'>
					View partner application
				</h2>

				<p className='text-foreground/60 lg:text-lg'>
					The partner will evaluate this request based on the information
					provided.
				</p>
			</div>

			<div className='w-full space-y-10'>
				<div className='w-full flex flex-col space-y-5'>
					<h2 className='text-2xl font-semibold'>Business details</h2>

					<Card className='p-5 flex flex-col gap-5'>
						{form1Fields.map(field => (
							<div key={field.name} className='flex flex-col'>
								<label
									className='text-sm text-foreground/60 font-medium'
									htmlFor={field.name}
								>
									{field.label}
								</label>
								<p>{field.value}</p>
							</div>
						))}
					</Card>
				</div>

				<div className='w-full flex flex-col space-y-5'>
					<h2 className='text-2xl font-semibold'>Contact person details</h2>

					<Card className='p-5 flex flex-col gap-5'>
						{form2Fields.map(field => (
							<div key={field.name} className='flex flex-col'>
								<label
									className='text-sm text-foreground/60 font-medium'
									htmlFor={field.name}
								>
									{field.label}
								</label>
								<p>{field.value}</p>
							</div>
						))}
					</Card>
				</div>

				<div className='w-full flex flex-col space-y-5'>
					<h2 className='text-2xl font-semibold'>Partnership details</h2>

					<Card className='p-5 flex flex-col gap-5'>
						{form3Fields.map(field => (
							<div key={field.name} className='flex flex-col'>
								<label
									className='text-sm text-foreground/60 font-medium'
									htmlFor={field.name}
								>
									{field.label}
								</label>
								<p>{field.value}</p>
							</div>
						))}
					</Card>
				</div>

				<Button className='w-full' size='lg'>
					Close Section
				</Button>
			</div>
		</main>
	);
}
