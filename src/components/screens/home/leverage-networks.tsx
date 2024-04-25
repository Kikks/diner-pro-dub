import { Button } from "@/components/ui/button";

export default function LeverageNetworks() {
	return (
		<section className='w-full grid grid-cols-1 lg:grid-cols-2'>
			<div className='bg-gray-900 min-h-[500px] lg:min-h-[700px] bg-[url(/images/leverage-networks.jpeg)] bg-center bg-cover' />

			<div className='bg-[#FFA902] flex flex-col items-start justify-center gap-5 p-10 lg:p-20 text-left'>
				<h2 className='font-medium text-3xl lg:text-5xl'>Leverage Networks</h2>

				<p className='lg:text-xl'>
					Business expansion may be challenging when building from the ground
					up. Use partners to accelerate your growth.
				</p>

				<Button variant='link' size='lg' className='text-primary text-base p-0'>
					Learn more
				</Button>
			</div>
		</section>
	);
}
