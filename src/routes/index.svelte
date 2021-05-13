<script>
import Navbar from '../lib/Navbar.svelte';
import Hero from '../lib/Hero.svelte';
import Solutions from '../lib/Solutions.svelte';
import About from '../lib/About.svelte';
import Values from '../lib/Values.svelte';
import Contact from '../lib/Contact.svelte';
import Footer from '../lib/Footer.svelte';
import Modal from 'svelte-simple-modal';
import DATA from "../data/data";
</script>

<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} menu={DATA.MENU} />
<Hero slogans={DATA.HERO_SLOGAN}/>
<Solutions solutionsData={DATA.SOLUTIONS_DATA}/>
<About aboutData={DATA.ABOUT_DATA}/>
<Values valuesData={DATA.VALUES_DATA}/>
<Modal><Contact contactData={DATA.CONTACT_DATA}/></Modal>
<Footer footerData={DATA.FOOTER_DATA} socialData={DATA.SOCIAL_DATA}/>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>
