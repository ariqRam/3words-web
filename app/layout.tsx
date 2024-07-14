import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
	title: '3words | Learn 3 words a day',
	description: 'Learn 3 words a day',
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
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@ariq_ram" />
				<meta name="twitter:title" content="3words" />
				<meta name="twitter:description" content="Learn 3 words a day. Casually." />
				<meta name="twitter:image" content="https://www.get3words.com/x-card.png" />
			</Head>
			<body>
				<Navbar></Navbar>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
