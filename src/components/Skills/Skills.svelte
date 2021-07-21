<script>
  export let skills;
  let column = false;
  const clickHandler = e => {
    e.stopPropagation();
    column = !column;
  };
</script>
<style lang="postcss">
/* @import './Skills.css'; */
ul {
    display: flex;
    background-color: hotpink;
        & li {
        color: antiquewhite;
        text-shadow: 0.2rem;
        font-size: 2rem;
        margin: 0, 0, 0, 0;
        }

        & li:hover {
            color:blueviolet;
            & span {
                visibility: visible;
            }
        }    
}


ul.column {
    flex-direction: column;
    align-content: flex-start;
    float: left;
    padding: 0 0.75rem;
    margin-right:.5rem;
}

</style>
<article>
  <ul class:column on:click="{clickHandler}">
    {#each skills as skill}
    <li class='tooltip'>{skill}</li>
    {/each}
  </ul>
</article>
