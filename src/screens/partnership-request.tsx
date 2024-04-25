/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ExtendedFields, {
	FormFieldMetadata
} from "@/components/ui/extended-form-fields";
import { Form } from "@/components/ui/form";
import Stepper from "@/components/ui/stepper";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const steps = [
	"Business details",
	"Contact person details",
	"Partnership details",
	"Review"
];

const form1Fields: FormFieldMetadata[] = [
	{
		name: "organizationName",
		placeholder: "Organization Name",
		label: "Organization Name",
		type: "text"
	},
	{
		name: "organizationAddress",
		placeholder: "Organization Address",
		label: "Organization Address",
		type: "text"
	},
	{
		name: "organizationEmail",
		placeholder: "Organization Email",
		label: "Organization Email",
		type: "email"
	},
	{
		name: "phoneNumber",
		placeholder: "Phone Number",
		label: "Phone Number",
		type: "text"
	}
];

const form2Fields: FormFieldMetadata[] = [
	{
		name: "contactPersonName",
		placeholder: "Contact Person Name",
		label: "Contact Person Name",
		type: "text"
	},
	{
		name: "contactPersonAddress",
		placeholder: "Contact Person Address",
		label: "Contact Person Address",
		type: "text"
	},
	{
		name: "contactPersonEmail",
		placeholder: "Contact Person Email",
		label: "Email address",
		type: "email"
	},
	{
		name: "contactPersonPhoneNumber",
		placeholder: "Contact Person Phone Number",
		label: "Contact Person Phone Number",
		type: "text"
	}
];

const form3Fields: FormFieldMetadata[] = [
	{
		name: "partnershipMethod",
		placeholder: "Partnership Method",
		label: "Partnership Method",
		type: "select",
		options: [
			{ label: "Partnership Method 1", value: "partnership_method_1" },
			{ label: "Partnership Method 2", value: "partnership_method_2" },
			{ label: "Partnership Method 3", value: "partnership_method_3" },
			{ label: "Partnership Method 4", value: "partnership_method_4" },
			{ label: "Partnership Method 5", value: "partnership_method_5" }
		]
	},
	{
		name: "budget",
		placeholder: "Budget",
		label: "Budget",
		type: "text"
	},
	{
		name: "paymentMethod",
		placeholder: "Payment Method",
		label: "Payment Method",
		type: "select",
		options: [
			{ label: "Payment Method 1", value: "payment_method_1" },
			{ label: "Payment Method 2", value: "payment_method_2" },
			{ label: "Payment Method 3", value: "payment_method_3" },
			{ label: "Payment Method 4", value: "payment_method_4" },
			{ label: "Payment Method 5", value: "payment_method_5" }
		]
	},
	{
		name: "additionalDetails",
		placeholder: "Additional Details",
		label: "Additional Details",
		type: "textarea"
	}
];

const formSchema = z.object({
	organizationName: z.string().min(1),
	organizationAddress: z.string().min(1),
	organizationEmail: z.string().email(),
	phoneNumber: z.string().min(1),
	contactPersonName: z.string().min(1),
	contactPersonAddress: z.string().min(1),
	contactPersonEmail: z.string().email(),
	contactPersonPhoneNumber: z.string().min(1),
	partnershipMethod: z.string().min(1),
	budget: z.string().min(1),
	paymentMethod: z.string().min(1),
	additionalDetails: z.string().min(1)
});

const defaultValues = {
	organizationName: "",
	organizationAddress: "",
	organizationEmail: "",
	phoneNumber: "",
	contactPersonName: "",
	contactPersonAddress: "",
	contactPersonEmail: "",
	contactPersonPhoneNumber: "",
	partnershipMethod: "",
	budget: "",
	paymentMethod: "",
	additionalDetails: ""
};

type FormSchema = z.infer<typeof formSchema>;

export default function PartnershipRequest() {
	const navigate = useNavigate();
	const [activeStep, setActiveStep] = React.useState(0);
	const [submitted, setSubmitted] = React.useState(false);

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues
	});

	function handleNext() {
		setActiveStep(prev => prev + 1);
	}

	function handleBack() {
		setActiveStep(prev => prev - 1);
	}

	// 2. Define a submit handler.
	function onSubmit(values: FormSchema) {
		console.log(values);
		setSubmitted(true);
	}

	return (
		<main
			className={cn(
				"w-full p-5 lg:px-10 lg:py-20 space-y-10 lg:space-y-20",
				submitted ? "!p-0" : ""
			)}
		>
			{submitted ? (
				<section className='p-5 md:p-10 lg:p-32 bg-blue-700 bg-[url(/images/request-successful-bg.jpeg)] bg-center bg-cover'>
					<Card className='p-5 bg-white md:px-10 md:py-20 space-y-5 max-w-2xl'>
						<div className='flex items-center space-x-3'>
							<RiCheckboxCircleFill className='text-primary text-3xl' />
							<h2 className='text-xl font-semibold lg:text-3xl'>
								Request sent
							</h2>
						</div>

						<p className='text-foreground/60'>
							The partner will look at your request, and let you know their
							decision. A notification will be sent to you if accepted or
							declined.
						</p>

						<Button
							size='lg'
							onClick={() => navigate("/partnership-request/12345")}
							className='px-20'
						>
							View
						</Button>
					</Card>
				</section>
			) : (
				<>
					<Stepper steps={steps} activeStep={activeStep} />

					<Card
						className={cn(
							"w-full max-w-[600px] mx-auto p-5 md:p-10 lg:p-20 rounded-xl",
							activeStep === steps.length - 1
								? "border-none shadow-none !p-0"
								: ""
						)}
					>
						<Form {...form}>
							<form
								className='w-full space-y-5'
								onSubmit={form.handleSubmit(onSubmit)}
							>
								{activeStep === 0 && (
									<ExtendedFields formFields={form1Fields} form={form} />
								)}

								{activeStep === 1 && (
									<ExtendedFields formFields={form2Fields} form={form} />
								)}

								{activeStep === 2 && (
									<ExtendedFields formFields={form3Fields} form={form} />
								)}

								{activeStep === 3 && (
									<div className='w-full space-y-10'>
										<div className='w-full flex flex-col space-y-5'>
											<h2 className='text-2xl font-semibold'>
												Business details
											</h2>

											<Card className='p-5 flex flex-col gap-5'>
												{form1Fields.map(field => (
													<div key={field.name} className='flex flex-col'>
														<label
															className='text-sm text-foreground/60 font-medium'
															htmlFor={field.name}
														>
															{field.label}
														</label>
														<p>{form.getValues(field.name as any)}</p>
													</div>
												))}
											</Card>
										</div>

										<div className='w-full flex flex-col space-y-5'>
											<h2 className='text-2xl font-semibold'>
												Contact person details
											</h2>

											<Card className='p-5 flex flex-col gap-5'>
												{form2Fields.map(field => (
													<div key={field.name} className='flex flex-col'>
														<label
															className='text-sm text-foreground/60 font-medium'
															htmlFor={field.name}
														>
															{field.label}
														</label>
														<p>{form.getValues(field.name as any)}</p>
													</div>
												))}
											</Card>
										</div>

										<div className='w-full flex flex-col space-y-5'>
											<h2 className='text-2xl font-semibold'>
												Partnership details
											</h2>

											<Card className='p-5 flex flex-col gap-5'>
												{form3Fields.map(field => (
													<div key={field.name} className='flex flex-col'>
														<label
															className='text-sm text-foreground/60 font-medium'
															htmlFor={field.name}
														>
															{field.label}
														</label>
														<p>{form.getValues(field.name as any)}</p>
													</div>
												))}
											</Card>
										</div>
									</div>
								)}

								<div className='flex space-x-3 items-center'>
									{activeStep > 0 && (
										<Button
											size='lg'
											className='flex-1 h-auto py-4'
											variant='outline'
											onClick={handleBack}
										>
											Back
										</Button>
									)}

									{activeStep < steps.length - 1 ? (
										<Button
											type='button'
											size='lg'
											className='flex-1 h-auto py-4'
											onClick={handleNext}
										>
											Continue
										</Button>
									) : (
										<Button
											type='submit'
											size='lg'
											className='flex-1 h-auto py-4'
										>
											Submit
										</Button>
									)}
								</div>
							</form>
						</Form>
					</Card>
				</>
			)}
		</main>
	);
}
