<script>
  export let skills;
  let column = false;
  const clickHandler = e => {
    e.stopPropagation();
    column = !column;
  };
</script>
<style>
@import './Skills.css';
</style>
<article>
  <ul class:column on:click="{clickHandler}">
    {#each skills as skill}
    <li class='tooltip'>{skill}</li>
    {/each}
  </ul>
</article>
