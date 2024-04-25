import { Button } from "@/components/ui/button";

export default function Questions() {
	return (
		<section className='w-full px-5 py-20 space-y-10 bg-[#FFA902] text-center flex flex-col items-center'>
			<h2 className='font-medium text-3xl lg:text-5xl text-center'>
				Have a Question?
			</h2>

			<p className='font-medium text-lg lg:text-2xl text-foreground/80 max-w-[30ch]'>
				We are here to make your experience easy.
			</p>

			<Button size='xl' className='bg-white text-secondary'>
				Talk To Us
			</Button>
		</section>
	);
}
