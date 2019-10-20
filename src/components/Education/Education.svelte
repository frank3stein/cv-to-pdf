<script>
  import "./Education.css";
  let education = [
    {
      school: "Rotterdam School of Management, Erasmus University",
      degrees: [
        "MSc, Marketing Management ",
        "MSc, Innovation Management ",
        "MSc, General Management "
      ]
    },
    {
      school: "Koc University (Full Scholarship), Istanbul Turkey",
      degrees: ["Bachelor of Physics"]
    }
  ];
</script>
<style>
</style>
<h2>Education</h2>
{#each education as school}
<h3>{school.school}</h3>
{#each school.degrees as degree}
<li>{degree}</li>
{/each} {/each}
