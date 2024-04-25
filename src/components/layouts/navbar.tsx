import { NavLink } from "react-router-dom";
import {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { RiMenu2Fill } from "react-icons/ri";

const links = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Categories",
		href: "/categories"
	},
	{
		label: "Partnerships Request",
		href: "/partnership-request"
	},
	{
		label: "About Us",
		href: "/about"
	}
];

export default function Navbar() {
	return (
		<nav className='w-full px-10 py-5 flex items-center space-x-5 border-b'>
			<figure className='relative h-16 w-28'>
				<img
					src='/logo.svg'
					alt='DinePro'
					className='object-cover h-full w-full'
				/>
			</figure>

			<div className='flex-1 flex justify-end'>
				<NavigationMenu className='hidden lg:flex'>
					<NavigationMenuList>
						{links.map(link => (
							<NavigationMenuItem key={link.href}>
								<NavLink
									to={link.href}
									className={({ isActive }) =>
										cn(
											"relative",
											isActive
												? "after:absolute after:-bottom-3 after:left-[50%] after:translate-x-[-50%] after:bg-secondary after:h-1.5 after:w-1.5 after:rounded-full"
												: ""
										)
									}
								>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{link.label}
									</NavigationMenuLink>
								</NavLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			<Button className='ml-auto lg:ml-0'>Sign In</Button>

			<Button size='icon' variant='ghost' className='lg:hidden'>
				<RiMenu2Fill className='text-2xl' />
			</Button>
		</nav>
	);
}
