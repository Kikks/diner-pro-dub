import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { RiHeartLine, RiStarFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { Button } from "../ui/button";

interface PartnershipCardProps {
	image: string;
	name: string;
	type: string;
	location: string;
	isVerified: boolean;
	rating: number;
	reviews: number;
	noOfPartners: number;
	className?: string;
}

export default function PartnershipCard({
	image,
	isVerified,
	location,
	name,
	noOfPartners,
	rating,
	reviews,
	type,
	className
}: PartnershipCardProps) {
	return (
		<Card className={cn("rounded-lg overflow-hidden", className ?? "")}>
			<figure className='aspect-video w-full relative'>
				<img src={image} alt={name} className='object-cover h-full w-full' />

				<button className='absolute top-2 right-2 bg-white p-2 rounded-full'>
					<RiHeartLine className='text-primary' />
				</button>
			</figure>

			<CardContent className='p-3 flex flex-col gap-2'>
				<span className='uppercase text-foreground/60 text-xs'>{type}</span>

				<div className='w-full'>
					<div className='flex items-center space-x-2 leading-none'>
						<h5 className='text-lg font-medium'>{name}</h5>
						{isVerified && <RiVerifiedBadgeFill className='text-[#0063A2]' />}
					</div>

					<span className='text-foreground/60 text-xs leading-none'>
						{location}
					</span>
				</div>

				<div className='flex space-x-1 items-center'>
					<RiStarFill className='text-base text-amber-500' />
					<span className='text-xs'>{rating.toFixed(1)}</span>
					<span className='text-foreground/60 text-xs'>({reviews})</span>
					<span className='text-foreground/60 text-xs'>&#183;</span>
					<span className='text-foreground/60 text-xs'>
						{noOfPartners} partners
					</span>
				</div>

				<div className='flex items-center space-x-3'>
					<Button
						size='sm'
						className='flex-1 h-auto py-4 text-xs'
						variant='outline'
					>
						View profile
					</Button>
					<Button size='sm' className='flex-1 h-auto py-4 text-xs'>
						Request partnership
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
