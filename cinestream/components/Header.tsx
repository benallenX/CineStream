import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MovieLogo from '@/app/images/mlogo.png';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
	return (
		<header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
			<Link href="/" className="mr-10">
				<Image
					src={MovieLogo}
					width={100}
					height={80}
					alt="logo"
					className={'cursor-pointer '}
				/>
			</Link>
			<div className="flex space-x-2">
				<ThemeToggle />
			</div>
		</header>
	);
};

export default Header;
