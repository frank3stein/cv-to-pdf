<script>
 export let contact;
 import {Gmail, Linkedin, Github, Twitter} from '@icons-pack/svelte-simple-icons';
let size = 12
</script>
<style>
  @import './Contact.css';
</style>
<section>
  <article><a href="tel:+31634336711">#   +31 6 343 36 711</a></article>
  <nav>
    <!-- {#each contact as contact}
    <li>
      <a href={contact.link} target="_blank"
        >{contact.name}</a
      >
    </li>
    {/each} -->
    <li>
      <Gmail color="#D14836" {size}/> : <a href={contact[0].link} target="_blank"
        >{contact[0].name}</a
      >
    </li>
    <li>
      <Twitter color="#1DA1F2" {size}/> : <a href={contact[1].link} target="_blank"
        >{contact[1].name}</a
      >
    </li>
    <li>
      <Github color="#181717" {size}/> : <a href={contact[2].link} target="_blank"
        >{contact[2].name}</a
      >
    </li>
    <li>
      <Linkedin color="#0077B5" {size}/> : <a href={contact[3].link} target="_blank"
        >{contact[3].name}</a
      >
    </li>
  </nav>
</section>
