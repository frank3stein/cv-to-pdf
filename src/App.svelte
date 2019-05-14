<script>
  import Header from './components/Header/Header.svelte';
  import Skills from './components/Skills/Skills.svelte';
  import Contact from './components/Contact/Contact.svelte';
  import Workxp from './components/WorkXP/WorkXP.svelte';
  import Projects from './components/Projects/Projects.svelte'
  import Education from './components/Education/Education.svelte'
</script>
<article>
  <Header/>
  <Contact/>
  <Skills/>
  <Workxp/>
  <Projects/>
  <Education/>
</article>
<style>
  article {
    box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);
    page-break-after: always;
    background-color: seashell;
  }
  h1 {
    background-color: yellow;
  }
  p {
    background-color:var(--main-color);
  }
</style>
