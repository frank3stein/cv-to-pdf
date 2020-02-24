<script>
 export let contact;
</script>
<style>
  @import './Contact.css';
</style>
<section>
  <article><a href="tel:+31634336711"># +31 6 343 36 711</a></article>
  <nav>
    {#each contact as contact}
    <li>
      <a href={contact.link} target="_blank"
        >{contact.name}</a
      >
    </li>
    {/each}
  </nav>
</section>
