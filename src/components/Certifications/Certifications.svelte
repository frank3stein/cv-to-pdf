<style>
    @import './Certifications.css';
</style>
<script>
    export let certifications;
</script>
<h2>Certifications</h2>
<article>
    <ul>
        {#each certifications as certificate}
        <li><a href={certificate.link} target="_blank">{certificate.name}</a></li>
        {/each}
    </ul>
</article>
