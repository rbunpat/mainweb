<script lang="ts">
	import '../app.css';

	import { navigating, page } from '$app/stores';

	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	$: routeId = $page.route.id;

	NProgress.configure({
		minimum: 0.16,
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>
<!-- trigger new build -->

<div
	class="sticky top-0 z-50 flex w-full flex-row justify-between border-b border-slate-700 bg-slate-950 bg-opacity-10 p-5 backdrop-blur-lg"
>
	<div class="flex flex-row items-center">
		<a href="/">
			<h1 class="text-md md:text-xl font-semibold text-slate-100">Rachatat Bunpat</h1>
		</a>
	</div>
	<div class="flex flex-row">
		<div class="ml-5 flex flex-row gap-3 text-md md:text-xl">
			<a href="/">
				<p class:active={routeId === '/'} class="text-slate-300 transition-all hover:text-slate-50">
					Home
				</p>
			</a>
			<a href="/blog">
				<p
					class:active={routeId === '/blog'}
					class="text-slate-300 transition-all hover:text-slate-50"
				>
					Blog
				</p>
			</a>
			<a href="/contact">
				<p
					class:active={routeId === '/contact'}
					class="text-slate-300 transition-all hover:text-slate-50"
				>
					Contact
				</p>
			</a>
		</div>
	</div>
</div>

<slot></slot>

<style>
	.active {
		color: rgb(52 211 153 / var(--tw-text-opacity));
	}
</style>
