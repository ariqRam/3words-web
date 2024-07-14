// components/Footer.js

import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="flex p-5 justify-between">
			<div className="flex">
				<a href='https://www.github.com/ariqRam' target='_blank' className='flex flex-col items-start'>
					<h1 className='text-lg md:text-2xl'>in development</h1>
					<Image alt='x logo' src="/GitHub-Logos/GitHub_Logo.png" width={80} height={30} className='-ml-2 -mt-2'></Image>
				</a>
			</div>
			<div className="flex">
				<a href='https://www.x.com/ariq_ram' target='_blank' className='flex flex-col items-end'>
					<h1 className='text-lg md:text-2xl'>crafted by</h1>
					<Image alt='x logo' src="/images/ariq-logo.svg" width={80} height={30} className=''></Image>
				</a>
			</div>
		</footer>
	);
};

export default Footer;