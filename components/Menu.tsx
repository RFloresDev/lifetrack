import Link from "next/link";
import {
	FcCalculator,
	FcHome,
	FcCalendar,
	FcSportsMode,
	FcSettings,
	FcPortraitMode,
	FcExport,
} from "react-icons/fc";
import { IoFastFoodOutline } from "react-icons/io5";
const menuItems = [
	{
		title: "MENU",
		items: [
			{
				icon: <FcHome />,
				label: "Home",
				href: "/dashboard",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: <IoFastFoodOutline />,
				label: "Comidas",
				href: "/dashboard/comidas",
			},
			{
				icon: <FcSportsMode />,
				label: "Ejercicios",
				href: "/dashboard/ejercicios",
			},
			{
				icon: <FcCalculator />,
				label: "Finanzas",
				href: "/dashboard/finanzas",
			},
			{
				icon: <FcCalendar />,
				label: "Tareas",
				href: "/dashboard/tareas",
			},
		],
	},
	{
		title: "OTHER",
		items: [
			{
				icon: <FcPortraitMode />,
				label: "Profile",
				href: "/profile",
			},
			{
				icon: <FcSettings />,
				label: "Settings",
				href: "/settings",
			},
			{
				icon: <FcExport />,
				label: "Logout",
				href: "/logout",
			},
		],
	},
];

const Menu = () => {
	return (
		<div className="mt-4 text-sm">
			{menuItems.map((i) => (
				<div className="flex flex-col gap-2" key={i.title}>
					<span className="hidden lg:block text-gray-400 font-light my-4">
						{i.title}
					</span>
					{i.items.map((item) => {
						{
							return (
								<Link
									href={item.href}
									key={item.label}
									className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight">
									<span>{item.icon}</span>
									<span className="hidden lg:block">{item.label}</span>
								</Link>
							);
						}
					})}
				</div>
			))}
		</div>
	);
};

export default Menu;
