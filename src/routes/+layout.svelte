<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { Github, Youtube, Instagram, Mail } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	export let visible = false;

	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				visible = true;
			}, 0);
		});
	});
</script>

<div
	class="fixed flex w-full flex-row justify-between border-b border-slate-700 bg-slate-950 bg-opacity-10 p-5 backdrop-blur-lg"
>
	<div class="flex flex-row items-center">
		<a href="/">
			<h1 class="montserrat-semibold text-xl text-slate-100">Rachatat Bunpat</h1>
		</a>
	</div>
	<div class="flex flex-row gap-3">
		<a href="mailto:me@rachatat.com">
			<Mail class="h-9 w-9 text-slate-300 transition-all hover:text-slate-50" />
		</a>
		<a href="https://github.com/rbunpat">
			<Github class="h-9 w-9 text-slate-300 transition-all hover:text-slate-50" />
		</a>
		<a href="https://youtube.com/@rbunpat">
			<Youtube class="h-9 w-9 text-slate-300 transition-all hover:text-slate-50" />
		</a>
	</div>
</div>

{#if visible}
	<div in:fade>
		<slot></slot>
	</div>
{/if}

<style></style>
