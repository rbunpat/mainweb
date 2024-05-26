<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { ChevronsDown } from "lucide-svelte";

    function smoothScrollToProject() {
            window.scrollTo({
                top: document.getElementById("projects")?.offsetTop,
                behavior: "smooth"
            });
    };


</script>

<div class="flex flex-col h-screen justify-center">
    <div class="flex flex-col items-center">
        <h1 class="text-4xl md:text-6xl text-slate-100 montserrat-regular">Howdy!👋</h1>
        <div class="mt-4 inline-flex">
            <h1 class="text-4xl md:text-6xl text-slate-100 montserrat-regular">I'm</h1>
            <h1 class="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 montserrat-semibold">&nbsp;Rachatat Bunpat</h1>
        </div>
        <p class="hidden md:block text-lg md:text-xl text-slate-100 montserrat-regular mt-4">I'm a student in Grade 12 at <a href="https://www.st.ac.th/" target="_blank" class=" text-emerald-400 hover:underline">Suratthani School</a></p>
        <p class="md:hidden text-lg md:text-xl text-slate-100 montserrat-regular mt-4">I'm a student in Grade 12 at</p>
        <p class="md:hidden text-lg md:text-xl text-slate-100 montserrat-regular mt-4"><a href="https://www.st.ac.th/" target="_blank" class=" text-emerald-400 hover:underline">Suratthani School</a></p>
        <p class="text-lg md:text-xl text-slate-100 montserrat-regular mt-4">I also do, uhh, stuff ¯\_(ツ)_/¯</p>

    </div>

    <div class="flex flex-col items-center mt-10 text-slate-100 animate-bounce">
        <button title="Scroll Down" on:click|preventDefault={smoothScrollToProject}>
            <ChevronsDown class="w-10 h-10"/>
        </button>
    </div>
</div>


<div id="projects" class="h-screen">
    <div class="flex flex-col items-center">
        <h1  class="mt-24 text-4xl md:text-6xl text-slate-100 montserrat-regular">My Projects</h1>
    </div>
    
    <div class="container mt-8 md:mt-10 px-4 md:mx-auto items-center justify-between">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <ProjectCard
                title="Staff-Navigator"
                description="Staff-Navigator Smart Cane tracking dashboard"
                techStack={["svelte", "typescript", "prisma", "supabase", "vercel", "cloudflare"]}
                githubLink="https://github.com/rbunpat/Staff-Navigator"
                liveLink="https://navigator.rachatat.com"
            />

            <ProjectCard
            title="Jiwwongrapher"
            description="A web application that helps you navigate through your staffs' information."
            techStack={["svelte", "typescript", "tailwindcss", "vercel", "cloudflare"]}
            liveLink="https://jiw.rachatat.com/"
            />
    
            <ProjectCard
            title="Jiwwongrapher Store"
            description="A web application that helps you navigate through your staffs' information."
            techStack={["svelte", "typescript", "tailwindcss", "postgrtesql", "prisma", "cloudflare"]}
            liveLink="https://jiw-prod.rachatat.com/"
            />

            <ProjectCard
            title="BuddyBudder"
            description="A web application that helps you navigate through your staffs' information."
            techStack={["svelte", "typescript", "prisma", "supabase", "vercel", "cloudflare"]}
            githubLink="https://github.com/rbunpat/buddybudder"
            />


        </div>
    </div>
    

</div>




