<script>
  const Contact = [
    {
      name:"martinov.emil@gmail.com",
      link:"mailto:martinov.emil@gmail.com"
    },
    {
      name:"@emilmartinov",
      link:"https://www.twitter.com/emilmartinov"
    },
    {
      name:"github/frank3stein",
      link:"https://github.com/frank3stein/"
    },
    {
      name:"linkedin.com/in/emilmartinov",
      link:"https://www.linkedin.com/in/emilmartinov"
    }
  ]
</script>
<style>
  @import './Contact.css';
</style>
<section>
  <article><a href="tel:+31634336711"># +31 6 343 36 711</a></article>
  <nav>
    {#each Contact as contact}
    <li>
      <a href={contact.link} target="_blank"
        >{contact.name}</a
      >
    </li>
    {/each}
  </nav>
</section>
