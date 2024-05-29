<script lang="ts">
	export let title: string;
	export let description: string;
	export let link: string = '';
	export let image: string = '';
</script>

<div
	class="blur-5 -webkit-filter blur-5 flex flex-col justify-between rounded-md border border-white/30 bg-white/20 shadow-sm filter"
>
	<a href={link} class="text-white transition-all hover:text-slate-50">
		<div class="relative h-48 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
			<img src={image} alt={title} class="h-full w-full rounded-t-md object-cover" />
		</div>
		<div class="flex flex-col p-4">
			<h1 class="text-xl font-bold text-slate-100 md:text-2xl">{title}</h1>
			<p class="mt-2 text-lg text-slate-100">
				{description.length > 100 ? description.substring(0, 100) + '...' : description}
			</p>
		</div>
	</a>
</div>
