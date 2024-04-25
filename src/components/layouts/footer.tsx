import {
	RiFacebookFill,
	RiInstagramLine,
	RiLinkedinFill,
	RiMailFill,
	RiTwitterFill
} from "react-icons/ri";
import { Button } from "../ui/button";

const socials = [
	{
		icon: RiFacebookFill,
		link: "https://www.facebook.com/"
	},
	{
		icon: RiInstagramLine,
		link: "https://www.facebook.com/"
	},
	{
		icon: RiTwitterFill,
		link: "https://www.facebook.com/"
	},
	{
		icon: RiLinkedinFill,
		link: "https://www.facebook.com/"
	},
	{
		icon: RiMailFill,
		link: "https://www.facebook.com/"
	}
];

export default function Footer() {
	return (
		<footer className='w-full p-5 space-y-5'>
			<div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-20 lg:pt-32 text-center lg:text-left'>
				<div className='col-span-1 md:col-span-3 lg:col-span-1 grid place-items-center md:pb-10 lg:pb-0'>
					<figure className='relative h-16 w-28 lg:h-36 lg:w-60'>
						<img
							src='/logo.svg'
							alt='DinePro'
							className='object-contain h-full w-full'
						/>
					</figure>
				</div>

				<div className='col-span-1 flex flex-col space-y-5 items-center lg:items-start'>
					<Button variant='link' className='p-0 text-base text-foreground'>
						About Us
					</Button>
					<Button variant='link' className='p-0 text-base text-foreground'>
						FAQs
					</Button>
					<Button variant='link' className='p-0 text-base text-foreground'>
						Terms and Conditions
					</Button>
				</div>

				<div className='col-span-1 flex flex-col space-y-5 items-center lg:items-start'>
					<Button variant='link' className='p-0 text-base text-foreground'>
						Privacy Policy
					</Button>
					<Button variant='link' className='p-0 text-base text-foreground'>
						Support
					</Button>
				</div>

				<div className='col-span-1 flex flex-col space-y-5 items-center lg:items-start'>
					<p className='text-base text-foreground'>
						16 Moshalasi street, off Oko-awo,{" "}
						<br className='hidden lg:inline-flex' /> Lagos Island, Lagos
					</p>
					<p className='text-base text-foreground'>www.dinnerpro.ng</p>
					<p className='text-base text-foreground'>+247039680325</p>
				</div>
			</div>

			<hr className='border-gray-700' />

			<div className='flex space-x-5 justify-center md:justify-start items-center'>
				{socials.map((social, i) => (
					<a
						key={i}
						href={social.link}
						target='_blank'
						rel='noreferrer'
						className='hover:text-primary h-10 w-10 rounded-full border grid place-items-center border-gray-700'
					>
						<social.icon className='text-lg' />
					</a>
				))}
			</div>
		</footer>
	);
}
