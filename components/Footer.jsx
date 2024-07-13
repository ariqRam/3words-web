// components/Footer.js

import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="flex p-5 items-center justify-center">
			<h1 className='text-2xl pr-4'>In development.</h1>
			<a href='https://www.x.com/ariq_ram' target='_blank'>
				<Image alt='x logo' src="/x-logo.png" width={40} height={40} className='self-center'></Image>
			</a>
		</footer>
	);
};

export default Footer;