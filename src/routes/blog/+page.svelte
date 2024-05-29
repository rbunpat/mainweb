<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	export let data;
	export let postsJson = data.postsJson;
</script>

<div class="container mt-8 items-center justify-between px-4 md:mx-auto md:mt-10">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each postsJson as post}
			<BlogCard
				title={post.title}
				description={post.excerpt}
				image={post.feature_image}
				link={`/blog/${post.slug}`}
			/>
		{/each}
	</div>
</div>
