// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="flex p-5 place-content-between">
			<Link href="/" className=' inline-block self-center'>
				<Image alt="3 words logo" src="/logo.svg" width={100} height={100}></Image>
			</Link>
			<a href="mailto:ariq.ramdhany@.ittend.com" className=' inline-block'>
				<div className=' bg-lightGreen px-4 py-2 text-xl border border-none hover:bg-primary hover:text-white rounded-full'>
					Contact us
				</div>
			</a>
		</nav>
	);
};

export default Navbar;