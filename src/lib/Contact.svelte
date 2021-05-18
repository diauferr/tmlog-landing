<script>

import translations from '../data/translations';
import { dict, locale, t } from '../data/i18n';
$: languages = Object.keys(translations);
$: dict.set(translations);

import Saos from 'saos/src/Saos.svelte';

import { getContext } from 'svelte';
    import Surprise from './Surprise.svelte';
  
    const { open } = getContext('simple-modal');
  
    const showSurprise = () => {
      open(Surprise, { message: "Cotação enviada!" });
      document.getElementById("fs-frm").reset();
    };

</script>

<div class="w-full h-auto py-4" id="wrap">

    <div class="" id="contact">
        <div class="flex flex-row justify-center items-center">
            <img src={$t('contact_data')[0].image_url} alt="" id="think">
            <h1 class="text-2xl md:text-3xl font-semibold text-center py-5 font-opensans uppercase">{$t('contact_data')[0].heading}</h1>
        </div>
        <h3 class="text-center font-medium px-8 pb-6 md:px-36 lg:px-48 xl:px-96 text-2xl">{$t('contact_data')[0].description[0].text1}</h3>
        <p class="text-center px-8 pb-6 md:px-36 lg:px-48 xl:px-96">{$t('contact_data')[0].description[0].text2}</p>
        <p class="text-center px-8 pb-6 md:px-36 lg:px-48 xl:px-96">{$t('contact_data')[0].description[0].text3}</p>
    </div>

    <Saos animation={'scale-in-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
    <form id="fs-frm" target="formSubmitFrame" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/mbjqgkky"
        method="post"
        class="mx-4 my-0 md:mx-24 lg:mx-48 xl:mx-52 2xl:mx-96 py-6 px-6 md:px-36 lg:px-36 xl:px-36 font-opensans font-semibold rounded-md" on:submit={showSurprise}>
        <fieldset id="fs-frm-inputs">
            <label for="full-name" id="margin">{$t('contact_data')[0].email_list[0].list1}</label>
            <input type="text" name="Nome" id="full-name" placeholder={$t('contact_data')[0].placeholder_list[0].list1} required>
            <label for="email-address">{$t('contact_data')[0].email_list[0].list2}</label>
            <input type="email" name="_replyto" id="email-address" placeholder={$t('contact_data')[0].placeholder_list[0].list2} required>
            <label for="phone">{$t('contact_data')[0].email_list[0].list3}</label>
            <input type="text" name="Telefone" id="phone" placeholder={$t('contact_data')[0].placeholder_list[0].list3} required>
            <fieldset id="fs-frm-selects">
                <label for="timely">1. {$t('contact_data')[0].email_list[0].list4}</label>
                <select name="Tipo de serviço" id="timely" required>
                    <option value="Choose" selected="" disabled="">{$t('contact_data')[0].services_list[0].list1}</option>
                    <option value={$t('contact_data')[0].services_list[0].list1}>{$t('contact_data')[0].services_list[0].list2}</option>
                    <option value={$t('contact_data')[0].services_list[0].list2}>{$t('contact_data')[0].services_list[0].list3}</option>
                    <option value={$t('contact_data')[0].services_list[0].list3}>{$t('contact_data')[0].services_list[0].list4}</option>
                    <option value={$t('contact_data')[0].services_list[0].list4}>{$t('contact_data')[0].services_list[0].list5}</option>
                    <option value={$t('contact_data')[0].services_list[0].list5}>{$t('contact_data')[0].services_list[0].list6}</option>
                    <option value={$t('contact_data')[0].services_list[0].list6}>{$t('contact_data')[0].services_list[0].list7}</option>
                </select>
            </fieldset>
            <label for="cargo-origin">2. {$t('contact_data')[0].email_list[0].list5}</label>
            <input type="text" name="Origem da carga" id="cargo-origin" placeholder={$t('contact_data')[0].placeholder_list[0].list4} required>
            <label for="cargo-destination">3. {$t('contact_data')[0].email_list[0].list6}</label>
            <input type="text" name="Destino da carga" id="cargo-destination" placeholder={$t('contact_data')[0].placeholder_list[0].list5} required>
            <label for="cargo-description">{$t('contact_data')[0].email_list[0].list7}</label>
            <textarea rows="3" name="Descrição da carga" id="message"
                placeholder=""
                required=""></textarea>
            <fieldset id="fs-frm-selects">
                <label for="importer">{$t('contact_data')[0].email_list[0].list8}</label>
                <select name="Já realizou transporte internacional?" id="importer" required>
                    <option value={$t('contact_data')[0].services_list[0].list1} selected="" disabled="">{$t('contact_data')[0].services_list[0].list1}</option>
                    <option value={$t('contact_data')[0].importer_list[0].list1}>{$t('contact_data')[0].importer_list[0].list1}</option>
                    <option value={$t('contact_data')[0].importer_list[0].list2}>{$t('contact_data')[0].importer_list[0].list2}</option>
                </select>
            </fieldset>
            <input type="hidden" name="_subject" id="email-subject" value="Nova cotação solicitada:">
        </fieldset>
        <input type="submit" value={$t('contact_data')[0].email_list[0].list9} id="submit" class="uppercase font-semibold slide-hover-left-1">
        <iframe name="formSubmitFrame" tile="Holds Submitted form data" rel="nofollow" class="d-none"></iframe>
    </form>
</Saos>
<!-- <button on:click={showSurprise}>test</button> -->
</div>

<style>

    iframe {
        height: 0px;
        width: 0px;
    }

#wrap {
    background-image: url("/cheese3.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

input[type="submit"] {
    border: 1px solid #3D4DA1 !important;
    background-color: transparent !important;
    color: #3D4DA1 !important;
    font-size: 18px !important;
    font-weight: 600 !important;
    background: transparent !important;
    cursor: pointer !important;
    display: inline-block !important;
    margin-right: 1px !important;
    margin-bottom: 1px !important;
    border-radius: 3px !important;
    text-transform: uppercase !important;
}

input:focus {
    outline: none !important;
}


input.slide-hover-left-1 {
    background-image: linear-gradient(0, #3D4DA1, #3D4DA1) !important;
    background-size: 0 !important;
    transition: .8s !important;
    background-repeat: no-repeat !important;
}

input.slide-hover-left-1:hover {
    background-size: 100% !important;
    color: #fff !important;
}

h1 {
    color: #3D4DA1;
}

h3 {
    color: #3D4DA1;
}

p {
    color: #3D4DA1;
}

/* #submit {
    background-color: #3D4DA1 !important;
    color: #fff !important;
}

#submit:hover {
    background-color: #fff !important;
    color: #3D4DA1 !important;
} */

textarea {
    resize: none;
}

img {
    height: 40px;
}

form {
    background-color: white;
}

#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
    font-family: inherit;
    font-size: 100%;
    color: #3D4DA1;
    border: none;
    border-radius: 0;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
}

#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
    font-size: .825rem;
    margin-bottom: .5rem;
    padding-top: .2rem;
    display: flex;
    align-items: baseline;
}

/* border, padding, margin, width */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    padding: .75em 1rem;
    margin-bottom: 1.5rem;
}

#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
    background-color: white;
    outline-style: solid;
    outline-width: thin;
    outline-color: #3D4DA1;
    outline-offset: -1px;
}

#fs-frm [type="text"],
#fs-frm [type="email"] {
    width: 100%;
}

#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
    width: auto;
    cursor: pointer;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
}

#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
    outline: none;
}

#fs-frm [type="submit"],
#fs-frm [type="reset"] {
    margin-bottom: 0;
}

#fs-frm select {
    text-transform: none;
}

#fs-frm [type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    appearance: checkbox;
    display: inline-block;
    width: auto;
    margin: 0 .5em 0 0 !important;
}

#fs-frm [type="radio"] {
    -webkit-appearance: radio;
    -moz-appearance: radio;
    appearance: radio;
}

#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
    display: inline;
}

#fs-frm fieldset.locale input[name="city"] {
    width: 52%;
}

#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
    width: 20%;
}

#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"] {
    margin-right: 3%;
}

@keyframes -global-from-left {
    0% {
        transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
        opacity: 1;
    }

    100% {
        transform: rotateX(0deg) translateX(0) skewX(0deg);
        opacity: 1;
    }
}

@keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes -global-rotate-in-center {
    0% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-fwd-tr {
    0% {
      transform: translateZ(-1200px) translateY(-700px) translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0) translateY(0) translateX(0);
      opacity: 1;
    }
  }
  @keyframes -global-slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
  @keyframes -global-roll-in-left {
    0% {
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes -global-roll-in-blurred-left {
    0% {
      transform: translateX(-1000px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes -global-tilt-in-fwd-tr {
    0% {
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  @keyframes -global-swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes -global-puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* EXITS */
  @keyframes -global-scale-out-center {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 1;
    }
  }
  @keyframes -global-rotate-out-center {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 0;
    }
  }
  @keyframes -global-rotate-out-2-cw {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes -global-swirl-out-bck {
    0% {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
  }
  @keyframes -global-flip-out-hor-top {
    0% {
      transform: rotateX(0);
      opacity: 1;
    }
    100% {
      transform: rotateX(70deg);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
</style>