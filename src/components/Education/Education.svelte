<script>
export let education;
</script>
<style>
    @import "./Education.css";
</style>
<h2>Education</h2>
{#each education as school}
<h3>{school.school}</h3>
{#each school.degrees as degree}
<ul>
  <a href={degree.link} target="_blank">
    <li>{degree.name}</li>
  </a>
</ul>
{/each} {/each}
