<script>
  import WorkText from "./workText.svelte"
  export let workxp;
</script>
<style>
@import './WorkXP.css';

li {
  list-style-type: disc;
  list-style-position: inside;
  /* text-indent: 1rem; */
}
li {
  margin-top: .5rem;
}

</style>
<h2>Work Experience</h2>
{#each workxp as work}
<h2>{work.title}</h2>
<p>{work.beginningDate} - {work.endDate ? work.endDate : 'Present'}</p>
{/each}
  <p>Udacity is an online education platform which partners with companies like Google, Facebook, Github, Amazon and IBM to bring industry standard education programs to prepare candidates for the job market. 
    <ul>
      <li>
        Reviewed thousands of projects consistently rating high on performance metrics, <b>review rating (&gt;4.9/5)</b>, <b>avg project review turnaround time (&lt;1hour/8hours).</b>
     </li>
     <li>Udacity saw an 260% increase in annual recurring revenue in the first half of 2020, in this unprecendent times I have welcomed new responsibilities. At the moment, I am responsible for 17 course modules across different degrees.
    </li>
    <li>
      Resolved hundreds of issues on Javascript, React/Redux, AWS, through providing 1 to 1 guidance to students on their learning journey, teaching the what, how and why.
    </li>
    <li>Additional Skills: <strong>CI/CD (CircleCI, Travis), Microservices (Docker, Kubernetes), AWS(Lambda, S3, EC2, RDS, DynamoDB, IAM, VPC, SG)</strong></li>
  </ul>
  
