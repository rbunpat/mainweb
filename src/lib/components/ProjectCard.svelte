<script lang="ts">
	import { SquareArrowOutUpRight, Github } from 'lucide-svelte';

	export let title: string;
	export let description: string;
	export let techStack: string[];
	export let githubLink: string = '';
	export let liveLink: string = '';
</script>

<div
	class="blur-5 -webkit-filter blur-5 flex flex-col justify-between rounded-md border border-white/30 bg-white/20 shadow-sm filter"
>
	<div class="flex flex-row p-4">
		<div class="flex flex-col items-start">
			<h1 class="montserrat-semibold text-xl text-slate-100 md:text-2xl">{title}</h1>
			<p class="montserrat-regular text-lg text-slate-100">{description}</p>
		</div>
	</div>

	<div class="flex flex-row justify-between p-4">
		<div class="text-3xl text-white">
			{#each techStack as tech}
				<i class="devicon-{tech.toLowerCase()}-plain mr-1.5"></i>
			{/each}
		</div>

		<div class="inline-flex gap-4 text-white">
			{#if githubLink}
				<a href={githubLink} target="_blank" rel="noopener noreferrer">
					<Github class="h-8 w-8 text-slate-300 transition-all hover:text-slate-50" />
				</a>
			{/if}

			{#if liveLink}
				<a href={liveLink} target="_blank" rel="noopener noreferrer">
					<SquareArrowOutUpRight
						class="h-8 w-8 text-slate-300 transition-all hover:text-slate-50"
					/>
				</a>
			{/if}
		</div>
	</div>
</div>
