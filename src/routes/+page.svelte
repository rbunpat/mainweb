<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { ChevronsDown } from 'lucide-svelte';

	function smoothScrollToProject() {
		window.scrollTo({
			top: document.getElementById('projects')?.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div class="flex h-screen flex-col justify-center">
	<div class="flex flex-col items-center">
		<h1 class="montserrat-regular text-4xl text-slate-100 md:text-6xl">Howdy!👋</h1>
		<div class="mt-4 inline-flex">
			<h1 class="montserrat-regular text-4xl text-slate-100 md:text-6xl">I'm</h1>
			<h1
				class="montserrat-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-4xl text-transparent md:text-6xl"
			>
				&nbsp;Rachatat Bunpat
			</h1>
		</div>
		<p class="montserrat-regular mt-4 hidden text-lg text-slate-100 md:block md:text-xl">
			I'm a student in Grade 12 at <a
				href="https://www.st.ac.th/"
				target="_blank"
				class=" text-emerald-400 hover:underline">Suratthani School</a
			>
		</p>
		<p class="montserrat-regular mt-4 text-lg text-slate-100 md:hidden md:text-xl">
			I'm a student in Grade 12 at
		</p>
		<p class="montserrat-regular mt-4 text-lg text-slate-100 md:hidden md:text-xl">
			<a href="https://www.st.ac.th/" target="_blank" class=" text-emerald-400 hover:underline"
				>Suratthani School</a
			>
		</p>
		<p class="montserrat-regular mt-4 text-lg text-slate-100 md:text-xl">
			I also do, uhh, stuff ¯\_(ツ)_/¯
		</p>
	</div>

	<div class="mt-10 flex animate-bounce flex-col items-center text-slate-100">
		<button title="Scroll Down" on:click|preventDefault={smoothScrollToProject}>
			<ChevronsDown class="h-10 w-10" />
		</button>
	</div>
</div>

<div id="projects" class="h-screen">
	<div class="flex flex-col items-center">
		<h1 class="montserrat-regular mt-24 text-4xl text-slate-100 md:text-6xl">My Projects</h1>
	</div>

	<div class="container mt-8 items-center justify-between px-4 md:mx-auto md:mt-10">
		<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
			<ProjectCard
				title="Staff-Navigator"
				description="Staff-Navigator Smart Cane tracking dashboard"
				techStack={['svelte', 'typescript', 'prisma', 'supabase', 'vercel', 'cloudflare']}
				githubLink="https://github.com/rbunpat/Staff-Navigator"
				liveLink="https://navigator.rachatat.com"
			/>

			<ProjectCard
				title="Jiwwongrapher"
				description="Jiwwongrapher's Portfolio Website"
				techStack={['svelte', 'typescript', 'tailwindcss', 'vercel', 'cloudflare']}
				liveLink="https://jiw.rachatat.com/"
			/>

			<ProjectCard
				title="Jiwwongrapher Store"
				description="Jiwwongrapher's web store for selling digital pictures"
				techStack={['svelte', 'typescript', 'tailwindcss', 'postgrtesql', 'prisma', 'cloudflare']}
				liveLink="https://jiw-prod.rachatat.com/"
			/>

			<ProjectCard
				title="BuddyBudder"
				description="A web application that helps you and your friends share requests anonymously"
				techStack={['svelte', 'typescript', 'prisma', 'supabase', 'vercel', 'cloudflare']}
				githubLink="https://github.com/rbunpat/buddybudder"
			/>
		</div>
	</div>
</div>
