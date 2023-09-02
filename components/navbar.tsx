import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = () => {
	return (
		<div className="flex items-center p-4">
			{/* hidden on pc, show on mobile device */}
			<MobileSidebar />
			{/* userbutton on upper-right corner */}
			<div className="flex w-full justify-end">
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

export default Navbar;
