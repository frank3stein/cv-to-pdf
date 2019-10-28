<script>
  let workXP = [
    {
      title: "Mentor for Cloud Developer, Udacity",
      beginningDate: "June 2019",
      endDate: '',
      text:"Cloud Developer program is designed to take the student from basics like how to host a website on S3 with Cloudfront CDN, spinning up ElasticBeanstalk web app that scales by compute resource needs or traffic. The students also migrate a monolith app to a microservice architecture using AWS. Lastly, the students are guided to tap into the power of serverless."
    },
    {
      title: "Mentor for Frontend Web Development, Udacity",
      beginningDate: "May 2018",
      endDate: '',
      text:
        "Udacity is an online education platform which partners with companies like Google, Facebook, Github, Amazon and IBM to bring industry standard education programs to prepare candidates to the job market. I work as a reviewer and mentor to enable students grow into their job roles. I have reviewed hundreds of projects, with an average of 4.92 out of 5 as student feedback."
    }
  ];
</script>
<style>
@import './WorkXP.css';
</style>
<h2>Work Experience</h2>
{#each workXP as work}
<h2>{work.title}</h2>
<p>{work.beginningDate} - {work.endDate ? work.endDate : 'Present'}</p>
<p>{work.text}</p>
{/each}
