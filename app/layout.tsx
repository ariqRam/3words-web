import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Three Words',
	description: 'Learn 3 words a day',
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
