import FAQs from "@/components/screens/home/faqs";
import GetPartners from "@/components/screens/home/get-partners";
import Header from "@/components/screens/home/header";
import LeverageNetworks from "@/components/screens/home/leverage-networks";
import SuccessStories from "@/components/screens/home/success-stories";

export default function Home() {
	return (
		<main className='w-full'>
			<Header />
			<GetPartners />
			<LeverageNetworks />
			<div className='py-10 border-b' />
			<SuccessStories />
			<FAQs />
		</main>
	);
}
