<script>
  import "./global.css";
  import Header from "./components/Header/Header.svelte";
  import Skills from "./components/Skills/Skills.svelte";
  import Contact from "./components/Contact/Contact.svelte";
  import Workxp from "./components/WorkXP/WorkXP.svelte";
  import Projects from "./components/Projects/Projects.svelte";
  import Education from "./components/Education/Education.svelte";
  import Certifications from "./components/Certifications/Certifications.svelte";
  document.title = "Emil Martinov - CV";

  const fetchData = (async () => {
    let json = await fetch("./info.json");
    return await json.json();
  })();
</script>

{#await fetchData}
  <p>...waiting</p>
{:then { name, contact, skills, workxp, projects, education, certifications }}
  <article>
    <Header {name} />
    <Contact {contact} />
    <Skills {skills} />
    <Workxp {workxp} />
    <Projects {projects} />
    <Education {education} />
    <Certifications {certifications} />
  </article>
{:catch error}
  <p>An error occurred!</p>
{/await}

<style>
  article {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 210mm;
    height: 296mm;
    box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3);
    page-break-after: always;
    background-color: seashell;
    padding: 1rem;
  }
  h1 {
    background-color: yellow;
  }
  p {
    background-color: var(--main-color);
  }

  @media print {
    html {
      font-family: Times;
    }
    article {
      margin-top: 0;
    }
  }
</style>
