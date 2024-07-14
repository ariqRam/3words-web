import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: '3words | Learn 3 words a day',
	description: 'Learn 3 words a day',
	twitter: {
		card: 'summary_large_image',
		creator: '@ariq_ram',
		title: '3words | Learn 3 words a day',
		description: 'Learn 3 words a day. Casually.',
		images: [
			{
				url: "https://www.get3words.com/images/x-card.png",
				width: 1200,
				height: 630,
				alt: "3 words Twitter card",
			},
		],
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<Navbar></Navbar>
				{children}
				<Footer></Footer>
			</body>
		</html>
	)
}
