<script>
export let aboutData = {};
const {
    HEADING,
    TITLE,
    IMAGE_URL,
    WHY_CHOOSE_US_LIST
} = aboutData;
</script>

<div class="w-full h-auto flex flex-col" id="about-us">
    <div class="flex flex-row justify-center items-center">
        <img src={IMAGE_URL} alt="" id="about-img">
        <h1 class="text-3xl font-semibold text-center py-5 pl-2 font-opensans uppercase">{HEADING}</h1>
    </div>
    <h3 class="text-center font-medium px-8 pb-6 md:px-36 lg:px-48 xl:px-96">{TITLE}</h3>
    <div class="w-auto h-auto flex flex-col md:flex-row md:items-center mx-6 mb-3 rounded-md p-12 pb-3 text-center md:text-justify lg:mx-36 xl:mx-76 2xl:mx-96 shadow-lg" id="card">
        {#each WHY_CHOOSE_US_LIST as list}
        <h2 class="text-white md:px-12 md:pb-4">{list}</h2>
        <br>
        {/each}
        <img src="/logo-mini-white.svg" alt="" id="logo-mini">
    </div>
</div>

<style>
#about-img {
    height: 40px;
}

#logo-mini {
    height: 60px;
    margin-bottom: 25px;
}

h1 {
    color: #3D4DA1;
}

h3 {
    color: #3D4DA1;
}

#card {
    background-color: #3D4DA1;
}
</style>
