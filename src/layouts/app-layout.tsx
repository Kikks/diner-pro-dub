import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import Questions from "@/components/layouts/questions";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
	return (
		<div className='w-full flex flex-col min-h-screen'>
			<Navbar />
			<Outlet />
			<div className='mt-auto'></div>
			<Questions />
			<Footer />
		</div>
	);
}
