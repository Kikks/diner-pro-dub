import PartnershipCard from "@/components/shared/partnership-card";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { partnershipFilters, partnershipList } from "@/data/partnership";
import { cn } from "@/lib/utils";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Partnerships() {
	const navigate = useNavigate();
	const [params] = useSearchParams();
	const [partnership, setPartnership] = React.useState<string | null>(null);
	const [location, setLocation] = React.useState<string | null>(null);
	const [selectedFilter, setSelectedFilter] =
		React.useState<string>("All categories");

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

	const filters = React.useMemo(() => {
		return (
			partnershipFilters.find(filter => filter.partnership === partnership)
				?.filters ?? []
		);
	}, [partnership]);

	function handleClearFilters() {
		setSelectedFilter("All categories");
		setPayload({ partnership: "", location: "" });
		navigate("/partnerships");
		setPartnership(null);
		setLocation(null);
	}

	React.useEffect(() => {
		const partnershipQuery = params.get("partnership");
		const locationQuery = params.get("location");

		if (partnershipQuery) setPartnership(partnershipQuery);
		if (locationQuery) setLocation(locationQuery);

		setPayload({
			location: locationQuery ?? "",
			partnership: partnershipQuery ?? ""
		});
	}, [params]);

	return (
		<main className='w-full p-5 lg:p-10 space-y-10'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/partnerships'>Partners</BreadcrumbLink>
					</BreadcrumbItem>
					{partnership && (
						<>
							<BreadcrumbSeparator>/</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage className='text-primary'>
									{partnership}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					)}
				</BreadcrumbList>
			</Breadcrumb>

			<div className='w-full space-y-2'>
				{(partnership || location) && (
					<h2 className='font-medium text-xl lg:text-3xl'>
						{partnership} in {location}, Nigeria
					</h2>
				)}

				{partnership && <p className='text-foreground/80'>9 results</p>}
			</div>

			<div className='flex space-x-5 items-center'>
				<div className='flex-1 space-y-1'>
					<Label>Partner Type</Label>
					<Input
						value={payload.partnership}
						onChange={e => handleChange("partnership", e.target.value)}
						placeholder='What type of partnership are you looking for?'
					/>
				</div>
				<div className='flex-1 space-y-1'>
					<Label>Location</Label>
					<Input
						value={payload.location}
						onChange={e => handleChange("location", e.target.value)}
						placeholder='Location'
					/>
				</div>
				<div className='space-y-1 flex flex-col self-stretch'>
					<Label className='text-transparent'>Submit</Label>
					<Button
						className='lg:px-14 flex-1 block'
						disabled={Object.values(payload).some(val => val.trim() === "")}
						onClick={handleSearch}
					>
						Search
					</Button>
				</div>
			</div>

			{(partnership || location) && (
				<div className='flex flex-col space-y-5'>
					<div className='flex items-center space-x-2'>
						<h2 className='font-medium text-lg lg:text-xl'>Filter results</h2>

						<Button
							variant='ghost'
							onClick={handleClearFilters}
							className='text-secondary'
						>
							Clear filters
						</Button>
					</div>

					{filters.length > 0 && (
						<span className='font-medium'>Categories</span>
					)}

					<div className='w-full flex gap-5 flex-wrap'>
						{["All categories", ...filters].map(filter => (
							<Button
								key={filter}
								variant='ghost'
								className={cn(
									"hover:bg-transparent p-0 hover:text-secondary",
									selectedFilter === filter
										? "text-primary"
										: "text-foreground/60"
								)}
								onClick={() => setSelectedFilter(filter)}
							>
								{filter}
							</Button>
						))}
					</div>

					{(partnership || location) && (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-y-20 !mt-20'>
							{partnershipList.map(partner => (
								<PartnershipCard
									key={partner.name}
									{...partner}
									className='w-full'
									image='/images/partnership-card-image.jpeg'
									isVerified
									location='Abuja, Nigeria'
									noOfPartners={120}
									rating={5}
									reviews={96}
									type={partnership ?? ""}
								/>
							))}
						</div>
					)}
				</div>
			)}
		</main>
	);
}
