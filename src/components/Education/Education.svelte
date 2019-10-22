<script>
  let education = [
    {
      school: "Rotterdam School of Management, Erasmus University",
      degrees: [
      {
        name:"MSc, Marketing Management ",
        link:"https://www.rsm.nl/master/msc-programmes/msc-marketing-management/overview/"
      },
      {
        name:"MSc, Innovation Management ",
        link:"https://www.rsm.nl/master/msc-programmes/msc-management-of-innovation/overview/"
      },  
      {
        name: "MSc, General Management (Renamed, Management) ",
        link:"https://www.rsm.nl/master/msc-programmes/mscba-master-in-management/overview/"
      } 
      ]
    },
    {
      school: "Koc University (Full Scholarship), Istanbul Turkey",
      degrees: [{name:"Bachelor of Physics", link:"https://science.ku.edu.tr/en/departments/physics/about/"}]
    }
  ];
</script>
<style>
    @import "./Education.css";
</style>
<h2>Education</h2>
{#each education as school}
<h3>{school.school}</h3>
{#each school.degrees as degree}
<ul>
  <a href={degree.link} target="_blank">
    <li>{degree.name}</li>
  </a>
</ul>
{/each} {/each}
