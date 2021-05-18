<script>
export let navlists = [];
export let header;
export let menu;

import translations from '../data/translations';
import { dict, locale, t } from '../data/i18n';
$: languages = Object.keys(translations);
$: dict.set(translations);

</script>

<section id="navbar">
    <nav class="w-screen h-24 flex justify-around">
        <img class="p-2" src={$t('logo')}>
        <div class="w-auto flex items-center hidden md:flex">
            <ul class="flex justify-around items-center font-opensans">
                {#each $t('navbar') as item}
                <li class="m-3 text-lg uppercase">
                    <a href="{item.path}">{item.label}</a>
                </li>
                {/each}
            </ul>
            <select bind:value={$locale} class="uppercase">
                {#each languages as lang}
                  <option value={lang} class="uppercase flex items-center justify-center">
                    {lang}
                  </option>
                {/each}
              </select>
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
