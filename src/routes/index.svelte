<script>
import Navbar from '../lib/Navbar.svelte';
import Hero from '../lib/Hero.svelte';
import Solutions from '../lib/Solutions.svelte';
import About from '../lib/About.svelte';
import Values from '../lib/Values.svelte';
import Contact from '../lib/Contact.svelte';
import Footer from '../lib/Footer.svelte';
import Modal from 'svelte-simple-modal';
import DATA from '../data/data';
import translations from '../data/translations';
  import { dict, locale, t } from '../data/i18n';
  $: languages = Object.keys(translations);
  $: dict.set(translations);
</script>

<Navbar />
<Hero />
<Solutions />
<About />
<Values />
<Modal>
    <Contact contactData={DATA.CONTACT_DATA}/>
</Modal>
<Footer footerData={DATA.FOOTER_DATA} socialData={DATA.SOCIAL_DATA}/>

<style>
html {
    scroll-behavior: smooth;
}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

</style>
