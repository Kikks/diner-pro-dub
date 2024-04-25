import { Button } from "@/components/ui/button";
import { RiVidiconFill } from "react-icons/ri";

export default function SuccessStories() {
	return (
		<section className='w-full px-5 py-20 lg:px-10 space-y-20'>
			<div className='w-full max-w-[350px] flex flex-col space-y-5 items-center text-center mx-auto'>
				<h2 className='font-medium text-3xl lg:text-4xl'>Success Stories</h2>

				<p className='font-medium text-lg lg:text-2xl text-foreground/80'>
					DinnerPro helps businesses thrive- See how our software helps our
					clients manage and row their business:
				</p>
			</div>

			<div className='w-full flex flex-col items-center lg:flex-row max-w-[1000px] mx-auto'>
				<div className=' bg-red-700 rounded-lg w-full h-[300px] lg:w-3/4 lg:min-h-[650px] bg-[url(/images/success-stories.jpg)] bg-center bg-cover' />

				<div className='w-ful bg-white rounded-lg flex flex-col items-start p-10 space-y-10 lg:translate-x-[-50%] lg:w-1/3'>
					<h3 className='text-xl lg:text-3xl font-medium'>LyndaEats</h3>

					<p className='lg:text-xl'>
						We basically found all our vendors here. Last-mile logistics,
						kitchen utensils, media and promotions.
					</p>

					<p className='text-sm lg:text-base font-medium'>
						An interview with Lynda Peters CEO of Lyndaeats
					</p>

					<div className='flex gap-3 flex-col md:flex-row'>
						<Button variant='outline'>
							<RiVidiconFill className='text-lg mr-2' />
							Watch Demo
						</Button>
						<Button variant='link' size='lg' className='text-foreground'>
							See all Success Stories
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
