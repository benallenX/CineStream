import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Genres } from '@/typings';
import { ChevronDown } from 'lucide-react';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const GenreDropdown = async () => {
	const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
	const options: RequestInit = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: 60 * 60 * 24, // 24hours
		},
	};

	const response = await fetch(url.toString(), options);
	const data = (await response.json()) as Genres;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="text-white flex justify-center items-center">
				Genre <ChevronDown className="ml-1" />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
				<DropdownMenuSeparator />

				{data.genres.map((genre) => (
					<DropdownMenuItem className="cursor-pointer " key={genre.id}>
						<Link href={`/genre/${genre.id}?genre={genre.name}`}>
							{genre.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default GenreDropdown;
