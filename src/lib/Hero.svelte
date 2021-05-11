<script>
    export let slogans = [];
</script>

<div class="flex flex-col w-full h-auto pb-48 sm:pb-96 xl:pb-120 pt-6 bg-contain md:bg-cover bg-bottom bg-no-repeat" id="hero">
        {#each slogans as slogan}
        <h1 class="pb-3 mr-6 text-3xl sm:text-5xl font-opensans font-semibold text-right uppercase">{slogan.text}</h1>
        {/each}
</div>
<img src="/wave.svg" alt="" class="w-full">
<style>
    #hero {
       background-image: url('/static/anim.svg');
       overflow-x: hidden;
    }
    h1 {
        color: #3D4DA1;
    }
    img {
        margin-top: -2px;
    }
</style>