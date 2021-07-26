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
  <p>Udacity is an online education platform that partners with companies like Google, Facebook, Github, Amazon, and IBM to bring industry-standard education programs to prepare candidates for the job market. 
    <ul>
      <li>
        Reviewed thousands of projects consistently rating high on performance metrics, <b>Net Project Feedback Score(98/100, 2020)</b>, <b>avg project review turnaround time (&lt;1hour/8hours).</b>
     </li>
     <li>Udacity saw a 260% increase in annual recurring revenue in the first half of 2020, at the height of increased workload, I not only fulfilled my duties but welcomed new ones. At the moment, I am responsible for 17-course modules across different degrees.
    </li>
    <li>
      Resolved thousands of issues on Javascript, React/Redux, AWS, by providing 1 to 1 guidance to students on their learning journey, teaching the what, how, and why.
    </li>
    <li>Additional Skills: <strong>CI/CD (CircleCI, Travis), Microservices (Docker, Kubernetes), AWS(Lambda, S3, EC2, RDS, DynamoDB, IAM, VPC, SG), Vue, Svelte (this CV)</strong></li>
  </ul>
  
