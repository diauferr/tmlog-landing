<script>

import translations from '../data/translations';
      import { dict, locale, t } from '../data/i18n';
      $: dict.set(translations);
</script>

<!-- <img src="/waveabout.svg" alt="" class="w-full"> -->
<div class="w-full h-auto flex flex-col" id="about-us">
    <div class="flex flex-row justify-center items-center">
        <img src={$t('about_data')[0].image_url} alt="" id="about-img">
        <h1 class="text-3xl font-semibold text-center py-5 pl-2 font-opensans uppercase">{$t('about_data')[0].heading}</h1>
    </div>
    <h3 class="text-center font-medium px-8 pb-6 md:px-36 lg:px-48 xl:px-96 text-2xl">{$t('about_data')[0].title}</h3>
    <div class="w-auto h-auto flex flex-col md:flex-row md:items-center mx-6 mb-3 rounded-md p-12 pb-3 text-center md:text-justify lg:mx-36 xl:mx-76 2xl:mx-96 shadow-lg" id="card">
        {#each  $t('about_data')[0].why_list as { text1, text2}}
        <h2 class="text-white md:px-12 md:pb-4">{text1}</h2>
        <br>
        <h2 class="text-white md:px-12 md:pb-4">{text2}</h2>
        <br>
        {/each}
        <img src="/logo-mini-white.svg" alt="" id="logo-mini">
    </div>
</div>

<style>

#about-us {
    /* background-color: #ffffbf; */
}

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
