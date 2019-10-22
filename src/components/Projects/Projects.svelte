<script>
  import './Projects.css';
  let projects = [
    {
      title:"Serverless Todo App",
      link:"https://github.com/frank3stein/serverless",
      text:"A react todo app. The backend is deployed using Serverless and Cloudformation template. I used OAuth for authentication and DynamoDB for the database. You can also upload images to the app, which is uplaoded to an S3 bucket, with a presigned URL."
    },
    {
      title: "Neighbourhood Project",
      link:"https://bit.ly/2PiNPxx",
      text:
        "I have used YELP API to pull information about pizzerias around Sydney. The results were shown as pins on google maps. You can change the search query and the results update. The location can be updated as well, the modularity exists, but I didn’t add it to view. Lately in order learn/try Vue, I have updated the project to Vue.js and used webpack to bundle it."
    },
    {
      title: "Interactive Resume",
      link:"https://bit.ly/2V6NumT",
      text:
        "I have used React and modularized each piece of the page. So a json file is fed to the app and from that file React renders the whole page. I would like to add a backend to the app as I get more experienced with  node.js. The whole app is bundled with webpack. Initially the app was using Jquery."
    }
  ];
</script>
<style>
  @import './Projects.css';
</style>
<h2>Projects</h2>
{#each projects as project}
<h2>{project.title} - <a href={project.link}>{project.link}</a></h2>
<p>{project.text}</p>
{/each}
