import { cn } from "@/lib/utils";
import { RiCheckLine } from "react-icons/ri";

interface StepperProps {
	steps: string[];
	activeStep: number;
	className?: string;
}

export default function Stepper({
	steps,
	activeStep,
	className
}: StepperProps) {
	return (
		<div
			className={cn(
				"w-full flex justify-center items-center space-x-3",
				className
			)}
		>
			{steps.map((step, index) => (
				<div
					key={index}
					className={`flex items-center space-x-3 ${
						index === steps.length - 1 ? "" : ""
					}`}
				>
					<div className='flex space-x-2 items-center'>
						<div
							className={cn(
								"w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border sm:text-lg",
								activeStep > index
									? "border-secondary bg-secondary"
									: "border-foreground",
								activeStep === index ? "border-secondary text-secondary" : ""
							)}
						>
							{activeStep > index ? (
								<RiCheckLine className='text-white text-xl' />
							) : (
								index + 1
							)}
						</div>

						<span
							className={cn(
								"text-sm font-medium hidden lg:block",
								activeStep > index ? "text-secondary" : "text-foreground/60",
								activeStep === index ? "text-secondary" : ""
							)}
						>
							{step}
						</span>
					</div>
					{index !== steps.length - 1 && (
						<div
							className={`w-12 sm:w-14 h-0.5 ${
								activeStep > index ? "bg-secondary" : "bg-foreground/60"
							}`}
						/>
					)}
				</div>
			))}
		</div>
	);
}
