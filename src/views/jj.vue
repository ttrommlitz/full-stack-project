<template>
    <div>
      <h1>{{ msg }}</h1>
      <div class="buttons">
        <button @click="$emit('newItem','Title', 'Description')">Add Dummy Data</button>
      </div>
      <div>
        <ul>
          <transition-group name="list-complete" tag="ul">
            <li v-for="(item,index) in toDoList" :key="item">
              <div class="checkbox">
                <input type="checkbox" id="theCheckbox" class="icon" @click="$emit('checked', index)" :checked="item.checked">
              </div>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="editAndTrash">
                <img @click="$emit('deleteItem', index)"  class="icon" src="../assets/trash.png" alt="trashCan">
              </div>
            </li>
          </transition-group>
        </ul>
        <p v-if="toDoList.length === 0">
          Nothing to do yet. Add some items!
        </p>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'theJj',
    props: ['msg','toDoList'],
  }
  </script> 
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    width: 700px;
    padding: 5px 20px;
    margin: 50px auto;
    border-radius: 15px;
    text-align: center;
    border: solid;
    border-color: red;
    border-width: 1px;
  }

  button {
    margin: 10px;
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    border: 1px solid green;
    border-radius: 5px;
    background: white;
    cursor: pointer;
    

  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.6em;
    text-decoration: none;
    color: gray;
  }

  a {
    margin: 0px 20px;
    text-decoration: none;
    color: rgb(145, 135, 135);
  }

  .icon {
    width: 25px;
    margin: 0px 10px;
    cursor: pointer;
  }

  p {
    font-size: 1.1em;
    margin: 0px;
  }

  input {
    margin: 10px;
    height: 30px;
  }

  .checkbox {
    display: flex;
    align-items: center;
  }

  .editAndTrash {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .list-complete-item, .list-complete-move {
  transition: all 1s;
  }
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
}
.list-complete-leave-active {
  position: absolute;
}

input[type=checkbox] {
 accent-color: rebeccapurple;
}
  </style>
  