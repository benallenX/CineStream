'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import z from 'zod';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';

const formSchema = z.object({
	input: z.string().min(2).max(50),
});

const SeachInput = () => {
	const router = useRouter();
	//define your form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			input: '',
		},
	});
	// define a submit handler
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);

		router.push(`/search/${values.input}`);
		form.reset();
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 rounded-lg">
				<FormField
					control={form.control}
					name="input"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Search..." {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

export default SeachInput;
