import type { Metadata } from 'next';
import './globals.css';
import { Provider } from '@/components/theme-provider';
import Header from '@/components/Header';

export const metadata: Metadata = {
	title: 'CineStream',
	description: 'Your movie streaming app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<Provider>
			
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	);
}
