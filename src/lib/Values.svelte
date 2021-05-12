<script>
export let valuesData = {};
const {
    HEADING,
    VALUES_LIST
} = valuesData;
</script>

<img src="/wavevalues.svg" alt="" class="w-full">
<div class="w-full h-auto flex flex-col items-center text-center px-8 md:px-28 lg:px-52" id="card">
    {#each VALUES_LIST as list}
    <div class="flex flex-row items-center">
        <img src={list.IMAGE_URL} alt="" class="" id="img">
        <h1 class="pl-2 py-6 text-2xl font-semibold font-opensans uppercase">{list.TITLE}</h1>
    </div>
    <p class="mb-4 p-8 rounded-md font-medium font-opensans">{list.DESCRIPTION}</p>
    {/each}
</div>

<style>

#card {
    background-color: #fff;
}

    h1 {
        color: #3D4DA1;
    }

    h2 {
        color: #3D4DA1;
    }

    p {
        color: #3D4DA1;
    }

    #img {
        height: 40px;
    }

</style>