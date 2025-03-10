import Image from "next/image";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4">
			{/* Busqueda */}
			{/* <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
				<IoMdSearch />
				<input
					type="text"
					placeholder="Search..."
					className="w-[200px] p-2 bg-transparent outline-none"
				/>
			</div> */}
			{/* Info de usuario */}
			<div className="flex items-center gap-6 justify-end w-full">
				<div className="flex flex-col">
					<span className="text-xs leading-3 font-medium">Nombre</span>
				</div>
				<Image
					src="https://oczjsmlteslhkkcejzpt.supabase.co/storage/v1/object/public/iconos//avatar.png"
					alt="Avatar"
					width={36}
					height={36}
					className="rounded-full"
				/>
			</div>
		</div>
	);
};

export default Navbar;
