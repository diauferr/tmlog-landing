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

</script>

<div class="w-full h-auto flex flex-col lg:flex-row justify-around" id="wrap">
    <div class="w-auto h-auto flex flex-col items-center py-4">
        <img src={IMAGE_URL} alt="">
        <h1 class="text-white font-opensans pt-4">{DESCRIPTION}</h1>
    </div>
    <div class="w-auto h-auto flex flex-row items-center justify-center py-4">
        <img class="mx-4" src={IMAGE_LOCAL} alt="">
        <div class="w-auto h-auto">
            <div class="w-auto h-auto text-white font-opensans">
                <h1>{CONTACT_DETAILS.CITY}</h1>
                <h1>{CONTACT_DETAILS.STREET}</h1>
                <h1>{CONTACT_DETAILS.STREET2}</h1>
                <h1>{CONTACT_DETAILS.TEL}</h1>
                <h1>{CONTACT_DETAILS.EMAIL}</h1>
            </div>
        </div>
    </div>
    <div class="w-auto h-auto flex flex-col items-center justify-center py-4">
        <h1 class="text-white font-opensans font-semidbold pb-4">{HEADING}</h1>
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