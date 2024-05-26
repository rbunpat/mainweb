<script lang="ts">
    import { SquareArrowOutUpRight, Github, Eye } from "lucide-svelte";

    export let title: string;
    export let description: string;
    export let techStack: string[];
    export let githubLink: string = "";
    export let liveLink: string = "";
</script>

<div class="flex flex-col justify-between bg-white/20 rounded-md shadow-sm filter blur-5 -webkit-filter blur-5  border border-white/30">
    <div class="flex flex-row p-4">
        <div class="flex flex-col items-start">
            <h1 class="text-xl md:text-2xl text-slate-100 montserrat-semibold">{title}</h1>
            <p class="text-lg text-slate-100 montserrat-regular">{description}</p>
        </div>
    </div>

    <div class="flex flex-row p-4 justify-between">

        <div class="text-3xl text-white">
            {#each techStack as tech}
                <i class="devicon-{tech.toLowerCase()}-plain mr-1.5"></i>
            {/each}
        </div>

        <div class="text-white inline-flex gap-4">
            {#if githubLink}
                <a href="{githubLink}" target="_blank" rel="noopener noreferrer">
                    <Github class="w-8 h-8 text-slate-300 hover:text-slate-50 transition-all" />
                </a>
            {/if}

            {#if liveLink}
                <a href="{liveLink}" target="_blank" rel="noopener noreferrer">
                    <SquareArrowOutUpRight class="w-8 h-8 text-slate-300 hover:text-slate-50 transition-all" />
                </a>
            {/if}
        </div>
    </div>
</div>