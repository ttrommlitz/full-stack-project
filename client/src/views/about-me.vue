<template>
  <h1>About Me</h1>
  <div class="paragraph">
    <p>My name is Tyler Trommlitz. I built this website over the the summer as a project to explore Vue. I feel like I've learned a ton from it, and I think that it will set me up to better learn React later this semester.
    Below are some pictures of me and my interests. Enjoy my To-Do List!
  </p>
  </div>
  <div>
    <div class="images">
        <img src="../assets/computer.webp" alt="">
        <img src="../assets/soccer.avif" alt="">
    </div>
    <div class="images">
        <img src="../assets/cooking.png" alt="">
        <img src="../assets/piano.png" alt="">
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    p {
        width: 50%;
    }

    .paragraph {
        display: flex;
        justify-content: center;
    }

    h1 {
        margin: 50px;
    }

    .images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 10px;

    }

    img { 
        width: 20%;
        height: auto;
        margin: 10px;
        display: flex;
    }
</style>