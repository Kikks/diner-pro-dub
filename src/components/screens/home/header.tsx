import { RiSearchLine, RiVidiconFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import React from "react";

const partnerships = [
	"Logistics solutions",
	"Off-takers",
	"Equipment and Inputs",
	"Research and Development",
	"Professional Services",
	"Technology solutions"
];

const locations = ["Lagos"];

export default function Header() {
	const navigate = useNavigate();
	const [payload, setPayload] = React.useState({
		partnership: "",
		location: ""
	});

	function handleChange(key: keyof typeof payload, value: string) {
		setPayload({ ...payload, [key]: value });
	}

	function handleSearch() {
		navigate(
			`/partnerships?partnership=${payload?.partnership}&location=${payload.location}`
		);
	}

	return (
		<header className='border-b py-20 px-10 lg:px-20 flex flex-col items-center space-y-10 text-center'>
			<h1 className='text-4xl md:text-5xl lg:text-6xl font-medium'>
				Agroecosystems for food security.
			</h1>

			<p className='text-lg lg:text-2xl'>
				Collaborate with other stakeholders in the food and agricultural
				industry.
			</p>

			<div className='flex gap-3 flex-col md:flex-row'>
				<Button variant='outline' size='lg'>
					<RiVidiconFill className='text-lg mr-2' />
					Watch Demo
				</Button>
				<Button variant='secondary' size='lg'>
					Get Started
				</Button>
			</div>

			<div className='w-full max-w-4xl flex items-center gap-3 bg-gray-50 p-3 pl-6 rounded-xl'>
				<RiSearchLine className='text-lg' />

				<Select
					value={payload.partnership}
					onValueChange={value => handleChange("partnership", value)}
				>
					<SelectTrigger className='flex-1 bg-transparent border-none'>
						<SelectValue placeholder='What type of partnership are you looking for?' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Partnerships</SelectLabel>
							{partnerships.map(partnership => (
								<SelectItem key={partnership} value={partnership}>
									{partnership}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				<Select
					value={payload.location}
					onValueChange={value => handleChange("location", value)}
				>
					<SelectTrigger className='flex-1 bg-transparent border-none'>
						<SelectValue placeholder='Location' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Locations</SelectLabel>
							{locations.map(location => (
								<SelectItem key={location} value={location}>
									{location}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>

				<Button
					disabled={Object.values(payload).some(val => val.trim() === "")}
					onClick={handleSearch}
				>
					Submit
				</Button>
			</div>

			<div className='flex gap-5 items-center'>
				<p className='font-medium'>Highlights</p>

				<Button
					size='lg'
					variant='outline'
					className='border-secondary rounded-full'
				>
					Research
				</Button>
				<Button
					size='lg'
					variant='outline'
					className='border-secondary rounded-full'
				>
					Logistics solutions
				</Button>
			</div>
		</header>
	);
}
