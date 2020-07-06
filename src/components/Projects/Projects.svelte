<script>
  export let projects;
</script>
<style>
  /* @import './Projects.css'; */
</style>
<h2>Projects</h2>
{#each projects as project}
<h2>{project.title} - <a href={project.link}>{project.link}</a></h2>
<p>{project.text}</p>
{/each}
