import React from "react";
import { useForm } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "./form";
import { Textarea } from "./textarea";
import { SimpleSelect } from "./select";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface BaseFieldProps {
	name: string;
	placeholder?: string;
	className?: string;
	label?: string;
	description?: string;
	actions?: {
		headerComponent?: React.ReactNode;
		inlineComponent?: React.ReactNode;
	};
}

interface InputProps extends BaseFieldProps {
	type: "text" | "email" | "password" | "number";
}

interface TextAreaProp extends BaseFieldProps {
	type: "textarea";
}

interface Choice {
	label: string;
	value: string;
}

interface SelectFieldProps extends BaseFieldProps {
	options: Array<Choice>;
	type: "select";
}

export type FormFieldMetadata = InputProps | SelectFieldProps | TextAreaProp;
interface FormProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: ReturnType<typeof useForm<any>>;
	formFields: Array<FormFieldMetadata>;
}

function ExtendedFields({ form, formFields }: Readonly<FormProps>) {
	return formFields.map(field => (
		<FormField
			key={field.name}
			control={form.control}
			name={field.name}
			render={({ field: fieldProps }) => {
				let component;

				switch (field.type) {
					case "textarea":
						component = (
							<Textarea placeholder={field.placeholder} {...fieldProps} />
						);
						break;
					case "select":
						component = (
							<SimpleSelect
								placeholder={field.placeholder}
								{...fieldProps}
								options={field.options}
							/>
						);
						break;

					default:
						component = (
							<Input placeholder={field.placeholder} {...fieldProps} />
						);
						break;
				}

				return (
					<FormItem
						className={cn(
							fieldProps.disabled && "cursor-not-allowed",
							field.className
						)}
					>
						{(field.label || field?.actions?.headerComponent) && (
							<div className='flex items-center justify-between mb-4'>
								<FormLabel>{field.label}</FormLabel>
								{field?.actions?.headerComponent}
							</div>
						)}
						<FormControl>
							<div className='flex gap-2'>
								<div className='w-full grow'>{component}</div>
								{field.actions?.inlineComponent}
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	));
}

export default ExtendedFields;
