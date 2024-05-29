<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib';

	export let data: PageData;

	$: post = data.props.post;
</script>

{#if post}
	<div class="mt-4 flex flex-col items-center justify-center text-slate-50">
		<div class="flex w-full max-w-[960px] items-center justify-between p-4">
			<a
				href="/blog"
				class="flex items-center gap-2 text-lg font-semibold text-slate-50 hover:text-slate-100"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Back
			</a>
		</div>
		<div class="flex max-w-[960px] flex-col gap-8 p-4 lg:w-3/5">
			<h1 class="text-3xl font-bold lg:text-5xl">{post.title}</h1>
			<div class="space flex flex-row gap-4">
				<div>
					{#if post.created_at}
						<div class="text-md text-zinc-400 lg:text-sm">{formatDate(post.created_at)}</div>
					{/if}
				</div>
			</div>
			<img src={post?.feature_image} alt={post.title} />
			<div class="space-y-5 text-xl md:space-y-10 lg:text-2xl">{@html post.html}</div>
		</div>
	</div>
{/if}
