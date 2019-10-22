<script>
  let workXP = [
    {
      title: "Mentor for Frontend Web Development, Udacity",
      beginningDate: "May 2018",
      endDate: '',
      // dates: "May 2018 - ",
      text:
        "Udacity is an online education platform which partners with companies like Google, Facebook, Github, Amazon and IBM to bring industry standard education programs to prepare candidates to the job market. I work as a reviewer and mentor to enable students grow into their job roles. I have reviewed hundreds of projects, with an average of 4.92 out of 5 as student feedback."
    }
    // {
    //   title: "Neighbourhood Project - https://bit.ly/2PiNPxx",
    //   dates: "June 2016 - January 2017",
    //   text: "Hello there"
    // }
  ];
</script>
<style>
@import './WorkXP.css';
</style>
<h2>Work Experience</h2>
{#each workXP as work}
<h2>{work.title}</h2>
<p>{work.beginningDate} - {work.endDate ? work.endDate : 'now'}</p>
<p>{work.text}</p>
{/each}
