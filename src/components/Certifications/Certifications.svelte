<style>
    @import './Certifications.css';
</style>
<script>
    const Certifications = [
        {
            name:"Udacity Digital Marketing Nanodegree",
            link:"https://www.udacity.com/course/digital-marketing-nanodegree--nd018"
        },
        {
            name:"Udacity Frontend Developer Nanodegree",
            link:"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"
        }
    ];
</script>
<h2>Certifications</h2>
<article>
    <ul>
        {#each Certifications as certificate}
        <li><a href={certificate.link} target="_blank">{certificate.name}</a></li>
        {/each}
    </ul>
</article>
