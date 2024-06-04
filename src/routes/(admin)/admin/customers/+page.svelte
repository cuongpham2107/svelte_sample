<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <h1>{data.title}</h1>
</main>