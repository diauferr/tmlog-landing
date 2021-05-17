<script>
export let navlists = [];
export let header;
export let menu;

</script>

<section id="navbar">
    <nav class="w-screen h-24 flex justify-around">
        <img class="p-2" src={header}>
        <div class="w-auto flex items-center hidden md:flex">
            <ul class="flex justify-around items-center font-opensans">
                {#each navlists as list}
                <li class="m-3 text-lg uppercase">
                    <a class="" href={list.url}>{list.label}</a>
                </li>
                {/each}
            </ul>
        </div>
        <div class="w-auto flex flex-col items-center justify-center md:hidden">
            <button>
                <img id="menu" class="w-12 p-1" src={menu} alt="">
            </button>
            <ul class="flex flex-col justify-around items-center hidden">
                {#each navlists as list}
                <li class="m-3 text-lg uppercase">
                    <a class="" href={list.url}>{list.label}</a>
                </li>
                {/each}
            </ul>
        </div>
    </nav>
</section>

<style>
    #navbar {
        overflow-x: hidden;
        color: #3D4DA1;
    }
</style>
