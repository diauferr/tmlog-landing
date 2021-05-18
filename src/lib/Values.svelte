<script>

import translations from '../data/translations';
import { dict, locale, t } from '../data/i18n';
$: languages = Object.keys(translations);
$: dict.set(translations);

</script>

<!-- <img src="/wavevalues.svg" alt="" class="w-full"> -->
<div class="w-full h-auto flex flex-col items-center text-center px-8 md:px-28 lg:px-52" id="card">
    <h1 class="text-2xl py-12 font-opensans">{$t('values_data')[0].heading}</h1>
    {#each $t('values_data')[0].values_list as { title, description, image_url }}
    <div class="flex flex-row items-center">
        <img src={image_url} alt="" class="" id="img">
        <h1 class="pl-2 py-6 text-2xl font-semibold font-opensans uppercase">{title}</h1>
    </div>
    <p class="mb-4 p-8 rounded-md font-medium font-opensans">{description}</p>
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