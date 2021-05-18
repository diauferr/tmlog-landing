<script>
export let footerData = {};
export let socialData = {};

const {
    IMAGE_URL,
    DESCRIPTION,
    IMAGE_LOCAL,
    CONTACT_DETAILS,
    CREDITS,
    CREDITS_EMAIL
} = footerData;

const {
    HEADING,
    IMAGES_LIST
} = socialData;

import translations from '../data/translations';
import { dict, locale, t } from '../data/i18n';
$: languages = Object.keys(translations);
$: dict.set(translations);

</script>

<div class="w-full h-auto flex flex-col lg:flex-row justify-around" id="wrap">
    <div class="w-auto h-auto flex flex-col items-center py-4">
        <img src={$t('footer_data')[0].image_url} alt="">
        <h1 class="text-white font-opensans pt-4">{$t('footer_data')[0].description}</h1>
    </div>
    <div class="w-auto h-auto flex flex-row items-center justify-center py-4">
        <img class="mx-4" src={$t('footer_data')[0].image_local} alt="">
        <div class="w-auto h-auto">
            <div class="w-auto h-auto text-white font-opensans">
                <h1 class="uppercase">{$t('footer_data')[0].contact_details[0].city}</h1>
                <h1>{$t('footer_data')[0].contact_details[0].street}</h1>
                <h1>{$t('footer_data')[0].contact_details[0].street2}</h1>
                <h1>{$t('footer_data')[0].contact_details[0].tel}</h1>
                <h1>{$t('footer_data')[0].contact_details[0].email}</h1>
            </div>
        </div>
    </div>
    <div class="w-auto h-auto flex flex-col items-center justify-center py-4">
        <h1 class="text-white font-opensans font-semidbold pb-4">{$t('social_data')[0].heading}</h1>
        <div class="flex flex-row">
            <a href="https://www.instagram.com/tmloglogistics/" target="_blank">
                <img class="px-4" src={IMAGES_LIST[0]} alt="">
            </a>
            <a href="http://twitter.com/tmloglogistics" target="_blank">
                <img class="px-4" src={IMAGES_LIST[1]} alt=""> 
            </a>
            <a href="https://www.linkedin.com/company/tmlog/" target="_blank">
                <img class="px-4" src={IMAGES_LIST[2]} alt="">
            </a>
        </div>
    </div>
</div>

<style>

#wrap {
    background-color: #3D4DA1;
}

</style>