import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
	title: '3words | Learn 3 words a day',
	description: 'Learn 3 words a day',
	twitter: {
		card: 'summary_large_image',
		creator: '@ariq_ram',
		title: '3words | Learn 3 words a day',
		description: 'Learn 3 words a day. Casually.',
		image: 'https://www.get3words.com/x-card.png',
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Navbar></Navbar>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
