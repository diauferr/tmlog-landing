<script>

export let contactData = {};

const {
    HEADING,
    DESCRIPTION,
    IMAGE_URL,
    EMAIL_LIST,
    SERVICES_LIST,
    IMPORTER_LIST
} = contactData;
</script>

<div class="w-full h-auto">
    <div class="flex flex-row justify-center items-center">
        <img src="/form.svg" alt="" id="think">
        <h1 class="text-3xl font-semibold text-center py-5 font-opensans uppercase">{HEADING}</h1>
    </div>
    <h3 class="text-center font-medium px-8 pb-6 md:px-36 lg:px-48 xl:px-96">{DESCRIPTION[0]}</h3>
    <p class="text-center px-8 pb-6 md:px-36 lg:px-48 xl:px-96">{DESCRIPTION[1]}</p>
    <p class="text-center px-8 pb-6 md:px-36 lg:px-48 xl:px-96">{DESCRIPTION[2]}</p>
</div>

<form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/xqkwpaje" method="post"
    class="mx-4 my-6 md:mx-24 py-6 px-14 md:px-36 lg:px-48 xl:px-96 rounded-md border-2 border-yellow-300 font-opensans font-semibold">
    <fieldset id="fs-frm-inputs">
        <label for="full-name" id="margin">{EMAIL_LIST[0]}</label>
        <input type="text" name="Nome" id="full-name" placeholder="Primeiro e último nome" required="">
        <label for="email-address">{EMAIL_LIST[1]}</label>
        <input type="email" name="_replyto" id="email-address" placeholder="email@dominio.com" required="">
        <label for="phone">{EMAIL_LIST[2]}</label>
        <input type="number" name="Telefone" id="phone" placeholder="11 00000-0000" required="">
        <fieldset id="fs-frm-selects">
            <label for="timely">1. {EMAIL_LIST[3]}</label>
            <select name="Tipo de serviço" id="timely" required="">
                <option value="Choose" selected="" disabled="">{SERVICES_LIST[0]}</option>
                <option value="1">{SERVICES_LIST[1]}</option>
                <option value="2">{SERVICES_LIST[2]}</option>
                <option value="3">{SERVICES_LIST[3]}</option>
                <option value="4">{SERVICES_LIST[4]}</option>
                <option value="5">{SERVICES_LIST[5]}</option>
                <option value="6">{SERVICES_LIST[6]}</option>
            </select>
        </fieldset>
        <label for="cargo-origin">2. {EMAIL_LIST[4]}</label>
        <input type="text" name="Origem da carga" id="cargo-origin" placeholder="Ex: São Paulo, Brasil" required="">
        <label for="cargo-destination">3. {EMAIL_LIST[5]}</label>
        <input type="text" name="Destino da carga" id="cargo-destination" placeholder="Ex: NY, EUA" required="">
        <label for="cargo-description">{EMAIL_LIST[6]}</label>
        <textarea rows="3" name="Descrição da carga" id="message"
            placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium perferendis perspiciatis dolor similique explicabo. Deserunt, vitae?"
            required=""></textarea>
        <fieldset id="fs-frm-selects">
            <label for="importer">1. {EMAIL_LIST[7]}</label>
            <select name="Já realizou transporte internacional?" id="importer" required="">
                <option value="Choose" selected="" disabled="">{SERVICES_LIST[0]}</option>
                <option value="1">{IMPORTER_LIST[0]}</option>
                <option value="2">{IMPORTER_LIST[1]}</option>
            </select>
        </fieldset>
        <input type="hidden" name="_subject" id="email-subject" value="Survey Responses">
    </fieldset>
    <input type="submit" value={EMAIL_LIST[8]} id="submit" class="uppercase font-bold">
</form>
  
<style>

h1 {
    color: #3D4DA1;
}

h3 {
    color: #3D4DA1;
}

p {
    color: #3D4DA1;
}

#submit {
    color: #3D4DA1;
}

textarea {
   resize: none;
}

img {
    height: 40px;
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
  </style>


















<!-- <div class="w-full h-auto">
    <form class="flex flex-col p-8" action="https://formspree.io/f/xqkwpaje" method="POST">
        <label class="bg-gray-300 flex flex-col mb-4 p-3 shadow-lg rounded-md text-white">
            {EMAIL_LIST[0]}
            <input class="text-black p-2" type="text" name="Nome" required>
        </label>
        <label class="bg-gray-300 flex flex-col mb-4 p-3 shadow-lg rounded-md text-white">
            {EMAIL_LIST[1]}
            <input class="text-black p-2" type="email" name="_replyto" required>
        </label>
        <label class="bg-gray-300 flex flex-col mb-8 p-3 shadow-lg rounded-md text-white">
            {EMAIL_LIST[4]}
            <textarea class="h-96 p-2 rounded-md text-black" name="Mensagem" required></textarea>
        </label>

        <button class="mb-8 shadow-lg w-min p-3 px-14 text-white rounded-md self-center" type="submit">{EMAIL_LIST[5]}</button>
    </form>
</div>

<style>

label {
    background-color: #3D4DA1;
    background-color: #FFF38A;
}

button {
    background-color: #3D4DA1;
}

input:focus {
    outline: none !important;
    border: 1px transparent red;
    box-shadow: 0 0 10px #719ECE;
}

textarea:focus {
    outline: none !important;
    border: 1px transparent red;
    box-shadow: 0 0 10px #719ECE;
}

</style> -->
