<script>
	import { Mail, Facebook, Instagram, Github } from 'lucide-svelte';
</script>

<main class="flex h-screen flex-col items-center justify-center p-4 md:p-8">
	<div class="w-full m-auto max-w-md space-y-4 text-center">
		<h1 class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-100">
			Contact Me
		</h1>
		<div class="grid grid-cols-4 gap-6 p-4">
			<a
				class="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
				href="mailto:me@rachatat.com"
                target="_blank"
			>
				<Mail class="h-8 w-8" />
				<span class="mt-2 text-sm">Mail</span>
			</a>
			<a
				class="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
				href="https://facebook.com/rbunpat"
                target="_blank"
			>
				<Facebook class="h-8 w-8" />
				<span class="mt-2 text-sm">Facebook</span>
			</a>
			<a
				class="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
				href="https://instagram.com/rbunpat"
                target="_blank"
			>
				<Instagram class="h-8 w-8" />
				<span class="mt-2 text-sm">Instagram</span>
			</a>
			<a
				class="flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
				href="https://github.com/rbunpat"
                target="_blank"
			>
				<Github class="h-8 w-8" />
				<span class="mt-2 text-sm">Github</span>
			</a>
		</div>
	</div>
</main>
