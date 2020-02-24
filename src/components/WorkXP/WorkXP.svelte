<script>
  export let workxp;
</script>
<style>
@import './WorkXP.css';
</style>
<h2>Work Experience</h2>
{#each workxp as work}
<h2>{work.title}</h2>
<p>{work.beginningDate} - {work.endDate ? work.endDate : 'Present'}</p>
<p>{work.text}</p>
{/each}
