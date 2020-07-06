<script>
  import WorkText from "./workText.svelte"
  export let workxp;
</script>
<style>
/* @import './WorkXP.css'; */

</style>
<h2>Work Experience</h2>
{#each workxp as work}
<h2>{work.title}</h2>
<p>{work.beginningDate} - {work.endDate ? work.endDate : 'Present'}</p>
  <ul>
  {#each work.text as p}
  <WorkText text={p}/>
  {/each}
  </ul>
{/each}
