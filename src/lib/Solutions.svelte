<script>
export let solutionsData = {};
const {
    HEADING,
    DESCRIPTION,
    ALL_SOLUTIONS,
    SOLUTIONS_LIST
} = solutionsData;
</script>

<div class="w-full h-auto" id="solutions">
    <div class="flex flex-row justify-center items-center">
        <img src="/think.svg" alt="" id="think">
        <h1 class="text-3xl font-semibold text-center py-5 font-opensans uppercase">{HEADING}</h1>
    </div>
    <h3 class="text-center font-medium px-8 pb-6 md:px-36 lg:px-48 xl:px-96 text-2xl">{DESCRIPTION}</h3>
    <div class="flex flex-col lg:flex-row">
        {#each SOLUTIONS_LIST as list}
        <div class="flex flex-col justify-center items-center m-6 p-6 md:mx-24 lg:m-14 rounded-md shadow-lg text-white" id="card">
            <div class="w-max p-7 rounded-full bg-white">
                <img src={list.URL} alt={list.LABEL} class="" />
            </div>
            <h4 class="py-2 font-semibold font-opensans">{list.LABEL}</h4>
            <p class="py-2 text-center font-opensans">{list.DESCRIPTION}</p>
            <a class="py-2 underline font-medium font-opensans" href={list.PAGE}>{ALL_SOLUTIONS}</a>
        </div>
        {/each}
    </div>
</div>

<style>
#card {
    background-color: #3D4DA1;
}

h1 {
    color: #3D4DA1;
}

h4 {
    color: #FFF38A;
}

h3 {
    color: #3D4DA1;
}

a {
    text-decoration-color: #FFF38A;
}

#think {
    height: 40px;
}
</style>
