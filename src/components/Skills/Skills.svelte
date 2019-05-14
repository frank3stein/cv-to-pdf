<script>
  import "./Skills.css";
  const skills = ["JavaScript", "CSS", "HTML", "Webpack", "React", "Vue"];
  let column = false;
  const clickHandler = e => {
    e.stopPropagation();
    column = !column;
  };
</script>
<style></style>
<article>
  <ul class:column on:click="{clickHandler}">
    {#each skills as skill}
    <li>{skill}</li>
    {/each}
  </ul>
</article>
