<!-- Optional component to display a create item page -->

<template>
  <div>
    <h1>Create Item</h1>
    <form @submit.prevent="$emit('newItem',title,description)">
      <input type="text" id="title" v-model="title" placeholder="Type Title Here" class="title" required="required">
      <textarea id="description" v-model="description" placeholder="Type Description Here" rows="4" cols="50" wrap="soft" required="required" class="description"></textarea>
      <div class="button">
        <button class="submit theButton">Submit</button>
      </div>
    </form>
  </div>
  
</template>

<script>
export default {

}
</script> 

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
  }

  .title {
   margin: 15px 10px;
   border-radius: 17px;
  }

  .description {
    height: 200px;
    margin: 15px 10px;
    border-radius: 17px;
    border: 2px solid black;
  }

  .submit {
    width: 100px;
    margin: 15px;
  }

  .button {
    display: flex;
    justify-content: center;
  }
</style>