<template>
    <div>
      <h1>{{ msg }}</h1>
      <div class="buttons">
        <button class="theButton" @click="$emit('newItem','Title', 'Description')">Add Item</button>
      </div>
      <div>
        <ul class="theul">
          <transition-group name="list" tag="ul">
            <li v-for="(item,index) in toDoList" :key="item._id">
              <div class="theli">
                <div class="checkbox">
                  <input type="checkbox" id="theCheckbox" class="icon" @click="$emit('checked', index)" :checked="item.checked">
                </div>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
                <div class="editAndTrash">
                  <img @click="$emit('deleteItem', index)"  class="icon" src="../assets/trash.png" alt="trashCan">
                  <img @click="$emit('changeEditable', index)"  class="icon" src="../assets/edit.png" alt="editButton">
                </div>
              </div>
              <div>
                <form v-show="item.editable" @submit.prevent="$emit('edit1',index, item.title, item.description)" v-if="item.title !== 'Title' && item.description !=='Description'">
                  <div class="conditionalForm">
                    <input type="text" v-model="item.title" class="titleInput">
                    <textarea rows="2" cols="70" v-model="item.description"></textarea>
                  </div>
                  <button class="theButton" style="font-size: 1.1em; margin: 20px;">Submit</button>
                </form>
                <form v-show="item.editable" @submit.prevent="$emit('edit2',index, title, description)" v-else>
                  <div class="conditionalForm">
                    <input type="text" v-model="title" class="titleInput" placeholder="Add Title Here">
                    <textarea rows="2" cols="70" v-model="description" placeholder="Add Description Here"></textarea>
                  </div>
                  <button class="theButton" style="font-size: 1.1em; margin: 20px;">Submit</button>
                </form>
              </div>
            </li>
          </transition-group>
        </ul>
        <div class="noItemsP">
          <p v-if="toDoList.length === 0">
          Nothing to do yet. Add some items!
        </p>
        </div>
      </div>
    </div>
  </template>

  <script>

  export default {
    name: 'theJj',
    props: ['msg','toDoList'],
    data() {
      return {
        title: '',
        description: '',
      }
    },
    updated () {
      this.title = ''
      this.description = ''    
    }
  }
  </script> 
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

  ul {
    list-style-type: none;
    padding-inline-start: 0px;
    position: relative;
  }

  li {
    list-style-type: none;
  }
  .theli {
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .theButton {
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
    max-width: 540px;
    word-wrap: break-word;
  }

  .noItemsP {
    display: flex;
    justify-content: center;
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

  .conditionalForm {
    display: column;
    flex-direction: row;
    width: 600px;
    margin: 0px auto;
  }

  form {
    display: flex;
    width: 700px;
    margin: 0px auto;
  }

  textarea, .titleInput {
    border: 1.5px solid black;
    border-radius: 7px;
    font-family: Avenir, Arial, Helvetica, sans-serif;
    resize: none;
  }

  /* .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
    transition: height s ease-out; 
  }

  .list-enter-from,
  .list-leave-to {
    /* opacity: 0; */
    /* height: 0; */
  /* } */

.list-enter-from, .list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform .5s;
}

.list-enter-active {
  transition: opacity 0.5s;
  animation: list-in 0.5s ease-out forwards;
}

.list-leave-active {
  position: absolute;
  width: 100%;
  animation: list-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes list-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes list-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(350px);
  }
}

input[type=checkbox] {
 accent-color: rebeccapurple;
}

@media only screen and (max-width: 800px) {
  .theli {
    width: 300px;
  }

  form {
    display: block;
    width: 100%;
  }

  p {
    max-width: 200px;
    word-wrap: break-word;
  }

  .conditionalForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  textarea {
    width: 375px
  }
}
  </style>
  