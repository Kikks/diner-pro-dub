import { Button } from "@/components/ui/button";

export default function GetPartners() {
	return (
		<section className='w-full px-5 py-10 lg:px-10 grid gap-10 grid-cols-1 lg:grid-cols-2 items-center'>
			<div className='flex flex-col space-y-5 text-center items-center lg:text-left lg:items-start'>
				<h2 className='font-medium text-3xl lg:text-5xl'>
					Get Partners. <br /> Become Invisible
				</h2>

				<p className='lg:text-xl'>
					Agriculture and food business is built on partnerships. We help you
					source for partners across technology, logistics, inputs and others.
				</p>

				<Button variant='link' size='lg' className='text-primary text-base p-0'>
					Learn more
				</Button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0.5'>
				<div className='bg-gray-900 h-80 flex items-end justify-start col-span-1 row-span-1 rounded-lg overflow-hidden p-3 bg-[url(/images/get-partners-1.jpeg)] bg-center bg-cover'>
					<p className='text-white font-semibold'>Digital Tools</p>
				</div>
				<div className='bg-gray-900 flex items-end justify-start col-span-1 row-span-2 rounded-lg overflow-hidden p-3 bg-[url(/images/get-partners-2.jpeg)] bg-center bg-cover'>
					<p className='text-white font-semibold'>Equipment & Inputs</p>
				</div>
				<div className='bg-gray-900 h-80 flex items-end justify-start col-span-1 row-span-1 rounded-lg overflow-hidden p-3 bg-[url(/images/get-partners-3.jpeg)] bg-center bg-cover'>
					<p className='text-white font-semibold'>Logistics</p>
				</div>
			</div>
		</section>
	);
}
